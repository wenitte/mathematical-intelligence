theorem Cauchy_Hadamard_Complex() {
  setVar(ξ: ℂ) ∧
  setVar(S(z): ℂ → ℂ) ∧
  setVar(S(z) = Σ[n=0..∞](aₙ(z-ξ)ⁿ)) ∧
  assert(
    1/R = limsup[n→∞](|aₙ|^(1/n)) ∧
    (limsup[n→∞](|aₙ|^(1/n)) = 0 → R = ∞ ∧ ∀z∈ℂ(S(z) converges absolutely))
  )
} ↔

proof Cauchy_Hadamard_Complex() {
  part1: {
    setVar(ε: ℝ₊) ∧
    setVar(z: ℂ) ∧
    assume(|z-ξ| = R-ε) →
    assert(S(z) converges absolutely) →
    apply(nth_Root_Test) →
    assert(limsup[n→∞](|aₙ(z-ξ)ⁿ|^(1/n)) ≤ 1) →
    apply(Complex_Sequence_Multiple_Rule) →
    assert(limsup[n→∞](|aₙ|^(1/n)) ≤ 1/|z-ξ|) →
    assert(limsup[n→∞](|aₙ|^(1/n)) ≤ 1/(R-ε)) →
    apply(Arbitrary_ε_Limit) →
    assert(limsup[n→∞](|aₙ|^(1/n)) ≤ 1/R)
  } ∧

  part2: {
    setVar(ε: ℝ₊) ∧
    assume(|z-ξ| = R+ε) →
    assert(S(z) diverges) →
    apply(nth_Root_Test) →
    assert(limsup[n→∞](|aₙ(z-ξ)ⁿ|^(1/n)) ≥ 1) →
    apply(Complex_Sequence_Multiple_Rule) →
    assert(limsup[n→∞](|aₙ|^(1/n)) ≥ 1/|z-ξ|) →
    assert(limsup[n→∞](|aₙ|^(1/n)) ≥ 1/(R+ε)) →
    apply(Arbitrary_ε_Limit) →
    assert(limsup[n→∞](|aₙ|^(1/n)) ≥ 1/R)
  } →

  conclude(
    (part1 ∧ part2) →
    limsup[n→∞](|aₙ|^(1/n)) = 1/R
  )
}