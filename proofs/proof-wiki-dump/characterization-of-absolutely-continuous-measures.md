theorem AbsolutelyContinuousMeasures() {
  let(X: MeasurableSpace, Σ: σ-algebra) →
  let(μ: Measure(X,Σ), ν: FiniteMeasure(X,Σ)) →
  assert(
    ν.absolutelyContinuous(μ) ↔
    ∀ε>0 ∃δ>0 ∀A∈Σ (μ(A)<δ → ν(A)<ε)
  )
}

proof AbsolutelyContinuousMeasures() {
  // Necessary Condition (by contrapositive)
  lemma NecessaryCondition() {
    assert(¬(∀ε>0 ∃δ>0 ∀A∈Σ (μ(A)<δ → ν(A)<ε)) →
           ¬ν.absolutelyContinuous(μ)) →
    setVar(ε₀>0) →
    ∀k∈ℕ ∃Aₖ∈Σ (
      μ(Aₖ) < 2⁻ᵏ ∧
      ν(Aₖ) ≥ ε₀
    ) →
    assert(∑_{k=1}^∞ μ(Aₖ) < ∑_{k=1}^∞ 2⁻ᵏ = 1) →
    apply(BorelCantelliLemma()) →
    assert(μ(limsup_{n→∞} Aₙ) = μ(∩_{i=1}^∞ ∪_{j=i}^∞ Aⱼ) = 0) →
    setVar(Bₙ = ∪_{k=n}^∞ Aₖ) →
    setVar(B = ∩_{n=1}^∞ Bₙ) →
    assert(Bₙ↑B) →
    apply(MeasureLimitDecreasingSequence()) →
    assert(ν(B) = lim_{n→∞} ν(Bₙ) ≥ ε₀) →
    assert(μ(B)=0 ∧ ν(B)≠0) →
    conclude(¬ν.absolutelyContinuous(μ))
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    assume(∀ε>0 ∃δ>0 ∀A∈Σ (μ(A)<δ → ν(A)<ε)) →
    let(A∈Σ: μ(A)=0) →
    ∀ε>0 (
      ∃δ>0 (μ(A)<δ → ν(A)<ε)
    ) →
    assert(ν(A)=0) →
    conclude(ν.absolutelyContinuous(μ))
  }

  apply(NecessaryCondition()) →
  apply(SufficientCondition()) →
  conclude(theorem)
}