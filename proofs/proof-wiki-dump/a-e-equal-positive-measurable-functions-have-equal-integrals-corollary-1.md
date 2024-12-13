theorem IntegralEqualityAE() {
  assert(
    ∀X,Σ,μ ∈ MeasureSpace ∧
    ∀f: X → ℝ̄ ∧ isIntegrable(f,μ) ∧
    ∀g: X → ℝ̄ ∧ isMeasurable(g,Σ) ∧
    (f = g) μ-a.e. ⇒
    isIntegrable(g,μ) ∧ ∫f dμ = ∫g dμ
  )
}

proof IntegralEqualityAE() {
  setVar(X,Σ,μ: MeasureSpace) →
  setVar(f,g: X → ℝ̄) →
  
  lemma MeasurableParts() {
    assert(isMeasurable(g⁺,Σ) ∧ isMeasurable(f⁺,Σ) ∧
           isMeasurable(g⁻,Σ) ∧ isMeasurable(f⁻,Σ))
  } →
  
  lemma AEParts() {
    assert((f⁺ = g⁺) μ-a.e. ∧ (f⁻ = g⁻) μ-a.e.)
  } →
  
  apply(AEEqualPositiveMeasurableIntegrals()) →
  assert(∫f⁺ dμ = ∫g⁺ dμ) →
  assert(∫f⁻ dμ = ∫g⁻ dμ) →
  
  given(isIntegrable(f,μ)) →
  assert(∫f⁺ dμ < ∞ ∧ ∫f⁻ dμ < ∞) →
  assert(∫g⁺ dμ < ∞ ∧ ∫g⁻ dμ < ∞) →
  assert(isIntegrable(g,μ)) →
  
  assert(∫g dμ = ∫g⁺ dμ - ∫g⁻ dμ) →
  assert(∫g⁺ dμ - ∫g⁻ dμ = ∫f⁺ dμ - ∫f⁻ dμ) →
  assert(∫f⁺ dμ - ∫f⁻ dμ = ∫f dμ) →
  
  conclude(∫g dμ = ∫f dμ)
}