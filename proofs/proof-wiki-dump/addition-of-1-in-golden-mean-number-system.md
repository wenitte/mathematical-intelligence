theorem Golden_Mean_Addition_Algorithm() {
  assert(
    ∀x ∈ ℝ ∧ ∀S(x: GoldenMeanRepresentation) ⇒
    ∃Algorithm(x → x + 1)
  )
} ↔

proof Golden_Mean_Addition_Algorithm() {
  setVar(x: ℝ) →
  setVar(S: GoldenMeanRepresentation(x)) →
  
  define Algorithm() {
    step1: {
      assert(checkLeftOfRadix(S) = 0) → {
        replace(leftOfRadix: 0 → 1) →
        goto(step4)
      } ∨ {
        setVar(m: ℕ = 2) →
        goto(step2)
      }
    } →
    
    step2: {
      assert(digitAt(S, m) = 0) → {
        replace(subString(S, m-2, m): "100" → "011") →
        update(m: m - 2) →
        goto(step3)
      } ∨ {
        update(m: m + 2) →
        repeat(step2)
      }
    } →
    
    step3: {
      assert(m = 0) → {
        replace(leftOfRadix: 0 → 1) →
        goto(step4)
      } ∨ {
        goto(step2)
      }
    } →
    
    step4: {
      simplify(S) →
      terminate()
    }
  } →
  
  lemma Finiteness() {
    assert(
      ¬(∃S: endsWith(S, "010101...")) →
      isFinite(Algorithm())
    )
  } →
  
  lemma Definiteness() {
    assert(
      ∀step ∈ Algorithm() ⇒
      isPreciselyDefined(step)
    )
  } →
  
  lemma Preservation() {
    assert(
      ∀operation ∈ {simplify(S), expand(S), replaceDigit(S)} ⇒
      preservesValue(operation) ∨ addsOne(operation)
    )
  } →
  
  apply(Finiteness()) ∧
  apply(Definiteness()) ∧
  apply(Preservation()) →
  
  assert(
    isValidAlgorithm(Algorithm()) ∧
    correctlyAddsOne(Algorithm())
  )
}