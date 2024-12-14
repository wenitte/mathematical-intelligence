theorem Combination_Theorem_Cauchy_Sequences_Inverse() {
  let R = NormedDivisionRing(norm)
  let {xₙ} = CauchySequence(R)
  assert(
    ¬(xₙ → 0) ⇒
    (∃K ∈ ℕ: ∀n > K: xₙ ≠ 0) ∧
    ({(x_{K+n})⁻¹}_{n∈ℕ} is_cauchy)
  )
} ↔

proof Combination_Theorem_Cauchy_Sequences_Inverse() {
  lemma NonConvergenceBound() {
    assert(¬(xₙ → 0) ⇒ ∃K ∈ ℕ, C ∈ ℝ₊: ∀n > K: C < ∥xₙ∥)
  } →
  apply(NonConvergenceBound()) →
  assert(∃K ∈ ℕ, C ∈ ℝ₊: ∀n > K: 1 < ∥xₙ∥/C) →
  
  apply(NormAxiom_N1()) →
  assert(∀n > K: xₙ ≠ 0) →
  
  setVar(yₙ = x_{K+n}) →
  apply(CauchySubsequenceTheorem()) →
  assert(yₙ is_cauchy) →
  
  setVar(ε > 0) →
  setVar(ε' = εC²) →
  assert(∃N ∈ ℕ: ∀n,m > N: ∥yₙ - yₘ∥ < ε') →
  
  assert(∀n,m > N: 
    (1 < ∥yₙ∥/C ∧ 1 < ∥yₘ∥/C) ∧
    ∥yₙ - yₘ∥ < ε'
  ) →
  
  chain_eq(∥yₙ⁻¹ - yₘ⁻¹∥) {
    < (∥yₙ∥/C)∥yₙ⁻¹ - yₘ⁻¹∥(∥yₘ∥/C) →
    = (1/C²)(∥yₙ∥∥yₙ⁻¹ - yₘ⁻¹∥∥yₘ∥) →
    = (1/C²)∥yₙ(yₙ⁻¹ - yₘ⁻¹)yₘ∥ →
    = (1/C²)∥(yₙyₙ⁻¹ - yₙyₘ⁻¹)yₘ∥ →
    = (1/C²)∥yₙyₙ⁻¹yₘ - yₙyₘ⁻¹yₘ∥ →
    = (1/C²)∥yₘ - yₙ∥ →
    < (1/C²)ε' →
    = (1/C²)(εC²) →
    = ε
  }

  assert({yₙ⁻¹} is_cauchy) →
  assert({(x_{K+n})⁻¹}_{n∈ℕ} is_cauchy)
}