theorem ArensForte_IsParacompact() {
  assert(
    ∀T = (S,τ) [ArensForteSpace(T)] ⇒ Paracompact(T)
  )
} ↔

proof ArensForte_IsParacompact_Direct() {
  setVar(T: TopologicalSpace) →
  assert(ArensForteSpace(T)) →
  setVar(C: OpenCover(T)) →
  ∃H ∈ C [Contains(H, (0,0))] →
  assert(
    ∀s ∈ S [s ≠ (0,0) ⇒ IsOpen({s}, T)]
  ) →
  constructCover(
    R = H ∪ {{s} | s ∈ S\H}
  ) →
  assert(Refinement(R, C)) ∧
  assert(LocallyFinite(R)) →
  assert(Paracompact(T))
} ↔

proof ArensForte_IsParacompact_Indirect() {
  setVar(T: TopologicalSpace) →
  assert(ArensForteSpace(T)) →
  lemma L1() {
    assert(CompletelyNormal(T))
  } →
  lemma L2() {
    assert(Lindelöf(T))
  } →
  lemma L3() {
    assert(CompletelyNormal(T) ⇒ T3Space(T))
  } →
  apply(L1(), L2(), L3()) →
  apply(TheoremLindelöfT3IsParacompact()) →
  assert(Paracompact(T))
}