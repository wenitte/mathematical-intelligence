theorem Complex_Product_Rule() {
  assert(
    ∀D ⊆ ℂ [D is open] ∧
    ∀f,g: D → ℂ [f,g are complex-differentiable] →
    (fg is complex-differentiable ∧
     ∀z ∈ D: (fg)′(z) = f′(z)g(z) + f(z)g′(z))
  )
} ↔

proof Complex_Product_Rule() {
  setVar(D: open_subset(ℂ)) →
  setVar(f,g: D → ℂ) →
  setVar(z: D) →
  
  lemma Epsilon_Function_Condition() {
    assert(∃r ∈ ℝ>0: ∀h ∈ (Br(0) ∖ {0}):
      f(z+h) = f(z) + h(f′(z) + εf(h)) ∧
      g(z+h) = g(z) + h(g′(z) + εg(h))
    ) where [εf,εg → 0 as h → 0]
  } →

  apply(Epsilon_Function_Condition()) →
  
  assert(
    (fg)(z+h) = 
    f(z)g(z) + h(f(z)g′(z) + f(z)εg(h)) +
    h(g(z)f′(z) + g(z)εf(h)) +
    h²(f′(z) + εf(h))(g′(z) + εg(h))
  ) →

  assert(
    (fg)(z+h) = (fg)(z) + 
    h(f′(z)g(z) + f(z)g′(z) + ε(h))
  ) where [
    ε(h) = h(f′(z) + εf(h))(g′(z) + εg(h))
  ] →

  lemma Limit_Product_Rule() {
    assert(
      lim[h→0] ε(h) = 
      lim[h→0](h) * lim[h→0](f′(z) + εf(h)) * 
      lim[h→0](g′(z) + εg(h)) = 0
    )
  } →

  apply(Limit_Product_Rule()) →
  
  assert((fg)′(z) = f′(z)g(z) + f(z)g′(z))
}