theorem ArensFortsParacompact() {
  assert(
    ∀T: TopologicalSpace
    where T = ⟨S,τ⟩ ∧ isArensfortSpace(T)
    ⇒ isParacompact(T)
  )
} ↔

proof ArensFortsParacompact() {
  letVar(C: OpenCover(T)) →
  letVar(H ∈ C where ⟨0,0⟩ ∈ H) →
  assert(
    ∀s ∈ S where s ≠ ⟨0,0⟩ 
    ⇒ {s} ∈ τ
  ) by def(ArensfortSpace) →
  
  letVar(R = {H} ∪ {{s} | s ∈ S ∧ s ∉ H}) →
  assert(
    isRefinement(R,C) ∧
    isLocallyFinite(R)
  ) →
  
  conclude(
    isParacompact(T)
  ) by def(ParacompactSpace)
}