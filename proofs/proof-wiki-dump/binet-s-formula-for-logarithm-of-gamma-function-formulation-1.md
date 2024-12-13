theorem Binet_LogGamma_Formula() {
  assert(
    ∀z ∈ ℂ ∧ Re(z) > 0 →
    Ln(Γ(z)) = (z - 1/2)Ln(z) - z + (1/2)ln(2π) + ∫₀^∞((1/2 - 1/t + 1/(e^t - 1))(e^(-tz)/t))dt
  )
}

proof Binet_LogGamma_Formula() {
  let(z: ℂ, Re(z) > 0) →
  
  lemma Derivative_LogGamma() {
    assert(
      d/dz(Ln(Γ(z+1))) = ∫₀^∞((e^(-t)/t) - (e^(-t(z+1))/(1-e^(-t))))dt
    )
  } →

  apply(Derivative_LogGamma()) →
  
  step1 := ∫₀^∞(e^(-t)/t)dt - ∫₀^∞(e^(-tz)e^(-t)/(1-e^(-t)))dt →
  step2 := ∫₀^∞(e^(-t)/t)dt - ∫₀^∞(e^(-tz)/(e^t-1))dt →
  
  lemma Zero_Addition() {
    assert(
      step2 = step2 + (1/2∫₀^∞e^(-tz)dt - 1/2∫₀^∞e^(-tz)dt) + 
      (∫₀^∞(e^(-tz)/t)dt - ∫₀^∞(e^(-tz)/t)dt)
    )
  } →

  step3 := 1/(2z) + ln(z) - ∫₀^∞((1/2 - 1/t + 1/(e^t-1))e^(-tz))dt →

  integrate(z: 1 to z) →
  
  step4 := Ln(Γ(z+1)) = 1/2ln(z) + zln(z) - z + 1 + 
    ∫₀^∞((1/2 - 1/t + 1/(e^t-1))(e^(-tz)/t))dt - I →
    
  let(I := ∫₀^∞((1/2 - 1/t + 1/(e^t-1))(e^(-t)/t))dt) →
  prove(I = 1 - 1/2ln(2π)) →
  
  conclude(
    Ln(Γ(z)) = (z - 1/2)Ln(z) - z + 1/2ln(2π) + 
    ∫₀^∞((1/2 - 1/t + 1/(e^t-1))(e^(-tz)/t))dt
  )
}

corollary Binet_LogGamma_Limit() {
  assert(
    ∀z ∈ ℂ ∧ Re(z) > 0 →
    lim(z→∞)|Ln(Γ(z)) - ((z-1/2)Ln(z) - z + 1/2ln(2π))| = 0
  )
}