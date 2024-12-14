theorem Compact_Particular_Point() {
  let(T = (S, τ_p): TopologicalSpace) →
  assert(isParticularPointSpace(T)) →
  let(p: Element) →
  assert(p ∈ S) →
  assert(isCompact({p}, T))
} ↔

proof Compact_Particular_Point() {
  let(C: Collection) →
  assume(isOpenCover(C, {p}, T)) →
  
  lemma Single_Set_Cover() {
    assert(∃U ∈ C: p ∈ U) →
    assert({U} ⊆ C) →
    assert(isOpenCover({U}, {p}, T))
  } →
  
  apply(Single_Set_Cover()) →
  assert(∃F ⊆ C: isFinite(F) ∧ isOpenCover(F, {p}, T)) →
  
  conclude(isCompact({p}, T))
}