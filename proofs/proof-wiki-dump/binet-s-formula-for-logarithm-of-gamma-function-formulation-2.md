theorem Binet_Logarithm_Gamma() {
  assert(
    ∀z ∈ ℂ where ℜ(z) > 0 ⇒
    Ln(Γ(z)) = (z - 1/2)Ln(z) - z + (1/2)ln(2π) + 2∫[0,∞]((arctan(t/z))/(e^(2πt) - 1))dt
  )
} ↔

proof Binet_Logarithm_Gamma() {
  setVar(z: ℂ) →
  
  lemma Second_Derivative() {
    assert(
      (d²/dz²)(Ln(Γ(z))) = ψ'(z) →
      ψ'(z) = (-1)²Γ(2)ζ(2,z) →
      Γ(2)ζ(2,z) = Σ[k=0,∞](1/(z+k)²)
    )
  } →

  lemma Abel_Plana_Application() {
    assert(
      Σ[k=0,∞](1/(z+k)²) = 
      ∫[0,∞](1/(z+x)²)dx + (1/2)(1/z²) + 
      i∫[0,∞]((1/(z+it)² - 1/(z-it)²)/(e^(2πt) - 1))dt
    )
  } →

  apply(Second_Derivative()) →
  apply(Abel_Plana_Application()) →
  
  assert(
    (d²/dz²)(Ln(Γ(z))) = 1/z + 1/(2z²) + 
    4∫[0,∞]((zt)/((z²+t²)²)(1/(e^(2πt) - 1)))dt
  ) →

  lemma Double_Integration() {
    assert(
      ∫∫((d²/dz²)(Ln(Γ(z))))dzdz = Ln(Γ(z))
    )
  } →

  apply(Double_Integration()) →

  lemma Limit_Conditions() {
    assert(
      lim[z→∞](∫[0,∞]((arctan(t/z))/(e^(2πt) - 1))dt = 0) ∧
      lim[z→∞]|Ln(Γ(z)) - (z-1/2)Ln(z) + z - (1/2)ln(2π)| = 0
    )
  } →

  apply(Limit_Conditions()) →
  
  assert(
    Ln(Γ(z)) = (z - 1/2)Ln(z) - z + (1/2)ln(2π) + 
    2∫[0,∞]((arctan(t/z))/(e^(2πt) - 1))dt
  )
}