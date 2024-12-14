theorem CharacteristicFunction_Measurability() {
  let(X: MeasurableSpace, Σ: σ-algebra on X) →
  let(E: Subset(X)) →
  assert(
    E ∈ Σ ↔ χ_E: X → {0,1} is Σ-measurable
  )
}

proof CharacteristicFunction_Measurability() {
  // Forward direction (1) → (2)
  lemma Forward() {
    assume(E ∈ Σ) →
    assert(∀x ∉ {0,1} → χ_E^{-1}(x) = ∅) →
    assert(∀α ∈ ℝ → {x ∈ X: χ_E(x) ≥ α} = 
      match α with {
        case α > 1: ∅,
        case 0 < α ≤ 1: E,
        case α ≤ 0: X
      }
    ) →
    apply(Sigma_Algebra_Properties(Σ)) →
    assert(X ∈ Σ ∧ ∅ ∈ Σ) →
    apply(Characterization_Measurable_Functions) →
    conclude(χ_E is Σ-measurable)
  }

  // Reverse direction (2) → (1)
  lemma Backward() {
    assume(χ_E is Σ-measurable) →
    assert(∀x ∈ X → (χ_E(x) > 0 ↔ x ∈ E)) →
    assert(E = χ_E^{-1}((0,∞))) →
    apply(Measurable_Function_Properties) →
    conclude(E ∈ Σ)
  }

  // Combine both directions
  apply(Forward()) →
  apply(Backward()) →
  conclude(E ∈ Σ ↔ χ_E is Σ-measurable)
}