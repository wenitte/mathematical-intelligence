theorem EulerianGraphCharacteristics() {
  assert(
    ∀G(Graph(G) ∧ Finite(G) ∧ Undirected(G)) ⇒
    (Eulerian(G) ↔ (Connected(G) ∧ ∀v∈V(G)(EvenDegree(v))))
  )
}

proof NecessaryCondition() {
  setVar(G: Graph) →
  assume(Eulerian(G)) →
  assert(∃C(Circuit(C) ∧ Covers(C,G))) →
  assert(Connected(G)) →
  
  setVar(v: Vertex(G)) →
  assert(∀e∈E(G)(UsedOnce(e,C))) →
  assert(∀w∈V(G)\{v}(
    Enters(C,w) = 1 ∧ Leaves(C,w) = 1
  )) →
  assert(∀w∈V(G)(EvenDegree(w)))
}

proof SufficientCondition1() {
  setVar(G: Graph) →
  assume(Connected(G) ∧ ∀v∈V(G)(EvenDegree(v))) →
  
  lemma CycleExistence() {
    assert(∀v∈V(G)(∃C(Cycle(C) ∧ Contains(C,v))))
  } →
  
  setVar(v: Vertex(G)) →
  setVar(C₁: Circuit) →
  construct(C₁, {
    start(v) →
    while(∃e∈E(G)(Unused(e))) {
      extend(C₁, NextUnusedEdge())
    } →
    return(C₁)
  }) →
  
  if(Covers(C₁,G)) {
    assert(Eulerian(G))
  } else {
    setVar(G₀: Graph = G\E(C₁)) →
    while(∃e∈E(G₀)) {
      setVar(u: Vertex ∈ V(G₀)∩V(C₁)) →
      setVar(C₂: Circuit) →
      construct(C₂, StartAt(u)) →
      merge(C₁,C₂)
    } →
    assert(Eulerian(G))
  }
}

proof SufficientCondition2() {
  setVar(G: Graph) →
  assume(Connected(G) ∧ ∀v∈V(G)(EvenDegree(v))) →
  
  lemma CycleDecomposition() {
    assert(∃S(CycleSet(S) ∧ Partitions(S,G)))
  } →
  
  setVar(S: CycleSet) →
  setVar(C: Circuit) →
  construct(C, {
    setVar(v: Vertex(G)) →
    setVar(C₁ ∈ S) →
    traverse(C₁) →
    while(∃Cᵢ∈S(Untraversed(Cᵢ))) {
      merge(C, NextIntersectingCycle())
    }
  }) →
  
  assert(Covers(C,G)) →
  assert(Eulerian(G))
}