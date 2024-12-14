theorem ConcaveFunctionDifferentiable() {
  assert(
    ∀f: ℝ → ℝ,
    ∀a,b ∈ ℝ,
    (isConcave(f, (a,b)) ∧ a < b) →
    ∀x ∈ (a,b): (exists(f'_(x)) ∧ exists(f'+(x)))
  )
}

proof ConcaveFunctionDifferentiable() {
  setVar(f: ℝ → ℝ) →
  setVar(a,b: ℝ) →
  assume(isConcave(f, (a,b))) →
  
  lemma ConcavityDefinition() {
    assert(
      ∀x₁,x₂,x₃ ∈ (a,b):
      (x₁ < x₂ < x₃) →
      ((f(x₂) - f(x₁))/(x₂ - x₁) ≥ (f(x₃) - f(x₁))/(x₃ - x₁))
    )
  } →

  setVar(x ∈ (a,b)) →
  setVar(h₁,h₂: ℝ) →
  assume(0 < h₁ < h₂) →
  
  let(F(h) := (f(x + h) - f(x))/h) →
  
  apply(ConcavityDefinition(), [x₁ ↦ x, x₂ ↦ x+h₁, x₃ ↦ x+h₂]) →
  assert(F(h₁) ≥ F(h₂)) →
  
  lemma DecreasingFunctionLimit() {
    assert(
      ∃δ > 0:
      (isDecreasing(F, [0,δ]) →
      exists(lim[h→0⁺] F(h)) ∧
      exists(lim[h→0⁻] F(h)))
    )
  } →
  
  apply(DecreasingFunctionLimit()) →
  assert(f'+(x) = lim[h→0⁺] F(h)) →
  assert(f'_(x) = lim[h→0⁻] F(h)) →
  conclude(exists(f'_(x)) ∧ exists(f'+(x)))
}