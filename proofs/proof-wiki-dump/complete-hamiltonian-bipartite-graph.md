theorem Complete_Hamiltonian_Bipartite() {
  assert(
    ∀K_{m,n}[BipartiteGraph(K_{m,n}) ∧ Complete(K_{m,n})] ⇒
    [IsHamiltonian(K_{m,n}) ↔ (m = n > 1)]
  )
} ↔

proof Complete_Hamiltonian_Bipartite() {
  assert(¬IsHamiltonian(K_{1,1})) →
  
  lemma NonEqual_NonHamiltonian() {
    assert(
      ∀m,n[m ≠ n ⇒ ¬IsHamiltonian(K_{m,n})]
    )
  } →

  setVar(m = n) →
  
  assert(
    ∀v ∈ V(K_{n,n})[degree(v) = n]
  ) →
  
  lemma Ore() {
    assert(
      ∀G[
        (|V(G)| ≥ 3) ∧
        (∀u,v ∈ V(G)[degree(u) + degree(v) ≥ |V(G)|])
        ⇒ IsHamiltonian(G)
      ]
    )
  } →
  
  apply(Ore()) →
  assert(
    (n > 1) ⇒ IsHamiltonian(K_{n,n})
  ) →
  
  conclude(
    IsHamiltonian(K_{m,n}) ↔ (m = n > 1)
  )
}