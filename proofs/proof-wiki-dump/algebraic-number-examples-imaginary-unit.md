theorem Imaginary_Unit_Is_Algebraic() {
  assert(
    i ∈ A  // where A is the set of algebraic numbers
  )
} ↔

proof Imaginary_Unit_Is_Algebraic() {
  setDef(i: ℂ | i² = -1) →
  setVar(p(x): ℝ[x] | p(x) = x² + 1) →
  assert(p(i) = i² + 1) →
  assert(p(i) = -1 + 1) →
  assert(p(i) = 0) →
  lemma AlgebraicNumberDef() {
    assert(
      ∀z ∈ ℂ [(∃q ∈ ℚ[x])(q ≠ 0 ∧ q(z) = 0)] ↔ z ∈ A
    )
  } →
  apply(AlgebraicNumberDef()) →
  assert(p ∈ ℚ[x] ∧ p ≠ 0 ∧ p(i) = 0) →
  conclude(i ∈ A)
}