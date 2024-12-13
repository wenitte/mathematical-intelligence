theorem Bounds_Natural_Logarithm() {
  assert(
    ∀x ∈ ℝ_{>0} ⇒ (1 - 1/x ≤ ln(x) ≤ x - 1)
  )
} ↔

proof Bounds_Natural_Logarithm() {
  setVar(x: ℝ_{>0}) →
  lemma Upper_Bound_Natural_Logarithm() {
    assert(ln(x) ≤ x - 1)
  } →
  lemma Lower_Bound_Natural_Logarithm() {
    assert(1 - 1/x ≤ ln(x))
  } →
  apply(Upper_Bound_Natural_Logarithm()) ∧
  apply(Lower_Bound_Natural_Logarithm()) →
  assert(1 - 1/x ≤ ln(x) ≤ x - 1)
}