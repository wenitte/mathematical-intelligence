theorem CauchyHadamard() {
  let(ξ: ℂ)
  let(S(z): ∑_{n=0}^∞ aₙ(z-ξ)ⁿ)
  assert(
    R = radius_of_convergence(S(z)) ↔ 
    1/R = limsup_{n→∞} |aₙ|^(1/n)
  )
} ↔

proof CauchyHadamard_First() {
  let(ε: ℝ₊) →
  let(z: ℂ) →
  assume(|z-ξ| = R-ε) →
  assert(S(z) is absolutely_convergent) →
  apply(nth_root_test) →
  assert(limsup_{n→∞} |aₙ(z-ξ)ⁿ|^(1/n) ≤ 1) →
  apply(complex_sequence_multiple_rule) →
  assert(limsup_{n→∞} |aₙ|^(1/n) ≤ 1/|z-ξ|) →
  assert(limsup_{n→∞} |aₙ|^(1/n) ≤ 1/(R-ε)) →
  forall(ε: ℝ₊) →
  assert(limsup_{n→∞} |aₙ|^(1/n) ≤ 1/R) ∧

  assume(|z-ξ| = R+ε) →
  assert(S(z) is divergent) →
  apply(nth_root_test) →
  assert(limsup_{n→∞} |aₙ(z-ξ)ⁿ|^(1/n) ≥ 1) →
  apply(complex_sequence_multiple_rule) →
  assert(limsup_{n→∞} |aₙ|^(1/n) ≥ 1/(R+ε)) →
  forall(ε: ℝ₊) →
  assert(limsup_{n→∞} |aₙ|^(1/n) ≥ 1/R) →
  
  conclude(limsup_{n→∞} |aₙ|^(1/n) = 1/R)
}

proof CauchyHadamard_Second() {
  let(L = limsup |aₙ|^(1/n)) →
  assume(0 < L < ∞) →
  forall(r ∈ [0,1/L]) →
  assert(L < 1/r) →
  exists(ε: ℝ₊) →
  assert(L + ε < 1/R) →
  let(r̃ = r(L+ε)) →
  assert(0 ≤ r̃ < 1) →
  assert(∀n≫1: |aₙ|^(1/n) < L+ε) →
  assert(∀n≫1: |aₙrⁿ| < (L+ε)ⁿrⁿ = r̃ⁿ) →
  assert(∑_{n=0}^∞ |aₙrⁿ| converges) →
  assert(r ≤ R) →
  assert(1/L ≤ R) ∧

  let(ε ∈ (0,L)) →
  exists(subsequence nₖ) →
  assert(|aₙₖ|^(1/nₖ) > L-ε) →
  assert(|aₙₖ·(1/(L+ε)^(nₖ))| > 1) →
  assert(∑_{n=0}^∞ aₙ(1/(L+ε))ⁿ diverges) →
  assert(R ≤ 1/(L+ε)) →
  forall(ε: ℝ₊) →
  assert(R ≤ 1/L) →
  
  conclude(R = 1/L)
}