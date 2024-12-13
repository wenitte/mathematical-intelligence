theorem Bertrand() {
  assert(
    ∀U: ℝ₊ → ℝ [U is analytic] ∧
    ∃M > 0 [stable circular orbit exists] ∧
    ∀orbit[near circular orbit ⇒ orbit is closed] ⇒
    (U = kr² ∨ U = -k/r), where k > 0
  )
} ↔

proof Bertrand() {
  lemma EffectivePotential() {
    setVar(m: ℝ = 1) →
    assert(U_M = U + M²/(2r²))
  } →

  lemma ApsidialAngle() {
    assert(
      Φ = √2 ∫[r_min→r_max](M dr)/(r²√(E - U_M)) ∧
      r_min, r_max solve U_M(r) = E
    )
  } →

  proof MainArgument() {
    assert(¬∃unique_inverse[r(U_M) on (r_min,r_max)]) →
    
    setVar(r₀: r at min(U_M)) →
    setVar(r₁,r₂: inverse functions on (r₀,r_min), (r₀,r_max)) →
    
    assert(
      Φ = ∫[U₀→E] F(U_M)dU_M/√(E - U_M) ∧
      F = √2M d/dU_M(1/r₁ - 1/r₂) ∧
      U₀ = U_M(r₀)
    ) →
    
    apply(AbelsIntegralEquation()) →
    assert(F(U) = (1/π)∫[U₀→U_M] (Φ dE)/√(U_M - E)) →
    
    assert(
      Φ(E) = 2πq(E) ∧
      q: ℝ → ℚ continuous ⇒ q constant
    ) →
    
    assert(1/r₁ - 1/r₂ = γ√(U_M - U₀), γ = √2Φ/(πM)) →
    
    setVar(1/r: meromorphic with simple pole at 0) →
    assert(1/r = γ√(U_M - U₀) + Ω(U₀,U)) →
    
    apply(AnalyticConstraints()) →
    conclude(U ∝ r² ∨ U ∝ -1/r)
  }
}