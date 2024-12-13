theorem Boundary_Union_Subset() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isTopologicalSpace(T) ∧
    ∀A,B ⊆ S ⇒
    ∂(A ∪ B) ⊆ ∂A ∪ ∂B)
  )
} ↔

proof Boundary_Union_Subset() {
  setVar(T: TopologicalSpace, A,B: Set) →
  
  lemma Complement_Subset() {
    assert(S\A ∩ S\B ⊆ S\A ∧ S\A ∩ S\B ⊆ S\B)
  } →
  
  lemma Closure_Preserves_Subset() {
    assert((S\A ∩ S\B)⁻ ⊆ (S\A)⁻ ∧ (S\A ∩ S\B)⁻ ⊆ (S\B)⁻)
  } →
  
  lemma Boundary_Definition() {
    assert((S\A ∩ S\B)⁻ ∩ A⁻ ⊆ ∂A ∧ (S\A ∩ S\B)⁻ ∩ B⁻ ⊆ ∂B)
  } →
  
  assert(∂(A ∪ B) = (S\(A ∪ B))⁻ ∩ (A ∪ B)⁻) →
  assert(= (S\A ∩ S\B)⁻ ∩ (A ∪ B)⁻) →
  assert(= (S\A ∩ S\B)⁻ ∩ (A⁻ ∪ B⁻)) →
  assert(= ((S\A ∩ S\B)⁻ ∩ A⁻) ∪ ((S\A ∩ S\B)⁻ ∩ B⁻)) →
  
  apply(Boundary_Definition()) →
  assert(⊆ ∂A ∪ ∂B)
}