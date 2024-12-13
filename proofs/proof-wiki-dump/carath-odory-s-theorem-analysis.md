theorem Caratheodory_Theorem() {
  assert(
    ∀I ⊆ ℝ ∧ ∀c ∈ I[isInteriorPoint(c, I)] ∧ ∀f: I → ℝ ⇒
    isDifferentiable(f, c) ↔ 
    ∃φ: I → ℝ[
      isContinuous(φ, c) ∧
      ∀x ∈ I(f(x) - f(c) = φ(x)(x - c)) ∧
      φ(c) = f'(c)
    ]
  )
}

proof Caratheodory_Theorem() {
  // Necessary Condition
  lemma Forward_Direction() {
    assume(isDifferentiable(f, c)) →
    assert(∃f'(c)) →
    defineFunction(φ(x) = {
      case x ≠ c: (f(x) - f(c))/(x - c),
      case x = c: f'(c)
    }) →
    assert(isContinuous(φ, c)) {
      assert(φ(c) = f'(c)) →
      assert(f'(c) = lim[x→c]((f(x) - f(c))/(x - c))) →
      assert(lim[x→c]φ(x) = φ(c))
    } →
    assert(∀x ∈ I(f(x) - f(c) = φ(x)(x - c))) {
      case x = c: trivial(),
      case x ≠ c: byDefinition(φ)
    }
  }

  // Sufficient Condition
  lemma Backward_Direction() {
    assume(∃φ: I → ℝ[
      isContinuous(φ, c) ∧
      ∀x ∈ I(f(x) - f(c) = φ(x)(x - c)) ∧
      φ(c) = f'(c)
    ]) →
    assert(∀x ≠ c(φ(x) = (f(x) - f(c))/(x - c))) →
    assert(φ(c) = lim[x→c]φ(x)) →
    assert(lim[x→c]((f(x) - f(c))/(x - c)) = φ(c)) →
    assert(isDifferentiable(f, c) ∧ f'(c) = φ(c))
  }

  apply(Forward_Direction()) ∧ apply(Backward_Direction())
}