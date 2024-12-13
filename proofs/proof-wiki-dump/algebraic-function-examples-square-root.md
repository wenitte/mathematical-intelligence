theorem Algebraic_Function_Square_Root() {
  assert(
    ∀z ∈ ℂ ⇒ (f: ℂ → ℂ ∧ f(z) = z^(1/2) → IsAlgebraic(f))
  )
}

proof Algebraic_Function_Square_Root() {
  setVar(z: ℂ, w: ℂ) →
  assert(w = z^(1/2)) →
  lemma Polynomial_Form() {
    assert(w = z^(1/2) ↔ w^2 = z) →
    assert(w^2 - z = 0)
  } →
  lemma Algebraic_Definition() {
    assert(∃P(w,z): polynomial ∧ P(w,z) = 0 → IsAlgebraic(f))
  } →
  apply(Polynomial_Form()) →
  apply(Algebraic_Definition()) →
  assert(IsAlgebraic(f))
}