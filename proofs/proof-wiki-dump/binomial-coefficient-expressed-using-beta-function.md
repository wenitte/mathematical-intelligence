theorem BinomialCoefficientBetaFunction() {
  assert(
    ∀r,k ∈ ℕ ⇒ (
      (r⋎k) → (
        (ᶜr₍k₎) = 1/((r+1)B(k+1,r-k+1))
      )
    )
  )
} ↔

proof BinomialCoefficientBetaFunction() {
  setVar(r,k: ℕ) →
  assert(
    (ᶜr₍k₎) = r!/(k!(r-k)!)
  ) →
  lemma BinomialDefinition() {
    assert(
      ∀n,m ∈ ℕ ⇒ (ᶜn₍m₎) = n!/(m!(n-m)!)
    )
  } →
  assert(
    r!/(k!(r-k)!) = Γ(r+1)/(Γ(k+1)Γ(r-k+1))
  ) →
  lemma GammaFactorial() {
    assert(
      ∀n ∈ ℕ ⇒ Γ(n+1) = n!
    )
  } →
  assert(
    Γ(r+1)/(Γ(k+1)Γ(r-k+1)) = (Γ(r+2)/(r+1))/(Γ(k+1)Γ(r-k+1))
  ) →
  lemma GammaDifference() {
    assert(
      ∀x ∈ ℝ⁺ ⇒ Γ(x+1) = xΓ(x)
    )
  } →
  assert(
    (Γ(r+2)/(r+1))/(Γ(k+1)Γ(r-k+1)) = 1/(r+1) × Γ(r+2)/(Γ(k+1)Γ(r-k+1))
  ) →
  assert(
    1/(r+1) × Γ(r+2)/(Γ(k+1)Γ(r-k+1)) = 1/((r+1)B(k+1,r-k+1))
  ) →
  lemma BetaDefinition() {
    assert(
      ∀x,y ∈ ℝ⁺ ⇒ B(x,y) = (Γ(x)Γ(y))/Γ(x+y)
    )
  }
}