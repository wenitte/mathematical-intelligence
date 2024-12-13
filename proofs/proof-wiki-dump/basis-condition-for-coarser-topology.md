theorem Basis_Condition_For_Coarser_Topology() {
  assert(
    ∀S: Set ∧ 
    ∀B₁,B₂: Basis(S) ∧
    ∀τ₁,τ₂: Topology where (
      generates(B₁,τ₁) ∧
      generates(B₂,τ₂)
    ) ⇒
    (∀U ∈ B₁: ∃A ⊆ B₂: U = ⋃A) ⇒
    coarser(τ₁,τ₂)
  )
} ↔

corollary Basis_Condition_Point_Version() {
  assert(
    ∀S: Set ∧ 
    ∀B₁,B₂: Basis(S) ∧
    ∀τ₁,τ₂: Topology where (
      generates(B₁,τ₁) ∧
      generates(B₂,τ₂)
    ) ⇒
    (∀U ∈ B₁: ∀x ∈ U: ∃V ∈ B₂: x ∈ V ⊆ U) ⇒
    coarser(τ₁,τ₂)
  )
} ↔

corollary Subset_Basis_Condition() {
  assert(
    ∀S: Set ∧ 
    ∀B₁,B₂: Basis(S) ∧
    ∀τ₁,τ₂: Topology where (
      generates(B₁,τ₁) ∧
      generates(B₂,τ₂)
    ) ⇒
    B₁ ⊆ B₂ ⇒
    coarser(τ₁,τ₂)
  )
} ↔

proof Basis_Condition_For_Coarser_Topology() {
  setVar(S: Set) →
  setVar(B₁,B₂: Basis(S)) →
  setVar(τ₁,τ₂: Topology) →
  assume(∀U ∈ B₁: ∃A ⊆ B₂: U = ⋃A) →
  
  lemma L1() {
    assert(B₁ ⊆ τ₂) →
    proof {
      setVar(U ∈ B₁) →
      ∃A₂ ⊆ B₂: U = ⋃A₂ →
      apply(topology_generation_axiom(B₂,τ₂)) →
      assert(U ∈ τ₂)
    }
  } →

  lemma L2() {
    assert(τ₁ ⊆ τ₂) →
    proof {
      setVar(W ∈ τ₁) →
      apply(topology_generation_axiom(B₁,τ₁)) →
      ∃A₁ ⊆ B₁: W = ⋃A₁ →
      apply(L1()) →
      assert(A₁ ⊆ τ₂) →
      apply(open_set_axiom_O1(τ₂)) →
      assert(W ∈ τ₂)
    }
  } →
  
  assert(coarser(τ₁,τ₂))
}