theorem Beta_Gamma_Equivalence() {
  assert(
    ∀x,y ∈ ℝ⁺ ⇒ β(x,y) = (Γ(x)·Γ(y))/Γ(x+y)
  )
} ↔

proof Beta_Gamma_Equivalence() {
  setVar(x,y: ℝ⁺, m: ℝ⁺) →
  
  lemma Beta_Recursion() {
    assert(
      β(x,y) = (Γₘ(y)·mˣ)/Γₘ(x+y) · β(x,y+m+1)
    )
  } →
  
  lemma Partial_Gamma_Definition() {
    assert(
      Γₘ(y) = (mʸ·m!)/(y(y+1)(y+2)....(y+m))
    )
  } →
  
  lemma Partial_Gamma_Integral() {
    assert(
      Γₘ(x) = mˣ∫₀¹(1-t)ᵐtˣ⁻¹dt = mˣ·β(x,m+1)
    )
  } →
  
  lemma Limit_Beta_Gamma() {
    assert(
      lim[m→∞](mˣ·β(x,m+1)) = Γ(x)
    )
  } →
  
  apply(Limit_Beta_Gamma()) →
  assert(
    lim[m→∞]((m+y)ˣ·β(x,m+y+1)) = Γ(x)
  ) →
  
  apply(Beta_Recursion()) →
  assert(
    β(x,y) = lim[m→∞](Γₘ(y)·mˣ)/Γₘ(x+y) · β(x,y+m+1)
  ) →
  
  assert(
    β(x,y) = lim[m→∞](Γₘ(y)·mˣ)/Γₘ(x+y) · Γ(x)/(m+y)ˣ
  ) →
  
  lemma Limit_Ratio() {
    assert(
      lim[m→∞](mˣ/(m+y)ˣ) = 1
    )
  } →
  
  apply(Limit_Ratio()) →
  assert(
    β(x,y) = lim[m→∞](Γₘ(y)·Γ(x))/Γₘ(x+y)
  ) →
  
  assert(
    β(x,y) = (Γ(y)·Γ(x))/Γ(x+y)
  )
}