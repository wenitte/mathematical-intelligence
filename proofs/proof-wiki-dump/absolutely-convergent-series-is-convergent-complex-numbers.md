theorem AbsoluteConvergenceImpliesConvergence_Complex() {
  assert(
    ∀(zₙ: ℂ) ⇒ 
    (∑_{n=1}^∞ |zₙ| converges) →
    (∑_{n=1}^∞ zₙ converges)
  )
}

proof AbsoluteConvergenceImpliesConvergence_Complex() {
  setVar(zₙ: ℂ) →
  assert(zₙ = uₙ + ivₙ where uₙ,vₙ ∈ ℝ) →
  
  lemma ModulusInequality() {
    assert(
      |zₙ| = √(uₙ² + vₙ²) →
      |zₙ| > √(uₙ²) →
      |zₙ| > |uₙ|
    ) ∧
    assert(
      |zₙ| > |vₙ|
    )
  } →

  apply(ModulusInequality()) →
  apply(ComparisonTest()) →
  assert(
    (∑_{n=1}^∞ |zₙ| converges) →
    (∑_{n=1}^∞ |uₙ| converges ∧ ∑_{n=1}^∞ |vₙ| converges)
  ) →

  apply(AbsoluteConvergenceImpliesConvergence_Real()) →
  assert(
    (∑_{n=1}^∞ |uₙ| converges ∧ ∑_{n=1}^∞ |vₙ| converges) →
    (∑_{n=1}^∞ uₙ converges ∧ ∑_{n=1}^∞ vₙ converges)
  ) →

  apply(ComplexSeriesConvergence()) →
  assert(
    (∑_{n=1}^∞ uₙ converges ∧ ∑_{n=1}^∞ vₙ converges) →
    (∑_{n=1}^∞ zₙ converges)
  )
}