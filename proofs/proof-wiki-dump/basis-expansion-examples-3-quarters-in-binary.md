theorem BinaryExpansion_ThreeQuarters() {
  assert(
    ∀x[x = 3/4 ⇒ BinaryRepresentation(x) = [0.11]₂]
  )
} ↔

proof BinaryExpansion_ThreeQuarters() {
  setVar(x: ℚ, x = 3/4) →
  assert(3/4 = 1/2 + 1/4) →
  lemma PowersOfTwo() {
    assert(
      1/2 = 1 × 2⁻¹ ∧
      1/4 = 1 × 2⁻²
    )
  } →
  apply(PowersOfTwo()) →
  assert(3/4 = 1 × 2⁻¹ + 1 × 2⁻²) →
  lemma BinaryNotation() {
    assert(
      [a₁ × 2⁻¹ + a₂ × 2⁻²]ᵢₐₗ ↔ [0.a₁a₂]₂
    )
  } →
  apply(BinaryNotation()) →
  assert(3/4 = [0.11]₂)
}