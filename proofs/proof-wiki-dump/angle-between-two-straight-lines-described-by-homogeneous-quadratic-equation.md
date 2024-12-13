theorem AngleBetweenLines() {
  assert(
    ∀L₁,L₂ ∈ Plane ∧ 
    ∃a,b,h ∈ ℝ ∧ 
    E(x,y) = ax² + 2hxy + by² ∧
    L₁,L₂ = roots(E) ⇒
    tan(ψ) = (2√(h² - ab))/(a + b)
  )
}

proof AngleBetweenLines() {
  setVar(L₁,L₂: Line, a,b,h: ℝ) →
  assert(E(x,y) = by² + 2hxy + ax² = b(y - μ₁x)(y - μ₂x)) →
  
  lemma RootEquations() {
    assert(
      L₁: y = μ₁x ∧
      L₂: y = μ₂x
    )
  } →
  
  lemma RootProperties() {
    assert(
      μ₁ + μ₂ = -2h/b ∧
      μ₁μ₂ = a/b
    )
  } →
  
  lemma AngleFormula() {
    assert(
      tan(ψ) = (μ₁ - μ₂)/(1 + μ₁μ₂)
    )
  } →
  
  assert((μ₁ - μ₂)² = (μ₁ + μ₂)² - 4μ₁μ₂) →
  apply(RootProperties()) →
  assert((μ₁ - μ₂)² = (-2h/b)² - 4(a/b)) →
  assert((μ₁ - μ₂)² = 4(h² - ab)/b²) →
  
  apply(AngleFormula()) →
  assert(
    tan(ψ) = √(4(h² - ab)/b²)/(1 + a/b)
  ) →
  
  assert(
    tan(ψ) = (2√(h² - ab))/(a + b)
  )
}