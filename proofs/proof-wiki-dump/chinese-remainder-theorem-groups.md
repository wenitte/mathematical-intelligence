theorem ChineseRemainderTheorem_Groups() {
  setContext(G: Group) →
  setVar(n: ℕ, n ≥ 1) →
  setVar(N_i: NormalSubgroup(G), i ∈ [1..n]) →
  setVar(π_i: G → G/N_i) →
  setVar(π: G → G/N_1 × ... × G/N_n) →
  
  assert(
    (∀x ∈ G: π(x) = (π_1(x),...,π_n(x))) ∧
    (ker(π) = ⋂(i=1..n) N_i) ∧
    (π is surjective ↔ ∀k ≤ n-1: N_(k+1) ∩ (⋂(i=1..k) N_i) = G)
  )
} ↔

proof ChineseRemainderTheorem_Groups() {
  // Kernel proof
  assert(π is homomorphism: ∀π_i are homomorphisms) →
  assert(ker(π) = {x ∈ G | ∀i ∈ [1..n]: π_i(x) = π_i(e)}) →
  assert(ker(π) = {x ∈ G | ∀i ∈ [1..n]: x ∈ N_i}) →
  assert(ker(π) = ⋂(i=1..n) N_i) →

  // Necessity proof
  lemma NecessaryCondition() {
    assume(π is surjective) →
    setVar(x: G) →
    assert(∀i ∃u_i ∈ G: 
      π_i(u_i) = π_i(x) ∧ 
      ∀j≠i: π_j(u_i) = π_j(e)
    ) →
    assert(∀i: u_i^(-1)x ∈ N_i ∧ ∀j≠i: u_i ∈ N_j) →
    assert(∀i,j: x ∈ N_j ∩ (⋂(m≠i) N_m)) →
    conclude(∀j: N_j ∩ (⋂(m≠j) N_m) = G)
  } →

  // Sufficiency proof
  lemma SufficiencyCondition() {
    setVar(n: ℕ) →
    baseCase(n = 1: trivial) →
    inductiveStep(n → n+1) {
      assume(∀k ≤ n: N_(k+1) ∩ (⋂(i=1..k) N_i) = G) →
      setVar(x_1,...,x_n,y ∈ G) →
      assert(∃x ∈ G: ∀i≤n: π_i(x) = π_i(x_i)) →
      assert(∃a ∈ N_(n+1), b ∈ ⋂(i=1..n) N_i: y^(-1)x = ab) →
      assert(∀i≤n: π_i(ya) = π_i(x_i) ∧ π_(n+1)(ya) = π_(n+1)(y)) →
      conclude(π is surjective)
    }
  } →
  
  apply(NecessaryCondition()) →
  apply(SufficiencyCondition()) →
  conclude(theorem)
}