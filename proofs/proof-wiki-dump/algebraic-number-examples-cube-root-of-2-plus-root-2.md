theorem CubeRoot_2PlusRoot2_Algebraic() {
  assert(
    ∃p(x) ∈ ℚ[x] : p(∛(2 + √2)) = 0
  )
} ↔

proof CubeRoot_2PlusRoot2_Algebraic() {
  setVar(x = ∛(2 + √2)) →
  assert(x³ = 2 + √2) →
  assert(x³ - 2 = √2) →
  assert((x³ - 2)² = 2) ↔
  expand((x³ - 2)²) →
  assert(x⁶ - 4x³ + 4 = 2) →
  assert(x⁶ - 4x³ + 2 = 0) →
  lemma AlgebraicNumberDefinition() {
    assert(
      ∀y ∈ ℂ, (∃p(x) ∈ ℚ[x] : p(y) = 0) ↔ y is algebraic
    )
  } →
  apply(AlgebraicNumberDefinition()) →
  assert(
    p(x) = x⁶ - 4x³ + 2 ∈ ℚ[x] ∧ p(∛(2 + √2)) = 0
  ) →
  conclude(∛(2 + √2) is algebraic)
}