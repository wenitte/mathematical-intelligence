theorem Associativity_Group_Direct_Product() {
  assert(
    ∀G,H: Group ∧
    ∀∘₁: Operation(G) ∧
    ∀∘₂: Operation(H) ∧
    let ∘: Operation(G × H) →
    isAssociative(∘)
  )
} ↔

proof Associativity_Group_Direct_Product() {
  setVar(G,H: Group) →
  setVar(∘₁: Operation(G)) →
  setVar(∘₂: Operation(H)) →
  
  assert(isAssociative(∘₁) ∧ isAssociative(∘₂)) →
  
  lemma External_Direct_Product_Associativity() {
    assert(
      ∀S₁,S₂: AlgebraicStructure ∧
      isAssociative(S₁.operation) ∧
      isAssociative(S₂.operation) →
      isAssociative(DirectProduct(S₁,S₂).operation)
    )
  } →
  
  apply(External_Direct_Product_Associativity(), 
    S₁ := G,
    S₂ := H
  ) →
  
  assert(isAssociative(∘))
}