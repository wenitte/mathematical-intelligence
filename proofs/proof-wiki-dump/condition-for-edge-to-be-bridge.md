theorem EdgeIsBridge() {
  assert(
    ∀G(G = ⟨V,E⟩ ∧ isConnected(G)) ∧
    ∀e ∈ E ⇒
    [isBridge(e) ↔ ¬∃C(isCircuit(C,G) ∧ e ∈ C)]
  )
} ↔

proof EdgeIsBridge() {
  define(G-e := edgeDeletion(G,e)) →
  
  // Necessary Condition (⇒)
  proofByContraposition() {
    assume(∃C[isCircuit(C,G) ∧ e ∈ C]) →
    setVar(e := (u,v)) →
    assert(C = ⟨u,v,w,...,x,u⟩) →
    assert(∃P[isPath(P,G-e) ∧ connects(P,u,v)]) →
    
    // Show G-e is connected
    ∀u₁,v₁ ∈ V {
      assert(∃P[isPath(P,G) ∧ connects(P,u₁,v₁)]) →
      case(e ∉ P) {
        assert(isPath(P,G-e))
      } →
      case(e ∈ P) {
        assert(P = ⟨u₁,...,u,v,...,v₁⟩ ∨ P = ⟨u₁,...,v,u,...,v₁⟩) →
        apply(ConnectednessIsEquivalence()) →
        assert(isConnected(u₁,v₁,G-e))
      }
    } →
    assert(isConnected(G-e)) →
    assert(¬isBridge(e))
  } →
  
  // Sufficient Condition (⇐)
  proofByContraposition() {
    assume(¬isBridge(e)) →
    setVar(e := (u,v)) →
    assert(isConnected(G-e)) →
    assert(∃P[isPath(P,G-e) ∧ connects(P,u,v)]) →
    assert(∃C[isCircuit(C,G) ∧ e ∈ C]) →
    conclude(isBridge(e) → ¬∃C[isCircuit(C,G) ∧ e ∈ C])
  }
}

lemma ConnectednessIsEquivalence() {
  assert(
    isConnected(a,b,G) ∧ isConnected(b,c,G) →
    isConnected(a,c,G)
  )
}