theorem Complex_Derivative_Product_Rule() {
  assert(
    ∀D ⊆ ℂ [D is open] ∧
    ∀f,g: D → ℂ [f,g are complex-differentiable] →
    [(f·g) is complex-differentiable] ∧
    ∀z ∈ D: (f·g)'(z) = f'(z)g(z) + f(z)g'(z)
  )
}

proof Complex_Derivative_Product_Rule_1() {
  setVar(k: D → ℂ) →
  assert(k = f·g) →
  setVar(z₀ ∈ D) →
  
  assert(
    k'(z₀) = lim[h→0]((k(z₀+h) - k(z₀))/h)
  ) →
  
  assert(
    k'(z₀) = lim[h→0]((f(z₀+h)g(z₀+h) - f(z₀)g(z₀))/h)
  ) →
  
  apply(AddAndSubtract(f(z₀+h)g(z₀))) →
  assert(
    k'(z₀) = lim[h→0]((f(z₀+h)g(z₀+h) - f(z₀+h)g(z₀) + f(z₀+h)g(z₀) - f(z₀)g(z₀))/h)
  ) →
  
  apply(FactorOut()) →
  assert(
    k'(z₀) = lim[h→0](f(z₀+h)(g(z₀+h) - g(z₀))/h + (f(z₀+h) - f(z₀))g(z₀)/h)
  ) →
  
  apply(ComplexDerivativeDefinition()) →
  assert(
    k'(z₀) = f(z₀)g'(z₀) + f'(z₀)g(z₀)
  ) →
  
  conclude(
    ∀z ∈ D: k'(z) = f(z)g'(z) + f'(z)g(z)
  )
}

proof Complex_Derivative_Product_Rule_2() {
  setVar(z ∈ D) →
  setVar(r ∈ ℝ₊) →
  setVar(Bᵣ(0) = {w ∈ ℂ : |w| < r}) →
  
  apply(EpsilonFunctionDifferentiability()) →
  assert(
    ∃r > 0: ∀h ∈ Bᵣ(0)\{0}:
    f(z+h) = f(z) + h(f'(z) + εf(h)) ∧
    g(z+h) = g(z) + h(g'(z) + εg(h))
  ) →
  
  assert(
    (f·g)(z+h) = f(z)g(z) + h(f(z)g'(z) + f(z)εg(h)) + 
    h(g(z)f'(z) + g(z)εf(h)) + h²(f'(z) + εf(h))(g'(z) + εg(h))
  ) →
  
  setVar(ε(h) = h(f'(z) + εf(h))(g'(z) + εg(h))) →
  
  apply(ProductLimitRule() ∧ SumLimitRule()) →
  assert(
    lim[h→0]ε(h) = 0
  ) →
  
  conclude(
    (f·g)'(z) = f'(z)g(z) + f(z)g'(z)
  )
}