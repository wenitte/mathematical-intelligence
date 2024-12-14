theorem ComplexDifferentiableContinuous() {
  assert(
    ∀f: D → ℂ, D ⊆ ℂ, D open set,
    ∀a ∈ D,
    ComplexDifferentiable(f, a) →
    Continuous(f, a)
  )
}

proof ComplexDifferentiableContinuous() {
  setVar(z ∈ D) →
  assert(
    lim[w→z] f(w) = f(z) + lim[w→z](f(w) - f(z))
  ) →
  lemma SumRuleLimits() {
    assert(
      lim[w→z](A + B) = lim[w→z]A + lim[w→z]B
    )
  } →
  assert(
    lim[w→z] f(w) = f(z) + lim[w→z]((f(w) - f(z))/(w - z)(w - z))
  ) →
  lemma ProductRuleLimits() {
    assert(
      lim[w→z](A·B) = lim[w→z]A · lim[w→z]B
    )
  } →
  assert(
    lim[w→z] f(w) = f(z) + lim[w→z]((f(w) - f(z))/(w - z)) · lim[w→z](w - z)
  ) →
  lemma ComplexDiffDef() {
    assert(
      ComplexDifferentiable(f, z) →
      lim[w→z]((f(w) - f(z))/(w - z)) = f'(z)
    )
  } →
  assert(
    lim[w→z] f(w) = f(z) + f'(z) · 0
  ) →
  assert(
    lim[w→z] f(w) = f(z)
  ) →
  conclude(
    Continuous(f, a)
  )
}