theorem Cancellation_Property_Product_Inverse() {
  let G be_group(∘, e) →
  let ⊕: G × G → G be_product_inverse(∘) →
  assert(
    ∀x,y,z ∈ G: (x ⊕ z) ⊕ (y ⊕ z) = x ⊕ y
  )
}

proof Cancellation_Property_Product_Inverse() {
  setVar(x,y,z: G) →
  
  lemma Product_Inverse_Definition() {
    assert((x ⊕ z) ⊕ (y ⊕ z) = (x ∘ z⁻¹) ⊕ (y ∘ z⁻¹))
  } →
  
  lemma Product_Inverse_Operation() {
    assert((x ∘ z⁻¹) ⊕ (y ∘ z⁻¹) = (x ∘ z⁻¹) ∘ (y ∘ z⁻¹)⁻¹)
  } →
  
  lemma Inverse_Group_Product() {
    assert((x ∘ z⁻¹) ∘ (y ∘ z⁻¹)⁻¹ = (x ∘ z⁻¹) ∘ (z ∘ y⁻¹))
  } →
  
  lemma Group_Associativity() {
    assert((x ∘ z⁻¹) ∘ (z ∘ y⁻¹) = x ∘ (z⁻¹ ∘ z) ∘ y⁻¹)
  } →
  
  lemma Inverse_Element() {
    assert(x ∘ (z⁻¹ ∘ z) ∘ y⁻¹ = x ∘ e ∘ y⁻¹)
  } →
  
  lemma Identity_Element() {
    assert(x ∘ e ∘ y⁻¹ = x ∘ y⁻¹)
  } →
  
  lemma Final_Product_Inverse() {
    assert(x ∘ y⁻¹ = x ⊕ y)
  } →
  
  apply(Product_Inverse_Definition()) →
  apply(Product_Inverse_Operation()) →
  apply(Inverse_Group_Product()) →
  apply(Group_Associativity()) →
  apply(Inverse_Element()) →
  apply(Identity_Element()) →
  apply(Final_Product_Inverse()) →
  
  conclude((x ⊕ z) ⊕ (y ⊕ z) = x ⊕ y)
}