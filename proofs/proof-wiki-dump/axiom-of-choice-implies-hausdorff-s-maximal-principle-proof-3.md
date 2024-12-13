theorem Hausdorff_Maximal_Principle() {
  assert(
    AxiomOfChoice() →
    ∀P[PartialOrder(P) → ∃M(MaximalChain(M, P))]
  )
}

proof Hausdorff_Maximal_Principle() {
  setVar(P: PartialOrder) →
  setVar(𝒞: Set) →
  assert(𝒞 = {C | Chain(C, P)}) →
  
  lemma ChainComplete() {
    assert(ChainClosed(𝒞, ⊆))
  } →

  define(f: 𝒞 → 𝒞) {
    ∀C ∈ 𝒞 →
    if(MaximalChain(C)) {
      return(C)
    } else {
      apply(AxiomOfChoice()) →
      ∃D[Chain(D, P) ∧ C ⊂ D] →
      return(D)
    }
  } →

  assert(∀C ∈ 𝒞 → C ⊆ f(C)) →
  
  lemma FixedPointExists() {
    apply(ChainComplete()) →
    apply(BourbakiWittTheorem(f)) →
    assert(∃M ∈ 𝒞[f(M) = M])
  } →

  setVar(M: Chain) →
  apply(FixedPointExists()) →
  
  assert(f(M) = M) →
  assert(MaximalChain(M)) {
    proof: {
      assume(¬MaximalChain(M)) →
      assert(M ⊂ f(M)) →
      assert(M ≠ f(M)) →
      contradiction()
    }
  } →
  
  conclude(∃M[MaximalChain(M, P)])
}