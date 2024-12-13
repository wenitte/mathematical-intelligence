theorem AlexanderCompactness() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ isTopologicalSpace(T) → 
      (isCompact_OpenCovers(T) ↔ isCompact_SubBasis(T))
    )
  where
    isCompact_OpenCovers(T) := 
      ∀C(isOpenCover(C,S) → ∃F⊆C(isFinite(F) ∧ isSubcover(F,S)))
    isCompact_SubBasis(T) := 
      ∃B(isSubBasis(B,τ) ∧ 
        ∀C(C⊆B ∧ isCover(C,S) → 
          ∃F⊆C(isFinite(F) ∧ isSubcover(F,S))))
  )
} ↔

proof AlexanderCompactness() {
  // Forward direction
  proof_forward() {
    assume(isCompact_OpenCovers(T)) →
    setVar(B: SubBasis(τ)) →
    assert(isSubBasis(B,τ)) →
    assume(C⊆B ∧ isCover(C,S)) →
    assert(isOpenCover(C,S)) →
    apply(isCompact_OpenCovers(T)) →
    conclude(∃F⊆C(isFinite(F) ∧ isSubcover(F,S)))
  } →

  // Reverse direction
  proof_reverse() {
    assume(isCompact_SubBasis(T)) →
    assume(¬isCompact_OpenCovers(T)) →
    
    lemma MaximalNonFiniteCover() {
      apply(ZornsLemma) →
      assert(∃C(
        isOpenCover(C,S) ∧
        ¬∃F⊆C(isFinite(F) ∧ isSubcover(F,S)) ∧
        isMaximal(C)
      ))
    } →
    
    setVar(C: OpenCover) →
    setVar(B: SubBasis(τ)) →
    assert(¬isCover(C∩B, S)) →
    setVar(x: S) →
    assert(x ∉ ⋃(C∩B)) →
    assert(∃U∈C: x∈U) →
    assert(∃{B₁,...,Bₙ}⊆B: x ∈ ⋂Bᵢ ⊆ U) →
    
    ∀i∈{1,...,n}(
      assert(Bᵢ ∉ C) →
      assert(∃Cᵢ⊆C(isFinite(Cᵢ) ∧ isSubcover(Cᵢ∪{Bᵢ}, S)))
    ) →
    
    assert(isSubcover(⋃Cᵢ ∪ {U}, S)) →
    assert(isFinite(⋃Cᵢ ∪ {U})) →
    contradiction()
  }
}