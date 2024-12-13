theorem Binary_Product_Is_Biproduct() {
  assert(
    ∀A: PreadditiveCategory ∧ 
    ∀a₁,a₂ ∈ Objects(A) ∧
    ∃(a₁×a₂,p₁,p₂): BinaryProduct(a₁,a₂) ∧
    ∃i₁: Morphism(a₁ → a₁×a₂) | (
      p₁ ∘ i₁ = 1: a₁→a₁ ∧
      p₂ ∘ i₁ = 0: a₁→a₂
    ) ∧
    ∃i₂: Morphism(a₂ → a₁×a₂) | (
      p₁ ∘ i₂ = 0: a₂→a₁ ∧
      p₂ ∘ i₂ = 1: a₂→a₂
    ) 
    ⇒ (a₁×a₂,i₁,i₂,p₁,p₂) ∈ BinaryBiproduct(a₁,a₂)
  )
} ↔

proof Binary_Product_Is_Biproduct() {
  setVar(A: PreadditiveCategory) →
  setVar(a₁,a₂: Objects(A)) →
  
  lemma BiproductCondition() {
    assert(
      i₁∘p₁ + i₂∘p₂ = 1: a₁×a₂→a₁×a₂
    )
  } →
  
  lemma IdentityMorphismUniqueness() {
    assert(
      1: a₁×a₂→a₁×a₂ ↔ (
        p₁ ∘ 1 = p₁ ∧
        p₂ ∘ 1 = p₂
      )
    )
  } →
  
  lemma FirstProjection() {
    assert(
      p₁ ∘ (i₁∘p₁ + i₂∘p₂) =
      (p₁∘i₁)∘p₁ + (p₁∘i₂)∘p₂ =
      1∘p₁ + 0∘p₂ =
      p₁
    )
  } →
  
  lemma SecondProjection() {
    assert(
      p₂ ∘ (i₁∘p₁ + i₂∘p₂) =
      (p₂∘i₁)∘p₁ + (p₂∘i₂)∘p₂ =
      0∘p₁ + 1∘p₂ =
      p₂
    )
  } →
  
  apply(BiproductCondition()) →
  apply(IdentityMorphismUniqueness()) →
  apply(FirstProjection()) →
  apply(SecondProjection()) →
  
  assert((a₁×a₂,i₁,i₂,p₁,p₂) ∈ BinaryBiproduct(a₁,a₂))
}