theorem Field_Infinite() {
  assert(
    ∀F: Field ∧ AlgebraicallyClosed(F) → Infinite(F)
  )
} ↔

proof Field_Infinite() {
  // Use contrapositive: finite → not algebraically closed
  lemma Contrapositive() {
    assert(
      ∀F: Field ∧ Finite(F) → ¬AlgebraicallyClosed(F)
    )
  } →
  
  setVar(F: Field, Finite(F)) →
  
  // Define polynomial f(x)
  def(f: ℙ[x]) {
    f(x) = 1 + ∏(a ∈ F)(x - a)
  } →
  
  // Field is a ring property
  assert(IsRing(F)) →
  
  // Ring product property
  lemma RingProduct() {
    assert(
      ∀x ∈ F: ∏(a ∈ F)(x - a) = 0
    )
  } →
  
  // Evaluate f(a) for all a ∈ F
  assert(
    ∀a ∈ F: f(a) = 1 + 0 ≠ 0
  ) →
  
  // f has no roots in F
  assert(
    ∀a ∈ F: f(a) ≠ 0
  ) →
  
  // F not algebraically closed
  conclude(¬AlgebraicallyClosed(F)) →
  
  // Apply contrapositive
  apply(RuleOfTransposition) →
  
  conclude(
    AlgebraicallyClosed(F) → Infinite(F)
  )
}