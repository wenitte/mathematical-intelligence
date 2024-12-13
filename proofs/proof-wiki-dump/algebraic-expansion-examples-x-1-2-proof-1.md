theorem Expansion_Square_Plus_One() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)² = x² + 2x + 1
  )
} ↔

proof Expansion_Square_Plus_One() {
  setVar(x: ℝ) →
  lemma Square_Of_Sum() {
    assert(
      ∀a,b ∈ ℝ ⇒ (a + b)² = a² + 2ab + b²
    )
  } →
  apply(Square_Of_Sum()) →
  substitute(y ↦ 1) →
  assert(
    (x + 1)² = x² + 2x(1) + 1²
  ) →
  simplify(
    x² + 2x(1) + 1² = x² + 2x + 1
  )
}