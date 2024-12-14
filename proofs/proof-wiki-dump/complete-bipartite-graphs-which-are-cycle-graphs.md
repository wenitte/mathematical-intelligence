theorem BipartiteCycleGraph() {
  assert(
    ∀m,n ∈ ℕ,
    (K_{m,n} is complete bipartite) →
    (K_{m,n} is cycle graph ↔ m=n=2)
  )
}

proof BipartiteCycleGraph() {
  lemma CycleGraphRegularity() {
    assert(
      ∀G(G is cycle graph → G is 2-regular)
    )
  } →
  
  lemma BipartiteRegularity() {
    assert(
      ∀m,n ∈ ℕ,
      (K_{m,n} is 2-regular → m=n=2)
    )
  } →
  
  apply(CycleGraphRegularity()) ∧
  apply(BipartiteRegularity()) →
  
  assert(
    K_{m,n} is cycle graph →
    K_{m,n} is 2-regular →
    m=n=2
  ) →
  
  assert(
    K_{2,2} = C_4
  ) →
  
  conclude(
    K_{m,n} is cycle graph ↔ m=n=2
  )
}