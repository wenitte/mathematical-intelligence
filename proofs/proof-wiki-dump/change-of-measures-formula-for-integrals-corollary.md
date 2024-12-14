theorem ChangeOfMeasuresFormula() {
  assert(
    ∀X,Σ,μ,ν,g,f ∈ MeasurableSpace(X,Σ) × Measure(Σ) × Measure(Σ) × Function(X,ℝ) × Function(X,ℝ̄) ⇒
    (IsσFinite(μ) ∧ IsσFinite(ν) ∧
     IsAbsContinuous(ν,μ) ∧
     IsRadonNikodymDeriv(g,ν,μ) ∧
     IsIntegrable(f,ν)) →
    (IsIntegrable(f·g,μ) ∧ ∫f dν = ∫(f·g) dμ)
  )
}

proof ChangeOfMeasuresFormula() {
  setVar(X,Σ,μ,ν,g,f) →
  
  lemma MeasurabilityOfProduct() {
    assert(IsMeasurable(f·g,Σ))
  } →
  
  lemma IntegrabilityPositivePart() {
    assert(
      ∫(f·g)⁺ dμ = ∫(f⁺·g) dμ →
      ∫(f⁺·g) dμ = ∫f⁺ dν →
      ∫f⁺ dν < ∞
    )
  } →
  
  lemma IntegrabilityNegativePart() {
    assert(
      ∫(f·g)⁻ dμ = ∫(f⁻·g) dμ →
      ∫(f⁻·g) dμ = ∫f⁻ dν →
      ∫f⁻ dν < ∞
    )
  } →
  
  apply(IntegrabilityPositivePart(), IntegrabilityNegativePart()) →
  assert(IsIntegrable(f·g,μ)) →
  
  assert(
    ∫(f·g) dμ = ∫(f·g)⁺ dμ - ∫(f·g)⁻ dμ →
    ∫(f·g)⁺ dμ - ∫(f·g)⁻ dμ = ∫f⁺ dν - ∫f⁻ dν →
    ∫f⁺ dν - ∫f⁻ dν = ∫f dν
  )
}