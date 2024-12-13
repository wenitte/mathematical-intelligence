theorem ArensTopology() {
  let T = ⟨S,τ⟩: TopologicalSpace
  assert(
    τ is_topology_on T
  )
} ↔

proof ArensTopology() {
  // Empty set is in topology
  assert(⟨0,0⟩ ∉ ∅) →
  assert(∅ ∈ τ) →

  // Full set S is in topology
  assert(∀m ∈ ℤ₊: {n: ⟨m,n⟩ ∉ S} = ∅) →
  assert(S ∈ τ) →

  // Intersection closure
  setVar(A,B ∈ τ) →
  let H = A ∩ B →
  
  lemma IntersectionCase1() {
    assert(⟨0,0⟩ ∉ A ∨ ⟨0,0⟩ ∉ B) →
    assert(⟨0,0⟩ ∉ (A ∩ B)) →
    assert(H ∈ τ)
  } →

  lemma IntersectionCase2() {
    assert(⟨0,0⟩ ∈ A ∧ ⟨0,0⟩ ∈ B) →
    assert(S∖H = (S∖A) ∪ (S∖B)) →
    
    setVar(r ∈ ℤ₊) →
    let SrA = {n: ⟨r,n⟩ ∉ A} →
    let SrB = {n: ⟨r,n⟩ ∉ B} →
    let SrH = {n: ⟨r,n⟩ ∉ (A ∩ B)} →
    
    assert(SrH = SrA ∪ SrB) →
    assert(finite(SrA) ∧ finite(SrB) → finite(SrH)) →
    assert(H ∈ τ)
  } →

  // Arbitrary union closure
  setVar(𝒰 ⊆ τ) →
  assert(S∖(⋃𝒰) = ⋂{S∖U: U ∈ 𝒰}) →

  lemma UnionCase1() {
    assert(∀U ∈ 𝒰: ⟨0,0⟩ ∉ U) →
    assert(⟨0,0⟩ ∉ ⋃𝒰) →
    assert(⋃𝒰 ∈ τ)
  } →

  lemma UnionCase2() {
    assert(∃m finite: ∀U ∈ 𝒰: finite({n: ⟨m,n⟩ ∉ U})) →
    assert(⋃𝒰 ∈ τ)
  } →

  assert(τ is_topology_on T)
}