theorem ChebyshevDistance_Addition_Continuity() {
  let(ℝ²: CartesianPlane, d_∞: ChebyshevDistance(ℝ²)) →
  let(f: ℝ² → ℝ) →
  assert(
    ∀(x₁,x₂) ∈ ℝ² ⇒ f(x₁,x₂) = x₁ + x₂
  ) →
  claim(f is continuous)
} ↔

proof ChebyshevDistance_Addition_Continuity() {
  lemma AbsoluteValueInequality() {
    assert(|(x₁ + x₂) - (y₁ + y₂)| = |x₁ - y₁ + x₂ - y₂|) →
    apply(TriangleInequality) →
    assert(|x₁ - y₁ + x₂ - y₂| ≤ |x₁ - y₁| + |x₂ - y₂|) →
    assert(|x₁ - y₁| + |x₂ - y₂| ≤ 2·max{|x₁ - y₁|, |x₂ - y₂|})
  } →

  let(ε ∈ ℝ₊) →
  let(x = (x₁,x₂) ∈ ℝ²) →
  let(δ = ε/2) →
  
  forall(y = (y₁,y₂) ∈ ℝ²) {
    assume(d_∞(x,y) < δ) →
    assert(max{|x₁ - y₁|, |x₂ - y₂|} < δ) by(ChebyshevDistanceDef) →
    assert(2·max{|x₁ - y₁|, |x₂ - y₂|} < ε) by(δ = ε/2) →
    apply(AbsoluteValueInequality) →
    assert(|f(x) - f(y)| < ε) by(FunctionDef) →
    assert(d(f(x), f(y)) < ε) by(MetricDef)
  } →

  conclude(
    ∀ε ∈ ℝ₊ ∃δ ∈ ℝ₊ ∀y ∈ ℝ² [d_∞(x,y) < δ ⇒ d(f(x),f(y)) < ε]
  ) →
  
  assert(f is continuous at x) by(ContinuityDef) →
  assert(∀x ∈ ℝ² ⇒ f is continuous at x) →
  assert(f is continuous) by(GlobalContinuityDef)
}