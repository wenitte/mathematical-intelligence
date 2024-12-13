theorem Canonical_Injection_Right_Inverse() {
  assert(
    ∀G₁[Group(G₁, ∘₁)] ∧ ∀G₂[Group(G₂, ∘₂)] ∧
    let(e₁: identity(G₁)) ∧ let(e₂: identity(G₂)) ∧
    let(G₁×G₂: DirectProduct(G₁, G₂)) ∧
    let(pr₁: G₁×G₂ → G₁) ∧ let(pr₂: G₁×G₂ → G₂) ∧
    let(inj₁: G₁ → G₁×G₂) ∧ let(inj₂: G₂ → G₁×G₂) ⇒
    (pr₁ ∘ inj₁ = I_G₁) ∧ (pr₂ ∘ inj₂ = I_G₂)
  )
} ↔

proof Canonical_Injection_Right_Inverse() {
  setGroups(G₁, G₂) →
  assert(isGroup(G₁, ∘₁) ∧ isGroup(G₂, ∘₂)) →
  
  lemma External_Direct_Product_Projection() {
    assert(
      ∀A,B[AlgebraicStructure(A) ∧ AlgebraicStructure(B)] ⇒
      let(pr: A×B → A) ∧ let(inj: A → A×B) ⇒
      pr ∘ inj = I_A
    )
  } →
  
  apply(External_Direct_Product_Projection(), G₁) →
  apply(External_Direct_Product_Projection(), G₂) →
  
  assert(
    (pr₁ ∘ inj₁ = I_G₁) ∧ (pr₂ ∘ inj₂ = I_G₂)
  )
}