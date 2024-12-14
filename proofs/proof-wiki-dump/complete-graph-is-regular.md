theorem Complete_Graph_Regular() {
  assert(
    ∀p ∈ ℕ ⇒ 
    (isCompleteGraph(K_p) ∧ order(K_p) = p) →
    isRegular(K_p, p-1)
  )
} ↔

proof Complete_Graph_Regular() {
  setVar(p: ℕ) →
  setVar(K_p: Graph) →
  
  assert(|V(K_p)| = p) by def(CompleteGraph) →
  
  lemma Vertex_Adjacency() {
    assert(
      ∀v ∈ V(K_p) ⇒
      |{u ∈ V(K_p) : isAdjacent(v,u)}| = p-1
    ) by def(CompleteGraph)
  } →
  
  lemma Simple_Graph() {
    assert(
      ∀v,u ∈ V(K_p) ⇒
      countEdges(v,u) ≤ 1
    ) by def(CompleteGraph)
  } →
  
  apply(Vertex_Adjacency()) →
  apply(Simple_Graph()) →
  
  assert(
    ∀v ∈ V(K_p) ⇒
    degree(v) = p-1
  ) →
  
  assert(isRegular(K_p, p-1)) by def(RegularGraph)
}