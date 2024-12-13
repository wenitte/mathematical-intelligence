theorem AlgebraicExpansion() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)² = x² + 2x + 1
  )
}

proof AlgebraicExpansion_Method1() {
  setVar(x: ℝ) →
  lemma SquareOfSum() {
    assert(
      ∀x,y ∈ ℝ ⇒ (x + y)² = x² + 2xy + y²
    )
  } →
  apply(SquareOfSum(), y ← 1) →
  assert((x + 1)² = x² + 2x(1) + 1²) →
  assert((x + 1)² = x² + 2x + 1)
}

proof AlgebraicExpansion_Method2() {
  setVar(x: ℝ) →
  assert((x + 1)² = (x + 1)(x + 1)) →
  lemma DistributiveProperty() {
    assert(
      ∀a,b,c ∈ ℝ ⇒ a(b + c) = ab + ac
    )
  } →
  apply(DistributiveProperty()) →
  assert((x + 1)(x + 1) = x(x + 1) + 1(x + 1)) →
  apply(DistributiveProperty()) →
  assert(x(x + 1) + 1(x + 1) = (x² + x) + (x + 1)) →
  assert((x² + x) + (x + 1) = x² + 2x + 1)
}