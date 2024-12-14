theorem CompactComplementTopology_Connected() {
  assert(
    ∀T = (ℝ,τ) where τ is_CompactComplementTopology ⇒
    T is_Connected
  )
} ↔

proof CompactComplementTopology_Connected() {
  setVar(T: TopologicalSpace) →
  assume(T = (ℝ,τ) ∧ τ is_CompactComplementTopology) →
  
  lemma L1_Irreducible() {
    assert(CompactComplementTopology_is_Irreducible(T))
  } →
  
  lemma L2_IrredImpliesConn() {
    assert(∀S:TopologicalSpace, 
      S is_Irreducible → S is_Connected)
  } →
  
  apply(L1_Irreducible()) →
  apply(L2_IrredImpliesConn()) →
  conclude(T is_Connected)
}