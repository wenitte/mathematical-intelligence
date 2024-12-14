theorem CharacterizationAlmostEverywhereZero() {
  setSpace((X, Σ): MeasurableSpace) →
  setMeasure(μ: Measure(X, Σ)) →
  setFunction(f: X → ℝ̄, measurable: true) →
  assert(
    (f = 0 μ-a.e.) ↔ (∀A ∈ Σ: ∫(χ_A · f)dμ = 0)
  )
}

proof CharacterizationAlmostEverywhereZero() {
  // Necessary condition
  lemma NecessaryCondition() {
    assert(f = 0 μ-a.e.) →
    apply(MeasurableFunctionZeroAE()) →
    assert(∫|f|dμ = 0) →
    setVar(A: Σ) →
    define((χ_A · f)⁺: PositivePart(χ_A · f)) →
    define((χ_A · f)⁻: NegativePart(χ_A · f)) →
    assert((χ_A · f)⁺ ≤ |f| ∧ (χ_A · f)⁻ ≤ |f|) →
    apply(IntegralMonotone()) →
    assert(∫(χ_A · f)⁺dμ ≤ ∫|f|dμ = 0) →
    assert(∫(χ_A · f)⁻dμ ≤ ∫|f|dμ = 0) →
    conclude(∫(χ_A · f)dμ = 0)
  }

  // Sufficient condition
  lemma SufficientCondition() {
    assume(∀A ∈ Σ: ∫(χ_A · f)dμ = 0) →
    setVar(n: ℕ⁺) →
    assert(μ({f > 1/n}) = ∫χ_{f > 1/n}dμ) →
    apply(IntegralCharacteristicCorollary()) →
    assert(≤ ∫χ_{f > 1/n}nfdμ) →
    apply(IntegralMonotone()) →
    assert(= n∫χ_{f > 1/n}fdμ) →
    apply(IntegralPositiveHomogeneous()) →
    assert(= 0) →
    
    // Similar for negative part
    assert(μ({-f > 1/n}) = 0) →
    conclude(μ({|f| > 1/n}) = 0) →
    
    assert(μ({f ≠ 0}) = μ({|f| > 0})) →
    assert(= μ(∪_{n=1}^∞ {|f| > 1/n})) →
    apply(MeasureCountablySubadditive()) →
    assert(≤ Σ_{n=1}^∞ μ({|f| > 1/n})) →
    conclude(= 0)
  }
}