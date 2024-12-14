theorem Complex_Product_Rule() {
  assert(
    ∀D ⊆ ℂ[D is open] ∧
    ∀f,g: D → ℂ[f,g are complex-differentiable] →
    ∃(fg)': D → ℂ[
      ∀z ∈ D: ((fg)'(z) = f'(z)g(z) + f(z)g'(z))
    ]
  )
} ↔

proof Complex_Product_Rule() {
  setVar(k: D → ℂ | k = fg) →
  setVar(z₀ ∈ D) →
  
  assert(k'(z₀) = lim[h→0](k(z₀ + h) - k(z₀))/h) →
  
  assert(
    k'(z₀) = lim[h→0](f(z₀ + h)g(z₀ + h) - f(z₀)g(z₀))/h
  ) →
  
  lemma AddZeroTerm() {
    assert(
      f(z₀ + h)g(z₀) - f(z₀ + h)g(z₀) = 0
    )
  } →
  
  apply(AddZeroTerm()) →
  
  assert(
    k'(z₀) = lim[h→0](
      f(z₀ + h)g(z₀ + h) - f(z₀ + h)g(z₀) + 
      f(z₀ + h)g(z₀) - f(z₀)g(z₀)
    )/h
  ) →
  
  assert(
    k'(z₀) = lim[h→0](
      f(z₀ + h)(g(z₀ + h) - g(z₀))/h + 
      (f(z₀ + h) - f(z₀))g(z₀)/h
    )
  ) →
  
  assert(
    k'(z₀) = f(z₀)g'(z₀) + f'(z₀)g(z₀)
  ) →
  
  conclude(
    ∀z ∈ D: (fg)'(z) = f'(z)g(z) + f(z)g'(z)
  )
}