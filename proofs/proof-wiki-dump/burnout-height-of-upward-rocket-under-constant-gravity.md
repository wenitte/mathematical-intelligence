theorem RocketBurnoutHeight() {
  assert(
    ∀R[rocket] ∧ ∀m₁[struct_mass] ∧ ∀m₂[fuel_mass] ∧ ∀g[gravity] ∧ ∀a[burn_rate] ∧ ∀b[exhaust_vel] ⇒
    h_b = -((g*m₂²)/(2*a²)) + (b*m₂/a) + (b*m₁/a)*ln(m₁/(m₁+m₂))
  )
} ↔

proof RocketBurnoutHeight() {
  setVar(t: ℝ≥0) →
  assert(m(t) = m₁ + m₂ - a*t) →
  assert(t_b = m₂/a) →
  
  lemma TotalForce() {
    assert(F = b*a - m*g) ∧
    assert(F_thrust = b*a) ∧
    assert(F_gravity = -m*g)
  } →

  lemma Acceleration() {
    apply(TotalForce()) →
    assert(ḧ = F/m) →
    assert(ḧ = (b*a)/(m₁ + m₂ - a*t) - g)
  } →

  lemma FirstIntegration() {
    apply(Acceleration()) →
    assert(ḣ = ∫[0→t]((b*a)/(m₁ + m₂ - a*t') - g)dt') →
    assert(ḣ = -b*ln(m₁ + m₂ - a*t) + b*ln(m₁ + m₂) - g*t)
  } →

  lemma SecondIntegration() {
    apply(FirstIntegration()) →
    assert(h(t) = ∫[0→t](-b*ln(m₁ + m₂ - a*t') + b*ln(m₁ + m₂) - g*t')dt') →
    assert(h(t) = -(g*t²/2) + b*t*ln(m₁ + m₂) + (b/a)*((m₁ + m₂ - a*t)*ln(m₁ + m₂ - a*t) + a*t - (m₁ + m₂)*ln(m₁ + m₂)))
  } →

  apply(SecondIntegration()) →
  substitute(t = m₂/a) →
  simplify() →
  assert(h_b = -(g*m₂²/(2*a²)) + (b*m₂/a) + (b*m₁/a)*ln(m₁/(m₁+m₂)))
}