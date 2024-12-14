theorem Closed_Subspace_Lindelof() {
  assert(
    ∀T(isLindelof(T) ∧ 
    ∀C(isSubspace(C,T) ∧ isClosed(C,T))) →
    isLindelof(C)
  )
} ↔

proof Closed_Subspace_Lindelof() {
  setVar(T: TopologicalSpace) →
  setVar(C: TopologicalSpace) →
  setVar(H: Set) →
  setVar(𝒰: OpenCover) →
  
  assert(isLindelof(T)) →
  assert(isClosed(H,T)) →
  assert(isOpenCover(𝒰,H)) →
  
  lemma Closed_Complement() {
    assert(isClosed(H,T) → isOpen(S∖H,T))
  } →
  
  apply(Closed_Complement()) →
  
  constructSet(𝒱 := 𝒰 ∪ {S∖H}) →
  assert(isOpenCover(𝒱,S)) →
  
  lemma Lindelof_Property() {
    assert(isLindelof(T) → 
    ∃𝒱ₙ(isCountable(𝒱ₙ) ∧ isSubcover(𝒱ₙ,𝒱)))
  } →
  
  apply(Lindelof_Property()) →
  
  setVar(𝒱ₙ: OpenCover) →
  assert(isCountable(𝒱ₙ)) →
  assert(isSubcover(𝒱ₙ,𝒱)) →
  
  constructSet(𝒲 := 𝒱ₙ∖{S∖H}) →
  assert(isCountable(𝒲)) →
  assert(isOpenCover(𝒲,H)) →
  assert(isSubcover(𝒲,𝒰)) →
  
  conclude(isLindelof(C))
}