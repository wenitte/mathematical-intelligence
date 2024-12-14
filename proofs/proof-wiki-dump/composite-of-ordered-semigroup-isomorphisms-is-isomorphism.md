theorem Composite_Ordered_Semigroup_Isomorphisms() {
  let(S₁: OrderedSemigroup, S₂: OrderedSemigroup, S₃: OrderedSemigroup) →
  let(φ: Isomorphism(S₁ → S₂), ψ: Isomorphism(S₂ → S₃)) →
  assert(
    (S₁ = ⟨S₁, ∘₁, ≼₁⟩ ∧ 
     S₂ = ⟨S₂, ∘₂, ≼₂⟩ ∧
     S₃ = ⟨S₃, ∘₃, ≼₃⟩) →
    isIsomorphism(ψ ∘ φ, S₁ → S₃)
  )
} ↔

proof Composite_Ordered_Semigroup_Isomorphisms() {
  lemma Algebraic_Isomorphism() {
    apply(Composite_of_Isomorphisms(φ, ψ)) →
    assert(isAlgebraicIsomorphism(ψ ∘ φ))
  } →
  
  lemma Semigroup_Isomorphism() {
    apply(Isomorphism_Preserves_Semigroups(ψ ∘ φ)) →
    assert(isSemigroupIsomorphism(ψ ∘ φ, ⟨S₁, ∘₁⟩ → ⟨S₃, ∘₃⟩))
  } →
  
  lemma Order_Isomorphism() {
    apply(Composite_of_Order_Isomorphisms(φ, ψ)) →
    assert(isOrderIsomorphism(ψ ∘ φ, ⟨S₁, ≼₁⟩ → ⟨S₃, ≼₃⟩))
  } →
  
  assert(
    isSemigroupIsomorphism(ψ ∘ φ) ∧ 
    isOrderIsomorphism(ψ ∘ φ) →
    isOrderedSemigroupIsomorphism(ψ ∘ φ, S₁ → S₃)
  )
}