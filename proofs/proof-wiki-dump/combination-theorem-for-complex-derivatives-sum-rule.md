theorem ComplexDerivativeSum() {
  assert(
    ∀D ⊆ ℂ[D is_open] ∧
    ∀f,g: D → ℂ[f,g are_complex_differentiable] ⇒
    (f + g is_complex_differentiable ∧
     ∀z ∈ D: (f + g)′(z) = f′(z) + g′(z))
  )
} ↔

proof ComplexDerivativeSum_Direct() {
  setVar(z₀: D) →
  define(k: D → ℂ, k(z₀) = f(z₀) + g(z₀)) →
  
  assert(k′(z₀) = lim[h→0]((k(z₀ + h) - k(z₀))/h)) by(ComplexDerivativeDef) →
  assert(
    k′(z₀) = lim[h→0]((f(z₀ + h) + g(z₀ + h) - f(z₀) - g(z₀))/h)
  ) by(SubstituteK) →
  assert(
    k′(z₀) = lim[h→0]((f(z₀ + h) - f(z₀))/h + (g(z₀ + h) - g(z₀))/h)
  ) by(AlgebraicManipulation) →
  assert(
    k′(z₀) = lim[h→0](f(z₀ + h) - f(z₀))/h + lim[h→0](g(z₀ + h) - g(z₀))/h
  ) by(ComplexLimitSum) →
  assert(k′(z₀) = f′(z₀) + g′(z₀)) by(ComplexDerivativeDef) →
  
  conclude((f + g)′(z) = f′(z) + g′(z))
} ↔

proof ComplexDerivativeSum_Epsilon() {
  setVar(z: D) →
  ∃r > 0: ∀h ∈ (Bᵣ(0) \ {0}):
    assert(f(z + h) = f(z) + h(f′(z) + ϵf(h))) ∧
    assert(g(z + h) = g(z) + h(g′(z) + ϵg(h))) 
  by(EpsilonDiffCondition) →
  
  assert((f + g)(z + h) = f(z + h) + g(z + h)) →
  assert(
    (f + g)(z + h) = (f + g)(z) + h(f′(z) + g′(z) + (ϵf(h) + ϵg(h)))
  ) by(Substitution) →
  
  assert(lim[h→0](ϵf(h) + ϵg(h)) = 0) by(ComplexLimitSum) →
  conclude((f + g)′(z) = f′(z) + g′(z)) by(EpsilonDiffCondition)
}