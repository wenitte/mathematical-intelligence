theorem CauchyHadamardComplex() {
  let(ξ ∈ ℂ)
  let(S(z) = ∑[n=0→∞] aₙ(z-ξ)ⁿ)
  assert(
    R = radius_of_convergence(S(z)) ↔
    1/R = limsup[n→∞] |aₙ|^(1/n)
  )
}

proof CauchyHadamardComplex() {
  let(L = limsup[n→∞] |aₙ|^(1/n)) →
  assume(0 < L < ∞) →
  
  lemma BoundedCase() {
    ∀r ∈ [0,1/L]: (
      L < 1/r →
      ∃ε > 0: (L + ε < 1/r) →
      let(r̃ = r(L + ε)) →
      assert(0 ≤ r̃ < 1)
    )
  } →
  
  lemma UpperBound() {
    apply(BoundedCase()) →
    assert(∀n≫1: |aₙ|^(1/n) < L + ε) →
    assert(∀n≫1: |aₙrⁿ| < (L + ε)ⁿrⁿ = r̃ⁿ) →
    assert(∑[n=0→∞] |aₙrⁿ| converges) →
    assert(∑[n=0→∞] aₙrⁿ absolutely_converges) →
    assert(r ≤ R) →
    conclude(1/L ≤ R)
  } →
  
  lemma LowerBound() {
    let(ε ∈ (0,L)) →
    assert(∃(nₖ): |aₙₖ|^(1/nₖ) > L - ε) →
    assert(|aₙₖ · (1/(L+ε)ⁿᵏ)| > 1) →
    assert(∑[n=0→∞] aₙ(1/(L+ε))ⁿ diverges) →
    conclude(R ≤ 1/L)
  } →
  
  apply(UpperBound()) ∧ apply(LowerBound()) →
  assert(1/L ≤ R ≤ 1/L) →
  conclude(R = 1/L)
}