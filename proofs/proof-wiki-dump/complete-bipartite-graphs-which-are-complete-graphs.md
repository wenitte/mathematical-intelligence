theorem BipartiteCompleteGraphs() {
  assert(
    ∀m,n ∈ ℕ ⇒ (
      (K_{m,n} = K_0 ↔ m=n=0) ∧
      (K_{m,n} = K_1 ↔ ((m=0 ∧ n=1) ∨ (m=1 ∧ n=0))) ∧
      (K_{m,n} = K_2 ↔ m=n=1) ∧
      (m>1 ∨ n>1 ⇒ K_{m,n} ≠ K_p ∀p∈ℕ)
    )
  )
}

proof BipartiteCompleteGraphs() {
  // Case 1: K_{0,0}
  lemma NullGraph() {
    assert(K_{0,0} is null graph) →
    assert(null graph is K_0)
  } →
  apply(NullGraph()) →
  assert(K_{0,0} = K_0) →

  // Case 2: K_{0,1} and K_{1,0}
  lemma SingleVertex() {
    assert(K_{0,1} and K_{1,0} have one vertex and no edges) →
    assert(K_1 is edgeless single vertex graph)
  } →
  apply(SingleVertex()) →
  assert(K_{0,1} = K_{1,0} = K_1) →

  // Case 3: K_{1,1}
  lemma TwoVertices() {
    assert(K_{1,1} has two vertices with one edge) →
    assert(K_2 has two vertices with one edge)
  } →
  apply(TwoVertices()) →
  assert(K_{1,1} = K_2) →

  // Case 4: Larger graphs
  setVar(m,n: ℕ) →
  assume(m>1 ∨ n>1) →
  assert(∃ vertices v1,v2 in same partite set) →
  assert(¬∃ edge between v1,v2 by bipartite definition) →
  assert(K_{m,n} not complete) →
  conclude(m>1 ∨ n>1 ⇒ K_{m,n} ≠ K_p ∀p∈ℕ)
}