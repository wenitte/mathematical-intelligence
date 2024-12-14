theorem Complex_Riemann_Contour_Equivalence() {
  assert(
    ∀f: ℝ → ℂ, ∀a,b ∈ ℝ, a < b ⇒
    (f is Riemann_integrable on [a,b]) ⇒
    (∫[a,b] f(t)dt = ∫[C] f(t)dt)
    where C = {t ∈ ℂ: t = x, x ∈ [a,b]}
  )
} ↔

proof Complex_Riemann_Contour_Equivalence() {
  setVar(f: ℝ → ℂ) →
  setVar(a,b: ℝ) →
  assume(f is Riemann_integrable on [a,b]) →
  
  lemma Complex_Integration_Substitution() {
    assert(
      ∫[a,b] f(t)dt = ∫[a,b] f(θ(t))θ'(t)dt
      where θ(t) = t, θ'(t) = 1
    )
  } →
  
  apply(Complex_Integration_Substitution()) →
  
  lemma Complex_Contour_Definition() {
    assert(
      ∫[a,b] f(θ(t))θ'(t)dt = ∫[C] f(t)dt
      where C = {t ∈ ℂ: t = x, x ∈ [a,b]}
    )
  } →
  
  apply(Complex_Contour_Definition()) →
  
  conclude(∫[a,b] f(t)dt = ∫[C] f(t)dt)
}