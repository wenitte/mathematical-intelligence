theorem ArensFortsIsParacompact() {
  assert(
    ∀T = ⟨S,τ⟩ [ArensFortsSpace(T)] ⇒ Paracompact(T)
  )
} ↔

proof ArensFortsIsParacompact() {
  setVar(T: TopologicalSpace) →
  assume(ArensFortsSpace(T)) →
  
  lemma Properties() {
    assert(CompletelyNormal(T)) ∧
    assert(Lindelöf(T))
  } →

  lemma SeparationAxiomImplication() {
    assert(CompletelyNormal(T) → T₃Space(T))
  } →
  
  apply(Properties()) →
  apply(SeparationAxiomImplication()) →
  assert(T₃Space(T) ∧ Lindelöf(T)) →
  
  lemma LindelöfT₃ImpliesParacompact() {
    assert(∀X [T₃Space(X) ∧ Lindelöf(X) → Paracompact(X)])
  } →
  
  apply(LindelöfT₃ImpliesParacompact()) →
  assert(Paracompact(T))
}