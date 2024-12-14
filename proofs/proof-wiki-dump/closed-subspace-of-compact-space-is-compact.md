theorem Closed_Subspace_Compact() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isCompact(T)) ∧
    ∀C(C = ⟨H,τ_H⟩ ∧ isSubspace(C,T)) ∧
    isClosed(C,T) →
    isCompact(⟨H,τ⟩)
  )
} ↔

proof Closed_Subspace_Compact() {
  setVar(T: TopologicalSpace) →
  setVar(C: TopologicalSpace) →
  assume(isCompact(T) ∧ isClosed(C,T)) →
  setVar(𝓤: OpenCover(C)) →
  
  assert(isClosed(C,T) → isOpen(T∖C, T)) →
  
  lemma Extended_Cover() {
    assert(𝓤 ∪ {T∖C} isOpenCover(T))
  } →
  
  apply(isCompact(T)) →
  assert(∃𝓥(𝓥 ⊆ (𝓤 ∪ {T∖C}) ∧ isFinite(𝓥) ∧ covers(𝓥,T))) →
  setVar(𝓥 = {U₁,U₂,...,Uᵣ}) →
  
  lemma Cover_Restriction() {
    assert((T∖C) ∈ 𝓥 → (𝓥∖{T∖C} covers(C))) ∧
    assert((T∖C) ∉ 𝓥 → (𝓥 covers(C)))
  } →
  
  apply(Cover_Restriction()) →
  assert(∃𝓦(𝓦 ⊆ 𝓤 ∧ isFinite(𝓦) ∧ covers(𝓦,C))) →
  conclude(isCompact(⟨H,τ⟩))
}