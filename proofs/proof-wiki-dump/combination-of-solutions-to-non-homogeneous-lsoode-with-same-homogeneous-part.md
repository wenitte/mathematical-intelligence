theorem CombinedSolution_LSOODE() {
  assert(
    ∀x,y₁,y₂,P,Q,R₁,R₂ ∈ ℝ ⇒
    (y₁ + P(x)y₁' + Q(x)y₁ = R₁(x)) ∧
    (y₂ + P(x)y₂' + Q(x)y₂ = R₂(x)) ⇒
    (y₁ + y₂ + P(x)(y₁ + y₂)' + Q(x)(y₁ + y₂) = R₁(x) + R₂(x))
  )
} ↔

proof CombinedSolution_LSOODE() {
  setVar(x,y₁,y₂: ℝ) →
  
  lemma FirstSolution() {
    assert(y₁ + P(x)y₁' + Q(x)y₁ = R₁(x))
  } →
  
  lemma SecondSolution() {
    assert(y₂ + P(x)y₂' + Q(x)y₂ = R₂(x))
  } →
  
  apply(Addition(FirstSolution(), SecondSolution())) →
  assert((y₁ + y₂) + P(x)(y₁' + y₂') + Q(x)(y₁ + y₂) = R₁(x) + R₂(x)) →
  
  lemma LinearDerivative() {
    assert((y₁ + y₂)' = y₁' + y₂')
  } →
  
  apply(LinearDerivative()) →
  assert((y₁ + y₂) + P(x)(y₁ + y₂)' + Q(x)(y₁ + y₂) = R₁(x) + R₂(x))
}