theorem Complex_Differentiable_Is_Continuous() {
  assert(
    ∀f: D → ℂ, D ⊆ ℂ ∧ D_is_open ∧ ∀a ∈ D,
    complex_differentiable(f, a) → continuous(f, a)
  )
} ↔

proof Complex_Differentiable_Is_Continuous() {
  setVar(f: D → ℂ) →
  setVar(a: D) →
  setVar(Nr(r): {z ∈ ℂ : |z| < r}) →
  
  lemma Epsilon_Function_Condition() {
    assert(
      ∃r > 0, ∃ε: Nr(0)\{0} → ℂ,
      ∀h ∈ Nr(0)\{0},
      f(a + h) = f(a) + h(f'(a) + ε(h)) ∧
      lim[h→0](ε(h)) = 0
    )
  } →
  
  apply(Epsilon_Function_Condition()) →
  
  let(z = a + h) →
  assert(
    ∀z ∈ Nr(a),
    f(z) = f(a) + (z-a)f'(a) + (z-a)ε(z-a)
  ) →
  
  assert(
    lim[z→a]f(z) = lim[z→a](f(a) + (z-a)f'(a) + (z-a)ε(z-a))
  ) →
  
  apply(Complex_Limit_Combination_Theorem()) →
  assert(
    lim[z→a]f(z) = f(a) + 0 + 0
  ) →
  
  conclude(
    lim[z→a]f(z) = f(a) ↔ continuous(f, a)
  )
}