theorem Complex_Sine_Is_Entire() {
  assert(
    ∀z ∈ ℂ, sin: ℂ → ℂ ⇒ sin is entire
  )
} ↔

proof Complex_Sine_Is_Entire_1() {
  let PowerSeries := ∑_{n=0}^∞ (-1)^n z^{2n+1}/(2n+1)! →
  assert(sin(z) = PowerSeries) →
  lemma EntireConvergence() {
    assert(
      sin is entire ↔ PowerSeries is everywhere convergent
    )
  } →
  apply(EntireConvergence()) →
  setVar(RadiusConvergence := lim_{n→∞} |(-1)^{n+1}/(2n+3)! × (2n+1)!/(-1)^n|) →
  assert(RadiusConvergence = |−1| lim_{n→∞} (1/((2n+3)(2n+2)))) →
  assert(RadiusConvergence = 0) →
  conclude(PowerSeries is everywhere convergent ∧ sin is entire)
} ↔

proof Complex_Sine_Is_Entire_2() {
  setFunctions(
    f(z) := exp(z),
    g(z) := iz,
    h(z) := -iz
  ) →
  lemma CompEntire() {
    assert(
      f is entire ∧
      g is entire ∧
      h is entire ⇒
      (f ∘ g) is entire ∧ (f ∘ h) is entire
    )
  } →
  apply(CompEntire()) →
  setVar(Expression := (1/2i)(f ∘ g - f ∘ h)) →
  assert(Expression is entire) →
  assert(
    ∀z ∈ ℂ, Expression(z) = (1/2i)(exp(iz) - exp(-iz)) = sin(z)
  ) →
  conclude(sin is entire)
}