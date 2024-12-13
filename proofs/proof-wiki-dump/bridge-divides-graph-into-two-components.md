theorem Bridge_Divides_Graph() {
  assert(
    ∀G[connected_graph] ∧
    ∀e[edge] ∧
    isBridge(e, G) →
    hasComponents(G - e, 2)
  )
} ↔

proof Bridge_Divides_Graph() {
  setVar(G: connected_graph) →
  setVar(e: edge, e = uv) →
  assert(isBridge(e, G)) →
  
  lemma Bridge_Min_Components() {
    assert(isBridge(e, G) → 
           numComponents(G - e) ≥ 2)
  } →

  proof_by_contradiction() {
    assume(numComponents(G - e) > 2) →
    setVar(G₁, G₂, G₃: components(G - e)) →
    assert(u ∈ G₁ ∧ v ∈ G₂) →
    
    lemma Different_Components() {
      assert(isBridge(e, G) →
             ¬(∃C ∈ components(G - e): u ∈ C ∧ v ∈ C))
    } →
    
    assert(G + e connects G₁, G₂) →
    assert(G₃ disconnected_from (G₁ ∪ G₂)) →
    assert(isDisconnected(G)) →
    contradiction(isConnected(G))
  } →
  
  conclude(numComponents(G - e) = 2)
}