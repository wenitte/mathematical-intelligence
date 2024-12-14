theorem InternalDirectProductIsSubsetProduct() {
  let(S: AlgebraicStructure, ∘: Operation) →
  let(A: Substructure(S), B: Substructure(S)) →
  let(∘_A: Operation = ∘|_A, ∘_B: Operation = ∘|_B) →
  assert(
    isInternalDirectProduct(S, A, B) →
    S = A ∘ B
  )
} ↔

proof InternalDirectProductIsSubsetProduct() {
  let(φ: Function(A × B → S)) →
  define(φ(a,b) = a ∘ b) →
  
  lemma CartesianProductSubset() {
    assert(A × B ⊆ S)
  } →
  
  lemma BijectionCondition() {
    assert(
      isBijection(φ) ↔
      ∀s ∈ S ∃!⟨a,b⟩ ∈ A × B: a ∘ b = s
    )
  } →
  
  assert(isIsomorphism(φ, A × B, S)) →
  assert(isBijection(φ)) →
  
  apply(BijectionCondition()) →
  assert(∀s ∈ S ∃!⟨a,b⟩ ∈ A × B: a ∘ b = s) →
  
  assert(S = {a ∘ b | ⟨a,b⟩ ∈ A × B}) →
  assert(S = A ∘ B) // by definition of subset product
}