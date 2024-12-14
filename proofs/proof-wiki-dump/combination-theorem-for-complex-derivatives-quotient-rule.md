theorem Complex_Derivative_Quotient_Rule() {
  assert(
    ∀D ⊆ ℂ[open] ∧ ∀f,g: D → ℂ[complex-differentiable] ∧
    let(h = f/g) →
    h[complex-differentiable](D \ {z ∈ D: g(z) = 0}) ∧
    ∀z ∈ D[g(z) ≠ 0] →
    (f/g)'(z) = (f'(z)g(z) - f(z)g'(z))/(g(z))²
  )
}

proof Complex_Derivative_Quotient_Rule() {
  setVar(z: D \ {x ∈ D: g(x) = 0}) →
  define(Br(0) := {w ∈ ℂ: |w| < r}) →
  
  lemma Epsilon_Function_Condition() {
    assert(∃r₀ ∈ ℝ₊: ∀h ∈ Br₀(0)\{0} →
      f(z+h) = f(z) + h(f'(z) + εf(h)) ∧
      g(z+h) = g(z) + h(g'(z) + εg(h)) ∧
      lim[h→0](εf(h)) = 0 ∧ lim[h→0](εg(h)) = 0
    )
  } →
  
  lemma Continuity_Condition() {
    assert(∃r₁ ∈ ℝ₊: ∀h ∈ Br₁(0) →
      |g(z+h) - g(z)| < |g(z)| →
      g(z+h) ≠ 0
    )
  } →
  
  setVar(r = min{r₀,r₁}) →
  
  assert(∀h ∈ Br(0)\{0} →
    (f/g)(z+h) = f(z)/g(z) + 
    h((f'(z)g(z) - f(z)g'(z))/(g(z))² + ε(h))
  ) →
  
  define(ε₀(h) := h·g'(z)(g'(z) + εg(h))) →
  
  lemma Limit_Calculation() {
    assert(
      lim[h→0](ε(h)) = 0
    )
  } →
  
  apply(Epsilon_Function_Condition()) →
  conclude((f/g)'(z) = (f'(z)g(z) - f(z)g'(z))/(g(z))²)
}