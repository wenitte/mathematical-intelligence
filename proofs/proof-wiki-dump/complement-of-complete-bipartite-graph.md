theorem BipartiteComplement() {
  assert(
    ∀G[K_{p,q}] : CompleteBipartiteGraph ⇒
    complement(G) = disconnected(K_p ∪ K_q)
  )
} ↔

proof BipartiteComplement() {
  setVar(G: K_{p,q}) →
  setVar(A: VertexSet, |A| = p) →
  setVar(B: VertexSet, |B| = q) →
  
  lemma BipartiteDefinition() {
    assert(
      isCompleteBipartite(G) ↔ (
        ∀v∈A, ∀w∈B : adjacent(v,w) ∧
        ∀v,w∈A : ¬adjacent(v,w) ∧
        ∀v,w∈B : ¬adjacent(v,w)
      )
    )
  } →
  
  lemma ComplementProperties() {
    assert(
      complement(G) ⇒ (
        ∀v∈A, ∀w∈B : ¬adjacent(v,w) ∧
        ∀v,w∈A : adjacent(v,w) ∧
        ∀v,w∈B : adjacent(v,w)
      )
    )
  } →
  
  assert(
    (∀v,w∈A : adjacent(v,w)) ⇒ subgraph(complement(G), A) = K_p
  ) →
  
  assert(
    (∀v,w∈B : adjacent(v,w)) ⇒ subgraph(complement(G), B) = K_q
  ) →
  
  assert(
    (∀v∈A, ∀w∈B : ¬adjacent(v,w)) ⇒ 
    isDisconnected(complement(G), {K_p, K_q})
  ) →
  
  conclude(complement(G) = disconnected(K_p ∪ K_q))
}