theorem Bertrand() {
  assert(
    ∀U: ℝ₊ → ℝ, analytic ∧
    ∃M > 0: stable_circular_orbit(M) ∧
    ∀orbit near_circular: closed(orbit) ⇒
    (U = kr² ∨ U = -k/r), k > 0, up_to_additive_constant
  )
} ↔

proof Bertrand() {
  lemma EffectivePotential() {
    setVar(m = 1) →
    assert(U_M = U + M²/(2r²))
  } →

  lemma ApsidialAngle() {
    assert(
      Φ = √2 ∫[r_min → r_max](M dr)/(r²√(E - U_M)) ∧
      E: energy ∧
      {r_min, r_max}: solutions_of(U_M(r) = E)
    )
  } →

  lemma InverseFunctions() {
    assert(
      ∃r₀: min(U_M) on (r_min, r_max) ∧
      ∃r₁,r₂: inverse_functions_on((r₀,r_min), (r₀,r_max))
    )
  } →

  apply(AbelIntegral()) →
  assert(
    F(U) = (1/π)∫[U₀ → U_M](Φ dE)/√(U_M - E) ∧
    Φ(E) = 2πq(E), q: ℝ → ℚ continuous
  ) →

  assert(
    1/r₁ - 1/r₂ = γ√(U_M - U₀), 
    γ = √2Φ/(πM)
  ) →

  lemma MeromorphicFunction() {
    assert(
      1/r = γ√(U_M - U₀) + Ω(U₀,U) ∧
      Ω: analytic near U₀ ∧
      Ω(U₀,U₀) = 1/r₀
    )
  } →

  assert(
    √(U_M - U₀) = (1/r)√(M²/2 + (U - U₀)r²)
  ) →

  conclude(
    radicand_must_be_perfect_square() →
    U ∝ r² ∨ U ∝ -1/r²
  )
}