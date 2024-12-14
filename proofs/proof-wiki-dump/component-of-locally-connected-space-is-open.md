theorem Component_Locally_Connected_Open() {
  assert(
    ∀T(T = (S,τ) ∧ isTopologicalSpace(T) ∧ isLocallyConnected(T)) ∧
    ∀G(isComponent(G,T)) 
    ⇒ isOpen(G,T)
  )
} ↔

proof Component_Locally_Connected_Open() {
  setVar(T: TopologicalSpace) →
  setVar(G: Component) →
  
  lemma LocallyConnected_Basis() {
    assert(
      isLocallyConnected(T) ⇒ 
      ∃B(isBasis(B,T) ∧ ∀b∈B(isConnected(b)))
    )
  } →
  
  assert(S = ⋃{U | isOpen(U,T) ∧ isConnected(U)}) →
  
  lemma Components_Open_Criterion() {
    assert(
      (S = ⋃{U | isOpen(U,T) ∧ isConnected(U)}) ⇒
      ∀C(isComponent(C,T) ⇒ isOpen(C,T))
    )
  } →
  
  apply(Components_Open_Criterion()) →
  assert(isOpen(G,T))
}