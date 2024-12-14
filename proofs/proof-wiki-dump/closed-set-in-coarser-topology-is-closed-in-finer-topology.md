theorem Closed_Set_Coarser_Topology_Is_Closed_In_Finer() {
  let(X: Set)
  let(τ₁: Topology(X))
  let(τ₂: Topology(X))
  let(C: Subset(X))
  assert(
    (τ₁ ⊆ τ₂) ∧ 
    Is_Closed(C, ⟨X,τ₁⟩) →
    Is_Closed(C, ⟨X,τ₂⟩)
  )
} ↔

proof Closed_Set_Coarser_Topology_Is_Closed_In_Finer() {
  assume(Is_Closed(C, ⟨X,τ₁⟩)) →
  
  assert(
    Is_Closed(C, ⟨X,τ₁⟩) ↔ 
    Is_Open(X∖C, ⟨X,τ₁⟩)
  ) →
  
  assert(
    Is_Open(X∖C, ⟨X,τ₁⟩) ↔ 
    (X∖C) ∈ τ₁
  ) →
  
  assert(
    (τ₁ ⊆ τ₂) ∧ (X∖C) ∈ τ₁ →
    (X∖C) ∈ τ₂
  ) →
  
  assert(
    (X∖C) ∈ τ₂ ↔
    Is_Open(X∖C, ⟨X,τ₂⟩)
  ) →
  
  assert(
    Is_Open(X∖C, ⟨X,τ₂⟩) ↔
    Is_Closed(C, ⟨X,τ₂⟩)
  )
}