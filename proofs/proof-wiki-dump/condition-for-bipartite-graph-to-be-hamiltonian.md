theorem Bipartite_Graph_Hamiltonian() {
  assert(
    ∀G(BipartiteGraph(G) ∧ G = ⟨A|B,E⟩ ∧ Hamiltonian(G) → |A| = |B|)
  )
} ↔

proof Bipartite_Graph_Hamiltonian() {
  setVar(G: BipartiteGraph) →
  assume(G = ⟨A|B,E⟩) →
  assume(Hamiltonian(G)) →
  
  lemma Hamilton_Cycle_Properties() {
    assert(
      ∀e∈E(e connects A↔B) ∧
      ∀C(HamiltonCycle(C) → alternates(C,A,B))
    )
  } →

  assume(|A| > |B|) →
  setVar(m: |A|) →
  setVar(n: |B|) →
  
  lemma Cycle_Path() {
    assert(
      ∀C(HamiltonCycle(C) →
        ∀u∈B(
          startAt(C,u) →
          after(2n edges) → (
            atVertex(u) ∧
            allVisited(B) ∧
            remainUnvisited(m-n vertices in A)
          )
        )
      )
    )
  } →
  
  apply(Cycle_Path()) →
  assert(¬∃C(HamiltonCycle(C))) →
  assert(contradiction(Hamiltonian(G))) →
  therefore(|A| = |B|)
}