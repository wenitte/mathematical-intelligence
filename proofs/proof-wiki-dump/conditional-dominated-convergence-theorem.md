theorem ConditionalDominatedConvergence() {
  assert(
    ∀(Ω,Σ,Pr): ProbabilitySpace,
    ∀X: IntegrableRandomVariable,
    ∀{Xₙ}_{n∈ℕ}: Sequence[RandomVariable],
    ∀Y: IntegrableRandomVariable,
    ∀𝒢⊆Σ: SubSigmaAlgebra
    where (
      {Xₙ}_{n∈ℕ} → X [a.s.] ∧
      ∀n∈ℕ: |Xₙ| ≤ Y [a.s.] ∧
      ∀n∈ℕ: E[Xₙ|𝒢] exists ∧
      E[X|𝒢] exists
    ) ⇒
    lim_{n→∞} E[Xₙ|𝒢] = E[X|𝒢] [a.s.]
  )
} ↔

proof ConditionalDominatedConvergence() {
  setVar(E[Y|𝒢]: ConditionalExpectation) →
  
  lemma UpperBound() {
    assert(|Xₙ| ≤ Y [a.s.]) →
    apply(ConditionalReverseFatou()) →
    assert(limsup_{n→∞} E[Xₙ|𝒢] ≤ E[limsup_{n→∞} Xₙ|𝒢] = E[X|𝒢] [a.s.])
  } →

  lemma LowerBound() {
    apply(ConditionalFatou()) →
    assert(E[X|𝒢] = E[liminf_{n→∞} Xₙ|𝒢] ≤ liminf_{n→∞} E[Xₙ|𝒢] [a.s.])
  } →

  apply(UpperBound(), LowerBound()) →
  assert(limsup_{n→∞} E[Xₙ|𝒢] ≤ E[X|𝒢] ≤ liminf_{n→∞} E[Xₙ|𝒢] ≤ limsup_{n→∞} E[Xₙ|𝒢] [a.s.]) →
  
  assert(liminf_{n→∞} E[Xₙ|𝒢] = limsup_{n→∞} E[Xₙ|𝒢] = E[X|𝒢] [a.s.]) →
  
  lemma LimExists() {
    apply(LimsupLiminfEquality()) →
    assert(∃ lim_{n→∞} E[Xₙ|𝒢] [a.s.])
  } →

  apply(LimExists()) →
  assert(E[X|𝒢] = lim_{n→∞} E[Xₙ|𝒢] [a.s.])
}