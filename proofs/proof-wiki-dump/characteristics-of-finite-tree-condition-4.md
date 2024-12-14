theorem Finite_Tree_Circuit_Condition() {
  assert(
    ∀T: Graph | isFinite(T) ∧ isSimple(T) ∧ order(T) = n ⇒
    (isTree(T) ↔ (¬hasCycles(T) ∧ ∀e: Edge | addEdge(T,e) → hasCycle(T)))
  )
}

proof Finite_Tree_Circuit_Condition() {
  // Sufficient Condition
  block Sufficient() {
    setVar(T: Graph, V: VertexSet, E: EdgeSet) →
    assert(T = struct(V,E)) →
    assume(isTree(T)) →
    assert(isConnected(T) ∧ ¬hasCycles(T)) →
    setVar(u,v: Vertex | u,v ∈ V) →
    setVar(P: Path = tuple(u,u₁,u₂,...,uₙ₋₁,v)) →
    assert(isPath(P,u,v)) →
    setVar(e: Edge = {u,v}) →
    assert(addEdge(T,e) → 
      exists(C: Cycle = tuple(u,u₁,u₂,...,uₙ₋₁,v,u))) →
    assert(isCycle(C) → isCircuit(C))
  }

  // Necessary Condition
  block Necessary() {
    assume(¬hasCycles(T) ∧ ∀e: Edge | addEdge(T,e) → hasCycle(T)) →
    contradict(¬isConnected(T)) {
      assert(∃e: Edge | connectsComponents(e,T)) →
      assert(isBridge(e)) →
      lemma Bridge_No_Circuit() {
        assert(isBridge(e) → ¬liesonCircuit(e))
      } →
      apply(Bridge_No_Circuit()) →
      assert(addEdge(T,e) → ¬hasCycle(T)) →
      contradiction()
    } →
    assert(isConnected(T) ∧ ¬hasCycles(T)) →
    assert(isTree(T)) →
    assert(isFinite(T) → isFiniteTree(T))
  }
}