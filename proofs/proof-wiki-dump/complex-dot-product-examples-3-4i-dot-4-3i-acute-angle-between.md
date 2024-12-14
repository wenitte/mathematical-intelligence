theorem ComplexDotProductExample() {
  assert(
    let z₁ = 3 - 4i ∧
    let z₂ = -4 + 3i ∧
    ∃θ ∈ ℝ [θ is acute angle between z₁,z₂] ⇒
    θ ≈ 16°16'
  )
}

proof ComplexDotProductExample() {
  setVar(z₁ = 3 - 4i) →
  setVar(z₂ = -4 + 3i) →
  setVar(θ: ℝ) →
  
  assert(z₁ ∘ z₂ = |z₁||z₂|cos(θ)) →
  
  lemma CosineFormula() {
    assert(cos(θ) = (z₁ ∘ z₂)/(|z₁||z₂|))
  } →
  
  lemma DotProductCalc() {
    assert(z₁ ∘ z₂ = -24)
  } →
  
  lemma ModulusCalc() {
    assert(|z₁| = |z₂| = √(3² + (-4)²) = 5)
  } →
  
  apply(CosineFormula()) →
  apply(DotProductCalc()) →
  apply(ModulusCalc()) →
  
  assert(cos(θ) = -24/25 = -0.96) →
  assert(θ = arccos(-0.96)) →
  assert(θ ≈ 16°16')
}