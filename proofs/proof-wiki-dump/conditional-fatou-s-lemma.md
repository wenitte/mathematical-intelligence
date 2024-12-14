theorem Conditional_Fatous_Lemma() {
  let(Ω, Σ, Pr: ProbabilitySpace) ∧
  let(X: RandomVariable, non_negative ∧ integrable) ∧
  let(Xₙ: Sequence[RandomVariable], ∀n ∈ ℕ: non_negative ∧ integrable) ∧
  let(𝔾 ⊆ Σ: SubSigmaAlgebra) ∧
  let(E[Xₙ|𝔾]: ConditionalExpectation, ∀n ∈ ℕ) ∧
  let(E[liminf(n→∞)Xₙ|𝔾]: ConditionalExpectation) →
  assert(
    E[liminf(n→∞)Xₙ|𝔾] ≤ liminf(n→∞)E[Xₙ|𝔾] almost_everywhere
  )
} ↔

proof Conditional_Fatous_Lemma() {
  apply(ConditionalExpectation_Measurable) →
  assert(E[Xₙ|𝔾] = E[E[Xₙ|𝔾]|𝔾]) →
  
  lemma Reduction() {
    assert(
      E[liminf(n→∞)E[Xₙ|𝔾] - liminf(n→∞)Xₙ|𝔾] ≥ 0 almost_everywhere
    )
  } →

  apply(ConditionalExpectation_NonNegative) →
  assert(∀A ∈ 𝔾: E[(liminf(n→∞)E[Xₙ|𝔾] - liminf(n→∞)Xₙ)·1_A] ≥ 0) →

  let(A ∈ 𝔾) →
  assert(
    E[(liminf(n→∞)E[Xₙ|𝔾] - liminf(n→∞)Xₙ)·1_A] =
    ∫_A(liminf(n→∞)E[Xₙ|𝔾] - liminf(n→∞)Xₙ)dPr
  ) →

  apply(Integral_Additivity) →
  assert(
    = ∫_A(liminf(n→∞)E[Xₙ|𝔾])dPr - ∫_A(liminf(n→∞)Xₙ)dPr
  ) →

  apply(Fatous_Lemma_Integrals) →
  assert(
    ≥ ∫_A(liminf(n→∞)E[Xₙ|𝔾])dPr - liminf(n→∞)∫_A(Xₙ)dPr
  ) →

  apply(ConditionalExpectation_Definition) →
  assert(
    = ∫_A(liminf(n→∞)E[Xₙ|𝔾])dPr - liminf(n→∞)∫_A(E[Xₙ|𝔾])dPr
  ) →

  apply(Fatous_Lemma_Integrals) →
  assert(≥ 0)
}