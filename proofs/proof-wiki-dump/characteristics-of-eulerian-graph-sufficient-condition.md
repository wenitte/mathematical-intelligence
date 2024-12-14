theorem EulerianGraphSufficientCondition() {
  let(G: Graph) →
  assert(
    isFinite(G) ∧ isConnected(G) ∧
    ∀v ∈ vertices(G) ⇒ isEven(degree(v))
  ) →
  assert(isEulerian(G))
}

proof EulerianGraphSufficientCondition() {
  let(G: Graph) →
  assume(isConnected(G) ∧ ∀v ∈ vertices(G) ⇒ isEven(degree(v))) →
  
  lemma FindInitialCycle() {
    let(v: Vertex) →
    assert(∃v₁ ∈ vertices(G) ⇒ hasEdge({v, v₁})) →
    assert(∃v₂ ∈ vertices(G) ⇒ hasEdge({v₁, v₂}) ∧ v₂ ≠ v₁) →
    assert(∃C₁: Circuit ⇒ containsVertex(C₁, v))
  } →
  
  apply(FindInitialCycle()) →
  
  lemma BuildEulerianCircuit() {
    let(C: Set[Circuit]) →
    while(¬coversAllEdges(C, G)) {
      let(G₀ = G - edges(C)) →
      let(u ∈ vertices(G₀) ∩ vertices(C)) →
      assert(∃newCircuit: Circuit ⇒ startVertex(newCircuit, u)) →
      updateCircuit(C, newCircuit)
    }
  } →
  
  apply(BuildEulerianCircuit()) →
  
  lemma CyclePartition() {
    assert(∃S: Set[Cycle] ⇒ partitions(S, G)) →
    assert(∀C₁,C₂ ∈ S ⇒ ∃v ∈ vertices(C₁) ∩ vertices(C₂))
  } →
  
  apply(CyclePartition()) →
  assert(isEulerian(G))
}