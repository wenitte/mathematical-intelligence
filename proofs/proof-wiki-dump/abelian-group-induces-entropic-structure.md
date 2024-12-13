theorem Abelian_Group_Entropic() {
  assert(
    ∀G(IsAbelianGroup(G, ∘) ∧
    ∀x,y ∈ G(x * y ≝ x ∘ y⁻¹) →
    IsEntropicStructure(G, *))
  )
} ↔

proof Abelian_Group_Entropic() {
  setVar(G: Group) →
  setVar(a,b,c,d: G) →
  
  lemma Entropic_Condition() {
    assert(
      (a * b) * (c * d) = (a * c) * (b * d)
    )
  } →

  proofChain() {
    (a * b) * (c * d) →
    (a ∘ b⁻¹) ∘ (c ∘ d⁻¹)⁻¹ [by def(*)] →
    (a ∘ b⁻¹) ∘ ((d⁻¹)⁻¹ ∘ c⁻¹) [by InverseOfProduct] →
    (a ∘ b⁻¹) ∘ (d ∘ c⁻¹) [by InverseOfInverse] →
    (a ∘ c⁻¹) ∘ (d ∘ b⁻¹) [by AbelianProperty] →
    (a ∘ c⁻¹) ∘ ((d⁻¹)⁻¹ ∘ b⁻¹) [by InverseOfInverse] →
    (a ∘ c⁻¹) ∘ (b ∘ d⁻¹)⁻¹ [by InverseOfProduct] →
    (a * c) * (b * d) [by def(*)]
  } →

  apply(Entropic_Condition()) →
  assert(IsEntropicStructure(G, *))
}