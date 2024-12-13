theorem BinetGammaAsymptoticLimit() {
  assert(
    ∀z ∈ ℂ: Re(z) > 0 ⇒ 
    lim[z→∞](|ln(Γ(z)) - (z - 1/2)ln(z) + z - (1/2)ln(2π)|) = 0
  )
} ↔

proof BinetGammaAsymptoticLimit() {
  setVar(z: ℂ, Re(z) > 0) →
  
  lemma BinetFormula() {
    assert(
      ln(Γ(z)) = (z - 1/2)ln(z) - z + (1/2)ln(2π) + 
      ∫[0,∞]((1/2 - 1/t + 1/(e^t - 1))(e^(-tz))/t)dt
    )
  } →
  
  apply(BinetFormula()) →
  assert(
    ln(Γ(z)) - (z - 1/2)ln(z) + z - (1/2)ln(2π) = 
    ∫[0,∞]((1/2 - 1/t + 1/(e^t - 1))(e^(-tz))/t)dt
  ) →
  
  lemma ExponentialLimit() {
    assert(
      ∀t > 0: lim[z→∞](e^(-tz)) = 0
    )
  } →
  
  apply(ExponentialLimit()) →
  assert(
    lim[z→∞](∫[0,∞]((1/2 - 1/t + 1/(e^t - 1))(e^(-tz))/t)dt) = 0
  ) →
  
  assert(
    lim[z→∞](|ln(Γ(z)) - (z - 1/2)ln(z) + z - (1/2)ln(2π)|) = 0
  )
}