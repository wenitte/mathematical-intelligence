theorem Binary_Coproduct_Is_Biproduct() {
  assert(
    ∀A: PreadditiveCategory ∧
    ∀a₁,a₂ ∈ Objects(A) ∧
    ∀(a₁ ⊔ a₂, i₁, i₂): BinaryCoproduct(a₁,a₂) ∧
    ∃p₁: Morphism(a₁ ⊔ a₂ → a₁) | 
      (p₁ ∘ i₁ = 1_{a₁→a₁}) ∧ 
      (p₁ ∘ i₂ = 0_{a₂→a₁}) ∧
    ∃p₂: Morphism(a₁ ⊔ a₂ → a₂) |
      (p₂ ∘ i₁ = 0_{a₁→a₂}) ∧
      (p₂ ∘ i₂ = 1_{a₂→a₂}) 
    ⇒ (a₁ ⊔ a₂, i₁, i₂, p₁, p₂) is BinaryBiproduct(a₁,a₂)
  )
} ↔

proof Binary_Coproduct_Is_Biproduct() {
  assume(prerequisites) →
  lemma ValidateBiproduct() {
    assert(i₁∘p₁ + i₂∘p₂ = 1_{a₁⊔a₂→a₁⊔a₂})
  } →
  
  setVar(id: Morphism(a₁⊔a₂ → a₁⊔a₂)) →
  assert(id ∘ i₁ = i₁ ∧ id ∘ i₂ = i₂) →
  
  lemma ComposeWithI₁() {
    assert((i₁∘p₁ + i₂∘p₂) ∘ i₁) →
    assert(i₁∘(p₁∘i₁) + i₂∘(p₂∘i₁)) →
    assert(i₁∘1_{a₁→a₁} + i₂∘0_{a₁→a₂}) →
    assert(i₁)
  } →
  
  lemma ComposeWithI₂() {
    assert((i₁∘p₁ + i₂∘p₂) ∘ i₂) →
    assert(i₁∘(p₁∘i₂) + i₂∘(p₂∘i₂)) →
    assert(i₁∘0_{a₂→a₁} + i₂∘1_{a₂→a₂}) →
    assert(i₂)
  } →
  
  apply(ComposeWithI₁()) →
  apply(ComposeWithI₂()) →
  assert(ValidateBiproduct())
}