theorem Boolean_Interpretation_Well_Defined() {
  let(L₀: PropositionalLanguage)
  let(v: L₀ → {T,F})
  assert(
    isBoolean(v) ⇒ isWellDefined(v)
  )
}

proof Boolean_Interpretation_Well_Defined_1() {
  lemma UniqueParsability() {
    assert(isUniqueParsable(L₀))
  } →
  apply(UniqueParsability()) →
  assert(canApplyStructuralInduction(L₀)) →
  assert(followsBottomUpSpec(v)) →
  apply(PrincipleOfStructuralInduction()) →
  assert(isWellDefined(v))
}

proof Boolean_Interpretation_Well_Defined_2() {
  setVar(P₀: Vocabulary(L₀))
  assert(∀p ∈ P₀ ⇒ isWellDefined(v(p))) →
  
  // Base case
  assert(∀A ∈ L₀: length(A) = 1 ⇒ isWellDefined(v(A))) →

  // Inductive step
  lemma InductiveHypothesis(k: ℕ) {
    assert(∀A ∈ L₀: length(A) ≤ k ⇒ isWellDefined(v(A)))
  } →

  let(A: WFF, length(A) = k+1) →
  
  case Negation() {
    assert(∃B: A = ¬B ∧ length(B) = k) →
    apply(InductiveHypothesis(k)) →
    assert(v(A) = f^¬(v(B))) →
    assert(isWellDefined(v(A)))
  } ∨

  case BinaryConnective() {
    assert(∃B,C,*: A = (B * C) ∧ length(B) < k+1 ∧ length(C) < k+1) →
    apply(UniqueParsability()) →
    apply(InductiveHypothesis(k)) →
    assert(v(A) = f^*(v(B), v(C))) →
    assert(isWellDefined(v(A)))
  } →

  apply(SecondPrincipleOfMathInduction()) →
  assert(isWellDefined(v))
}