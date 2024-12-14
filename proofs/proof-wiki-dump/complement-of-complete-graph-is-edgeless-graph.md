theorem ComplementCompleteGraph() {
  assert(
    ∀n ∈ ℕ: (K_n ≡ CompleteGraph(n)) → 
    (Complement(K_n) ≡ N_n) where N_n ≡ EdgelessGraph(n)
  )
}

proof ComplementCompleteGraph() {
  setVar(n: ℕ) →
  lemma CompleteGraphDef() {
    assert(
      ∀v ∈ Vertices(K_n): 
      ∀w ∈ Vertices(K_n): 
      v ≠ w → Adjacent(v,w,K_n)
    )
  } →
  
  setVar(K̄_n ≡ Complement(K_n)) →
  setVar(v: Vertex(K̄_n)) →
  
  lemma ComplementDef() {
    assert(
      ∀w ∈ Vertices(K̄_n):
      Adjacent(v,w,K̄_n) ↔ ¬Adjacent(v,w,K_n)
    )
  } →
  
  apply(CompleteGraphDef()) ∧ apply(ComplementDef()) →
  assert(
    ∀w ∈ Vertices(K̄_n):
    ¬Adjacent(v,w,K̄_n)
  ) →
  
  assert(Degree(v,K̄_n) = 0) →
  
  lemma ZeroRegularEdgeless() {
    assert(
      ∀G: Graph:
      (∀v ∈ Vertices(G): Degree(v,G) = 0) ↔ 
      (G ≡ EdgelessGraph(|Vertices(G)|))
    )
  } →
  
  apply(ZeroRegularEdgeless()) →
  assert(K̄_n ≡ N_n)
}