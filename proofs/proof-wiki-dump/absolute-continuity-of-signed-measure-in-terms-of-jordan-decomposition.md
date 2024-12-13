theorem Absolute_Continuity_Signed_Measure() {
  let(X, Σ: MeasurableSpace)
  let(μ: Measure(X, Σ))
  let(ν: SignedMeasure(X, Σ))
  let(ν⁺, ν⁻: JordanDecomposition(ν))
  
  assert(
    AbsContinuous(ν, μ) ↔ 
    (AbsContinuous(ν⁺, μ) ∧ AbsContinuous(ν⁻, μ))
  )
} ↔

proof Absolute_Continuity_Signed_Measure() {
  lemma Variation_Equivalence() {
    assert(AbsContinuous(ν, μ) ↔ AbsContinuous(|ν|, μ))
  } →
  
  assert(|ν| = ν⁺ + ν⁻) →
  
  // Forward direction
  assume(AbsContinuous(ν, μ)) →
  assert(AbsContinuous(ν⁺ + ν⁻, μ)) →
  assert(
    ∀A ∈ Σ: (μ(A) = 0 → (ν⁺(A) + ν⁻(A) = 0))
  ) →
  assert(
    ν⁺ ≥ 0 ∧ ν⁻ ≥ 0
  ) →
  assert(
    ∀A ∈ Σ: (μ(A) = 0 → (ν⁺(A) = 0 ∧ ν⁻(A) = 0))
  ) →
  conclude(AbsContinuous(ν⁺, μ) ∧ AbsContinuous(ν⁻, μ)) →
  
  // Reverse direction
  assume(AbsContinuous(ν⁺, μ) ∧ AbsContinuous(ν⁻, μ)) →
  assert(
    ∀A ∈ Σ: (μ(A) = 0 → (ν⁺(A) = 0 ∧ ν⁻(A) = 0))
  ) →
  assert(
    ∀A ∈ Σ: (μ(A) = 0 → (ν⁺(A) + ν⁻(A) = 0))
  ) →
  assert(AbsContinuous(ν⁺ + ν⁻, μ)) →
  assert(AbsContinuous(|ν|, μ)) →
  apply(Variation_Equivalence()) →
  conclude(AbsContinuous(ν, μ))
}