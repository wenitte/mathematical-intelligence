theorem Limit_Element_Characterization() {
  assert(
    ∀A: Class ∧ ∀≤: WellOrdering(A) ∧ ∀x ∈ A ∧ 
    ¬(x = min(A,≤)) ⇒
    (isLimitElement(x,A,≤) ↔ ¬∃y(y = max(x⁻,≤)))
  )
} ↔

proof Limit_Element_Characterization() {
  setVar(A: Class, ≤: WellOrdering(A), x: A) →
  
  // Forward direction
  lemma Forward() {
    assume(isLimitElement(x,A,≤)) →
    assume(∃y(y = max(x⁻,≤))) →
    let(y: max(x⁻,≤)) →
    assert(¬∃z ∈ A: y < z < x) →
    assert(x = succ(y)) →
    assert(¬isLimitElement(x,A,≤)) →
    contradiction()
  } →

  // Backward direction
  lemma Backward() {
    assume(¬∃y(y = max(x⁻,≤))) →
    assume(¬isLimitElement(x,A,≤)) →
    assert(∃y(x = succ(y))) →
    let(y: pred(x)) →
    assert(y = max(x⁻,≤)) →
    contradiction()
  } →

  apply(Forward()) ∧ apply(Backward()) →
  assert(isLimitElement(x,A,≤) ↔ ¬∃y(y = max(x⁻,≤)))
}