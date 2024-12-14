theorem Eulerian_Graph_Characteristics() {
  assert(
    ∀G: Graph ∧ isFinite(G) ∧ isEulerian(G) →
    (isConnected(G) ∧ ∀v ∈ vertices(G) → isEven(degree(v)))
  )
} ↔

proof Eulerian_Graph_Characteristics() {
  setVar(G: Graph) →
  assume(isEulerian(G)) →
  
  lemma Eulerian_Circuit_Exists() {
    assert(∃C: Circuit →
      (containsAllEdges(C, G) ∧
       usesEachEdgeOnce(C))
    )
  } →
  
  apply(Eulerian_Circuit_Exists()) →
  assert(isConnected(G)) →
  
  setVar(v: Vertex ∈ vertices(G)) →
  setVar(C: Circuit) →
  
  lemma Edge_Pairing() {
    assert(
      ∀w ∈ vertices(G) →
      (inEdges(w, C) = outEdges(w, C)) ∧
      usesEachEdgeOnce(C)
    )
  } →
  
  apply(Edge_Pairing()) →
  assert(
    ∀w ∈ vertices(G) →
    degree(w) = 2 * inEdges(w, C)
  ) →
  
  conclude(
    ∀w ∈ vertices(G) →
    isEven(degree(w))
  )
}