theorem Abnormal_Is_Self_Normalizing() {
  assert(
    ∀G[IsGroup(G)] ∧ ∀H ⊆ G[IsAbnormalSubgroup(H,G)] →
    IsSelfNormalizingSubgroup(H,G)
  )
} ↔

proof Abnormal_Is_Self_Normalizing() {
  setVar(G: Group) →
  setVar(H: Subgroup(G)) →
  
  assume(IsAbnormalSubgroup(H,G)) →
  
  lemma Abnormal_Is_Weakly_Abnormal() {
    assert(
      IsAbnormalSubgroup(H,G) → IsWeaklyAbnormalSubgroup(H,G)
    )
  } →
  
  lemma Weakly_Abnormal_Is_Self_Normalizing() {
    assert(
      IsWeaklyAbnormalSubgroup(H,G) → IsSelfNormalizingSubgroup(H,G)
    )
  } →
  
  apply(Abnormal_Is_Weakly_Abnormal()) →
  apply(Weakly_Abnormal_Is_Self_Normalizing()) →
  
  conclude(IsSelfNormalizingSubgroup(H,G))
}