theorem ContinuousAdditionR2() {
  assert(
    ∀f: ℝ² → ℝ,
    where f((x₁,x₂)) = x₁ + x₂ ∧
    d₂ is Euclidean metric on ℝ² ⇒
    isContinuous(f)
  )
} ↔

proof ContinuousAdditionR2() {
  lemma AbsoluteValueInequality() {
    assert(
      ∀x₁,x₂,y₁,y₂ ∈ ℝ ⇒
      |((x₁ + x₂) - (y₁ + y₂))| = |(x₁ - y₁) + (x₂ - y₂)| ≤
      |x₁ - y₁| + |x₂ - y₂| ≤
      √2·√((x₁ - y₁)² + (x₂ - y₂)²)
    )
  } →

  setVar(ε > 0) →
  setVar(x = (x₁,x₂) ∈ ℝ²) →
  setVar(δ = ε/√2) →
  
  assert(
    ∀y = (y₁,y₂) ∈ ℝ²:
    d₂(x,y) < δ ⇒ {
      √((x₁ - y₁)² + (x₂ - y₂)²) < δ →
      √2·√((x₁ - y₁)² + (x₂ - y₂)²) < δ√2 →
      apply(AbsoluteValueInequality()) →
      |f(x) - f(y)| < ε →
      d(f(x),f(y)) < ε
    }
  ) →

  assert(
    ∀x ∈ ℝ²: ∀ε > 0: ∃δ > 0:
    ∀y ∈ ℝ²: d₂(x,y) < δ ⇒ d(f(x),f(y)) < ε
  ) →

  conclude(isContinuous(f))
}