theorem Basel_Problem() {
  assert(
    ∀n ∈ ℕ ⇒ ζ(2) = ∑(n=1 to ∞)(1/n²) = π²/6
  )
} ↔

proof Basel_Problem_Primary() {
  setVar(x,y: ℝ) →
  assert(ζ(2) = ∫₀¹∫₀¹(1/(1-xy))dxdy) →
  
  lemma CoordTransform() {
    setVar(u = (x+y)/2, v = (y-x)/2) →
    assert(J = |∂(x,y)/∂(u,v)| = 2) →
    assert(transform((x,y) ↦ (u-v, u+v)))
  } →
  
  apply(CoordTransform()) →
  assert(ζ(2) = 2∫∫ₛ(dudv/(1-u²+v²))) →
  
  lemma SquareSymmetry() {
    setVar(S = {(u,v): bounds(0,1/2,u), bounds(-1/2,1/2,v)}) →
    assert(symmetric(S, u-axis))
  } →
  
  apply(SquareSymmetry()) →
  assert(
    ζ(2) = 4(∫₀^(1/2)∫₀ᵘ(dvdu/(1-u²+v²)) + 
            ∫_(1/2)¹∫₀^(1-u)(dvdu/(1-u²+v²)))
  ) →
  
  lemma SubstitutionTransform() {
    setVar(s = v/√(1-u²)) →
    assert(ds = dv/(√(1-u²)))
  } →
  
  apply(SubstitutionTransform()) →
  assert(final_integral = π²/6)
}

proof Basel_Problem_Alternative() {
  lemma EulerProduct() {
    assert(sin(x) = x∏(n=1 to ∞)(1 - x²/(n²π²)))
  } →
  
  lemma PowerSeries() {
    assert(sin(x) = ∑(n=0 to ∞)((-1)ⁿx^(2n+1)/(2n+1)!))
  } →
  
  apply(EulerProduct(), PowerSeries()) →
  equate(coefficients_x³) →
  assert(-(1/π²)∑(n=1 to ∞)(1/n²) = -1/6) →
  conclude(∑(n=1 to ∞)(1/n²) = π²/6)
}