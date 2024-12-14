theorem Complex_Derivative_Sum_Rule() {
  assert(
    ∀f,g: ℂ→ℂ, ∀z∈D ⊆ ℂ ⇒ 
    ((f+g)'(z) = f'(z) + g'(z))
  )
} ↔

proof Complex_Derivative_Sum_Rule() {
  setVar(z₀: D) →
  define(k: D→ℂ, k(z₀) = f(z₀) + g(z₀)) →
  
  assert(k'(z₀) = lim[h→0]((k(z₀+h) - k(z₀))/h)) →
  
  assert(
    k'(z₀) = lim[h→0]((f(z₀+h) + g(z₀+h) - (f(z₀) + g(z₀)))/h)
  ) →
  
  assert(
    k'(z₀) = lim[h→0]((f(z₀+h) + g(z₀+h) - f(z₀) - g(z₀))/h)
  ) →
  
  assert(
    k'(z₀) = lim[h→0](((f(z₀+h) - f(z₀)) + (g(z₀+h) - g(z₀)))/h)
  ) →
  
  assert(
    k'(z₀) = lim[h→0]((f(z₀+h) - f(z₀))/h + (g(z₀+h) - g(z₀))/h)
  ) →
  
  apply(Complex_Limit_Sum_Rule()) →
  assert(
    k'(z₀) = lim[h→0]((f(z₀+h) - f(z₀))/h) + lim[h→0]((g(z₀+h) - g(z₀))/h)
  ) →
  
  apply(Complex_Derivative_Definition()) →
  assert(k'(z₀) = f'(z₀) + g'(z₀)) →
  
  generalize(∀z∈D) →
  assert((f+g)'(z) = f'(z) + g'(z))
}