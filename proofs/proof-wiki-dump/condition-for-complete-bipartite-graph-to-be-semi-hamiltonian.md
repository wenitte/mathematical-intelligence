theorem BipartiteGraphSemiHamiltonian() {
  assert(
    ∀G(G = K_{m,n} ∧ BipartiteComplete(G) →
      (SemiHamiltonian(G) ↔ ((m = n = 1) ∨ (m = n + 1) ∨ (n = m + 1)))
    )
  )
}

proof BipartiteGraphSemiHamiltonian() {
  setVar(G: Graph, m,n: ℕ) →
  assume(G = K_{m,n} ∧ BipartiteComplete(G)) →
  
  case1(m = n = 1) {
    assert(G = K_{1,1}) →
    assert(HasHamiltonianPath(K_{1,1})) →
    assert(SemiHamiltonian(K_{1,1}))
  } →

  case2(m = n + 1) {
    setVar(A,B: VertexSet) →
    assert(G = struct{A|B,E} ∧ |A| = m ∧ |B| = n) →
    setVar(A = {u₁,...,u_m}, B = {v₁,...,v_n}) →
    constructPath(P = ⟨u₁,v₁,u₂,v₂,...,u_n,v_n,u_m⟩) →
    assert(IsHamiltonianPath(P)) →
    apply(BipartiteHamiltonianCondition()) →
    assert(¬Hamiltonian(G)) →
    assert(SemiHamiltonian(G))
  } →

  case3(n = m + 1) {
    similarTo(case2) →
    constructPath(P = ⟨v₁,u₁,v₂,u₂,...,v_m,u_m,v_n⟩) →
    assert(IsHamiltonianPath(P)) →
    assert(SemiHamiltonian(G))
  } →

  case4(¬((m = n = 1) ∨ (m = n + 1) ∨ (n = m + 1))) {
    subcase1(m = n) {
      apply(CompleteHamiltonianBipartiteTheorem()) →
      assert(Hamiltonian(G)) →
      assert(¬SemiHamiltonian(G))
    } →
    
    subcase2(m > n + 1) {
      assert(∀P(IsPath(P) → ∃v ∈ A(¬InPath(v,P)))) →
      assert(¬HasHamiltonianPath(G)) →
      assert(¬SemiHamiltonian(G))
    } →
    
    subcase3(n > m + 1) {
      similarTo(subcase2) →
      assert(¬SemiHamiltonian(G))
    }
  } →
  
  conclude(SemiHamiltonian(G) ↔ ((m = n = 1) ∨ (m = n + 1) ∨ (n = m + 1)))
}