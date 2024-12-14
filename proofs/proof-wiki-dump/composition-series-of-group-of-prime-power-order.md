theorem CompositionSeriesPrimePowerOrder() {
  assert(
    ∀G: Group, p ∈ ℙ, n ∈ ℕ ⇒
    (|G| = p^n ∧ n ≥ 1) →
    ∃(G₀,...,Gₙ): Sequence[Group] ⇒
    (G₀ = {e} ∧ Gₙ = G ∧
     ∀k ∈ [0,n-1]: (
       Gₖ ⊂ Gₖ₊₁ ∧
       |Gₖ| = p^k ∧
       Gₖ ◁ Gₖ₊₁ ∧
       Gₖ₊₁/Gₖ is cyclic ∧
       |Gₖ₊₁/Gₖ| = p
     ))
  )
} ↔

proof CompositionSeriesPrimePowerOrder() {
  setInduction(P(n): "|G| = p^n → thesis") →
  
  // Base case
  assert(P(1)) {
    setVar(G: Group, |G| = p) →
    apply(PrimeGroupIsCyclic()) →
    construct(G₀ = {e}, G₁ = G) →
    assert(thesis)
  } →

  // Inductive step
  assume(∀k < n: P(k)) →
  assert(P(n)) {
    setVar(G: Group, |G| = p^n) →
    apply(PrimePowerGroupHasNormalSubgroup()) →
    letVar(H: maximal normal subgroup of G) →
    assert(|H| = p^t, t < n) →
    
    // Prove t = n-1 by contradiction
    assume(t < n-1) {
      assert(|G/H| = p^(n-t) ≥ p²) →
      apply(PrimePowerGroupHasNormalSubgroup(G/H)) →
      letVar(N: normal subgroup of G/H) →
      letVar(H' = {g ∈ G: gH ∈ N}) →
      
      assert(H' ◁ G) {
        prove(closure(H')) →
        prove(inverse_closure(H')) →
        prove(conjugate_closure(H'))
      } →
      
      assert(H'/H = N) →
      assert(|H'| ≥ p|H|) →
      contradiction(maximality of H)
    } →
    
    assert(t = n-1) →
    setVar(Gₙ₋₁ = H) →
    apply(InductionHypothesis(n-1)) →
    assert(G/Gₙ₋₁ is cyclic of order p) →
    assert(thesis)
  }
}