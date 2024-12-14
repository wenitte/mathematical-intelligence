theorem Complex_Differentiable_Is_Continuous() {
  assert(
    ∀f: D → ℂ, D ⊆ ℂ ∧ D is_open ∧
    ∀a ∈ D ∧ f is_complex_differentiable_at(a) →
    f is_continuous_at(a)
  )
} ↔

proof Complex_Differentiable_Is_Continuous() {
  setVar(Nr(0): neighborhood(0, r) ⊆ ℂ) →
  setVar(r ∈ ℝ>0) →
  
  lemma Epsilon_Function_Condition() {
    assert(
      ∃r ∈ ℝ>0: ∀h ∈ Nr(0)\{0} →
      f(a + h) = f(a) + h(f'(a) + ε(h))
    ) ∧
    assert(
      ∃ε: Nr(0)\{0} → ℂ: lim[h→0]ε(h) = 0
    )
  } →

  applySubstitution(z = a + h, z ∈ Nr(a)) →
  assert(
    f(z) = f(a) + (z - a)f'(a) + (z - a)ε(z - a)
  ) →

  applyLimit(z → a) →
  assert(
    lim[z→a]f(z) = f(a) + lim[z→a](z - a)f'(a) + lim[z→a]((z - a)ε(z - a))
  ) →

  applyTheorem(Complex_Limit_Combination()) →
  assert(
    lim[z→a]f(z) = f(a)
  ) ∧
  assert(
    lim[z→a](z - a) = 0 ∧ lim[z→a]ε(z - a) = 0
  ) →

  applyDefinition(Complex_Function_Continuity()) →
  conclude(f is_continuous_at(a))
}