theorem HarmonicConjugateLines() {
  let E1(x,y) := a₁x² + 2h₁xy + b₁y² = 0
  let E2(x,y) := a₂x² + 2h₂xy + b₂y² = 0
  assert(
    E1(x,y) represents lines through origin ∧
    E2(x,y) represents lines through origin ↔
    (E1 harmonic conjugates of E2) ↔ 
    a₁b₂ + a₂b₁ - 2h₁h₂ = 0
  )
}

proof HarmonicConjugateLines() {
  setAssumption(h₁² - a₁b₁ > 0) →
  setAssumption(h₂² - a₂b₂ > 0) →
  
  letDefine(λ₁,μ₁: E1 lines represented as y = λ₁x ∧ y = μ₁x) →
  letDefine(λ₂,μ₂: E2 lines represented as y = λ₂x ∧ y = μ₂x) →
  
  lemma HarmonicCondition() {
    assert(
      2(λ₁μ₁ + λ₂μ₂) = (λ₁ + μ₁)(λ₂ + μ₂)
    )
  } →
  
  letRewrite(E1 as b₁(y - λ₁x)(y - μ₁x) = 0) →
  letRewrite(E2 as b₂(y - λ₂x)(y - μ₂x) = 0) →
  
  apply(QuadraticRoots()) →
  assert(
    λ₁ + μ₁ = -2h₁/b₁ ∧
    λ₂ + μ₂ = -2h₂/b₂ ∧
    λ₁μ₁ = a₁/b₁ ∧
    λ₂μ₂ = a₂/b₂
  ) →
  
  substitute(HarmonicCondition()) →
  assert(2(a₁/b₁ + a₂/b₂) = 4h₁h₂/(b₁b₂)) →
  simplify() →
  assert(a₁b₂ + a₂b₁ - 2h₁h₂ = 0)
}