theorem Partition_Topology_Basis() {
  assert(
    ∀S(set) ∧ ∀𝒫(partition(S)) ∧
    ∃τ(topology(S)) ∧
    (∀a ∈ τ ↔ a = ⋃B where B ⊆ 𝒫) →
    𝒫 is_basis_of(τ)
  )
} ↔

proof Partition_Topology_Basis() {
  setVar(S: set) →
  setVar(𝒫: partition(S)) →
  setVar(τ: topology(S)) →
  
  lemma Cover_Property() {
    assert(S = ⋃𝒫) →
    assert(S ⊆ ⋃𝒫)
  } →

  lemma Intersection_Property() {
    assert(
      ∀B₁,B₂ ∈ 𝒫 →
      (B₁ ∩ B₂ = ∅) ∧
      (∅ = ⋃∅) ∧
      (∅ ∈ τ)
    )
  } →

  apply(Cover_Property()) →
  apply(Intersection_Property()) →
  
  assert(
    Cover_Property() ∧ 
    Intersection_Property() →
    𝒫 is_basis_of(τ)
  )
}