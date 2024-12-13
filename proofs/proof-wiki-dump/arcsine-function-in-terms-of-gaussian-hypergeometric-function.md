theorem Arcsine_Hypergeometric() {
  assert(
    ∀x ∈ ℝ: |x| ≤ 1 ⇒ 
    arcsin(x) = x⋅F(1/2, 1/2; 3/2; x²)
  )
  where(
    F: GaussianHypergeometricFunction,
    arcsin: ArcsineFunctionReal
  )
} ↔

proof Arcsine_Hypergeometric() {
  setVar(x: ℝ, |x| ≤ 1) →
  
  assert(x⋅F(1/2, 1/2; 3/2; x²)) →
  
  lemma GHF_Definition() {
    assert(
      F(a,b;c;z) = Σ(n=0 → ∞)[(a⁽ⁿ⁾⋅b⁽ⁿ⁾)/(c⁽ⁿ⁾⋅n!)]⋅z^n
    )
  } →
  
  apply(GHF_Definition()) →
  assert(x⋅Σ(n=0 → ∞)[(((1/2)⁽ⁿ⁾)²)/(3/2⁽ⁿ⁾⋅n!)]⋅x^(2n)) →
  
  lemma RisingFactorial() {
    assert(
      a⁽ⁿ⁾ = Γ(a+n)/Γ(a)
    )
  } →
  
  apply(RisingFactorial()) →
  assert(Σ(n=0 → ∞)[Γ(1/2+n)²⋅Γ(3/2)/(Γ(1/2)²⋅Γ(3/2+n))⋅x^(2n+1)/n!]) →
  
  lemma GammaDiff() {
    assert(
      Γ(z+1) = z⋅Γ(z)
    )
  } →
  
  apply(GammaDiff()) →
  assert(Σ(n=0 → ∞)[Γ(1/2+n)/(√π⋅(2n+1))⋅x^(2n+1)/n!]) →
  
  lemma GammaHalfInt() {
    assert(
      Γ(n+1/2) = ((2n)!⋅√π)/(2^(2n)⋅n!)
    )
  } →
  
  apply(GammaHalfInt()) →
  assert(Σ(n=0 → ∞)[(2n)!/(2^(2n)⋅(n!)²)⋅x^(2n+1)/(2n+1)]) →
  
  lemma ArcsineSeries() {
    assert(
      arcsin(x) = Σ(n=0 → ∞)[(2n)!/(2^(2n)⋅(n!)²)⋅x^(2n+1)/(2n+1)]
    )
  } →
  
  apply(ArcsineSeries()) →
  assert(arcsin(x))
}