theorem Complex_Derivative_Sum_Rule() {
  assert(
    ∀f,g: ℂ→ℂ, ∀z ∈ D ⊆ ℂ ⇒
    ((f,g differentiable at z) → ((f+g)′(z) = f′(z) + g′(z)))
  )
} ↔

proof Complex_Derivative_Sum_Rule() {
  setVar(z: D) →
  setDef(Br(0) := {w ∈ ℂ: |w| < r, r > 0}) →
  
  lemma Epsilon_Function_Differentiability() {
    assert(∃r > 0, ∀h ∈ Br(0)\{0} →
      f(z+h) = f(z) + h(f′(z) + εf(h)) ∧
      g(z+h) = g(z) + h(g′(z) + εg(h)) ∧
      (εf,εg: Br(0)\{0}→ℂ) ∧
      lim[h→0](εf(h)) = 0 ∧ lim[h→0](εg(h)) = 0
    )
  } →
  
  apply(Epsilon_Function_Differentiability()) →
  
  assert(
    (f+g)(z+h) 
    = f(z+h) + g(z+h)
    = [f(z) + h(f′(z) + εf(h))] + [g(z) + h(g′(z) + εg(h))]
    = (f+g)(z) + h((f′(z) + g′(z)) + (εf(h) + εg(h)))
  ) →
  
  lemma Sum_Rule_Limits() {
    assert(
      lim[h→0](εf(h) + εg(h)) = lim[h→0](εf(h)) + lim[h→0](εg(h)) = 0
    )
  } →
  
  apply(Sum_Rule_Limits()) →
  
  assert((f+g)′(z) = f′(z) + g′(z))
}