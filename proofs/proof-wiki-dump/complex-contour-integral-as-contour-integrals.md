theorem ComplexContourIntegral() {
  assert(
    ∀f: D → ℂ, D ⊆ ℂ [connected domain] ∧
    ∀u,v: ℝ² → ℝ [f(x + iy) = u(x,y) + iv(x,y)] ∧
    ∃C [contour in D] ∧
    ∃φ: ℝ² → ℂ [φ(x,y) = x + iy] →
    ∃γ: [a,b] → ℝ² [piecewise continuously differentiable] ∧
    ∫_C f(z)dz = ∫_γ ⟨u,-v⟩·dl + i∫_γ ⟨v,u⟩·dl ∧
    φ∘γ: [a,b] → ℂ [parameterizes C]
  )
} ↔

proof ComplexContourIntegral() {
  // Case 1: Single smooth curve
  setVar(C₁: [smooth curve]) →
  setVar(γ₁: [a,b] → D [smooth parameterization]) →
  define(x,y: [a,b] → ℝ) {
    γ₁(t) = x(t) + iy(t)
  } →
  
  assert(∫_C f(z)dz = ∫_a^b (u(x(t),y(t)) + iv(x(t),y(t)))(x'(t) + iy'(t))dt) [ComplexContourIntegralDef] →
  
  lemma DistributeLaw() {
    assert(∫_a^b (u·x' - v·y' + i(v·x' + u·y'))dt)
  } →
  
  lemma LinearCombination() {
    assert(∫_a^b (u·x' - v·y')dt + i∫_a^b (v·x' + u·y')dt)
  } →
  
  lemma DotProductForm() {
    assert(∫_a^b ⟨u,-v⟩·⟨x',y'⟩dt + i∫_a^b ⟨v,u⟩·⟨x',y'⟩dt)
  } →
  
  assert(∫_γ ⟨u,-v⟩·dl + i∫_γ ⟨v,u⟩·dl) [ContourIntegralDef] →

  // Case 2: Multiple smooth curves
  setVar(C: [C₁,...,Cₙ]) →
  ∀k∈{1,...,n} (
    setVar(γₖ: [(k-1)/n, k/n] → D) ∧
    define(xₖ,yₖ: [(k-1)/n, k/n] → ℝ) {
      γₖ(t) = xₖ(t) + iyₖ(t)
    }
  ) →
  
  assert(∫_C f(z)dz = ∑ₖ₌₁ⁿ ∫_Cₖ f(z)dz) [ContourIntegralConcatenation] →
  
  assert(∑ₖ₌₁ⁿ (∫_γₖ ⟨u,-v⟩·dl + i∫_γₖ ⟨v,u⟩·dl)) [ApplyCase1] →
  
  lemma PastingLemma() {
    assert(γ: [0,1] → ℝ² [piecewise continuous])
  } →
  
  assert(φ∘γ [parameterizes C]) [ParameterizationDef]
}