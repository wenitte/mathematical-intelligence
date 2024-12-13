theorem CubeExpansion() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)³ = x³ + 3x² + 3x + 1
  )
}

proof CubeExpansion() {
  method1: {
    apply(CubeOfSumCorollary()) →
    conclude()
  }

  method2: {
    setVar(x: ℝ) →
    assert((x + 1)³) →
    apply(SquareExpansionLemma()) →
    assert((x + 1)(x² + 2x + 1)) →
    apply(DistributiveProperty()) →
    assert(x(x² + 2x + 1) + 1(x² + 2x + 1)) →
    apply(DistributiveProperty()) →
    assert(x³ + 3x² + 3x + 1) →
    conclude()
  }
}

lemma SquareExpansionLemma() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)² = x² + 2x + 1
  )
}