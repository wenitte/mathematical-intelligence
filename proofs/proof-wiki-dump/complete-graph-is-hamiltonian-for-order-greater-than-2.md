theorem CompleteGraphHamiltonian() {
  assert(
    ∀n ∈ ℤ, (n > 2) ∧ (Kₙ = CompleteGraph(n)) →
    isHamiltonian(Kₙ)
  )
} ↔

proof CompleteGraphHamiltonian() {
  lemma NonHamiltonianK2() {
    setVar(n: ℤ = 2) →
    assert(∃u,v ∈ V(K₂): hasUniqueEdge(u,v)) →
    assert(¬canFormCycle(u,v)) →
    conclude(¬isHamiltonian(K₂))
  } →

  case n = 3 {
    assert(K₃ = C₃) →
    apply(CycleGraphIsHamiltonian()) →
    conclude(isHamiltonian(K₃))
  } →

  case n ≥ 4 {
    setVar(u,v ∈ V(Kₙ)) →
    assert(deg(u) = deg(v) = n-1) →
    setVar(G = removeEdge(Kₙ, {u,v})) →
    assert(deg_G(u) = deg_G(v) = n-2) →
    
    lemma DegreeSum() {
      assert(deg_G(u) + deg_G(v) = 2(n-2)) →
      assert(2(n-2) = n + (n-4)) →
      assert(n + (n-4) ≥ n) given(n ≥ 4)
    } →
    
    apply(OreTheorem(G)) →
    assert(isHamiltonian(G)) →
    assert(isHamiltonian(Kₙ) ← isHamiltonian(G))
  } →
  
  conclude(∀n > 2: isHamiltonian(Kₙ))
}