theorem Measure_Characterization() {
  let(X: MeasurableSpace, Σ: SigmaAlgebra) →
  let(μ: Σ → ℝ̄₊) →
  assert(
    IsMeasure(μ) ↔ (
      (μ(∅) = 0) ∧
      IsFinitelyAdditive(μ) ∧
      ∀{Eₙ}(n ∈ ℕ) → (
        (Eₙ ∈ Σ ∧ Eₙ ↑ E) → 
        μ(E) = lim(n→∞) μ(Eₙ)
      )
    )
  )
}

proof Measure_Characterization() {
  // Necessary Condition
  assume(IsMeasure(μ)) →
  
  // Property (1)
  assert(μ(∅) = 0) →
  
  // Property (2)
  lemma Finite_Additivity() {
    assert(IsFinitelyAdditive(μ))
  } →
  
  // Property (3)
  lemma Monotone_Continuity() {
    let({Eₙ}: Sequence(Σ)) →
    assume(Eₙ ↑ E) →
    assert(μ(E) = lim(n→∞) μ(Eₙ))
  } →

  // Property (3')
  lemma Decreasing_Continuity() {
    let({Eₙ}: Sequence(Σ)) →
    assume(Eₙ ↓ E ∧ μ(E₁) < ∞) →
    let(∀n ∈ ℕ: Fₙ := E₁ \ Eₙ) →
    assert(Fₙ ↑ (E₁ \ E)) →
    assert(
      μ(E₁) - μ(E) = μ(E₁ \ E) = 
      lim(n→∞) μ(E₁ \ Eₙ) = 
      lim(n→∞)(μ(E₁) - μ(Eₙ)) =
      μ(E₁) - lim(n→∞) μ(Eₙ)
    ) →
    conclude(μ(E) = lim(n→∞) μ(Eₙ))
  } →

  // Sufficient Condition
  assume(
    μ(∅) = 0 ∧ 
    IsFinitelyAdditive(μ) ∧
    (∀{Eₙ}: Eₙ ↑ E → μ(E) = lim(n→∞) μ(Eₙ))
  ) →
  
  let({Eₙ}: DisjointSequence(Σ)) →
  let(∀n ∈ ℕ: Fₙ := ∪ᵢ₌₁ⁿ Eᵢ) →
  assert(
    μ(∪ᵢ₌₁^∞ Eᵢ) = lim(n→∞) μ(Fₙ) =
    lim(n→∞) Σᵢ₌₁ⁿ μ(Eᵢ) = Σᵢ₌₁^∞ μ(Eᵢ)
  ) →
  
  conclude(IsMeasure(μ))
}