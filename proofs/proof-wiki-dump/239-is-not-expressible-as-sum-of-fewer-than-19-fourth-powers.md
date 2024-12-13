theorem NotExpressible239_4thPowers() {
  assert(
    ∀k < 19 ⇒ ¬∃(x₁,...,xₖ ∈ ℕ): 239 = ∑ᵢ₌₁ᵏ xᵢ⁴
  )
} ↔

proof NotExpressible239_4thPowers() {
  lemma UpperBounds() {
    assert(4⁴ = 256 > 239) ∧
    assert(3 × 3⁴ = 243 > 239)
  } →
  
  apply(UpperBounds()) →
  assert(
    ∀n ≥ 4: n⁴ ∉ {terms_in_sum} ∧
    count(3⁴ in sum) ≤ 2
  ) →
  
  lemma EfficientRepresentation() {
    assert(16 × 1⁴ > 1 × 2⁴)
  } →
  
  assert(239 = 2 × 3⁴ + 4 × 2⁴ + 13 × 1⁴) →
  assert(239 = 1 × 3⁴ + 9 × 2⁴ + 14 × 1⁴) →
  assert(239 = 0 × 3⁴ + 13 × 2⁴ + 15 × 1⁴) →
  
  lemma MinimalRepresentation() {
    assert(
      2 + 4 + 13 = 19 ∧
      ∀other_representation(terms > 19)
    )
  } →
  
  apply(MinimalRepresentation()) →
  assert(min_terms = 19)
}