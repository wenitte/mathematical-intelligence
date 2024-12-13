theorem BoundaryHomeomorphism() {
  assert(
    ∀n ∈ ℕ_{>0}, ∀C ⊆ ℝ^n [
      (C is compact ∧ C is convex ∧ C° ≠ ∅) →
      (∂C ≅ 𝕊^{n-1})
    ]
  )
} ↔

proof BoundaryHomeomorphism() {
  setVar(x₀ ∈ C°) →
  define(φ: ℝ^n ∖ {x₀} → 𝕊^{n-1}) {
    φ(x) = (x - x₀)/‖x - x₀‖
  } →
  assert(φ is continuous) by(NormedVectorSpaceHausdorff()) →
  
  define(φ*: ∂C → 𝕊^{n-1}) {
    φ*(x) = φ(x)
  } →
  assert(φ* is continuous) by(RestrictionContinuous()) →
  
  lemma Bijective() {
    setVar(y ∈ 𝕊^{n-1}) →
    apply(RayMeetsBoundaryOnce()) {
      assert(∃!t ∈ ℝ_{>0}: x₀ + ty ∈ ∂C)
    } →
    assert(φ(x₀ + ty) = y) by(UnitSphereDefinition()) →
    
    setVar(x ∈ ∂C: φ(x) = y) →
    calc {
      y = φ(x) →
      y = (x - x₀)/‖x - x₀‖ →
      ‖x - x₀‖y = x - x₀ →
      x = x₀ + ‖x - x₀‖y →
      ‖x - x₀‖ = t →
      x = x₀ + ty
    } →
    assert(φ* is bijective)
  } →
  
  assert(∂C is compact) by(BoundaryCompactHausdorff()) →
  assert(φ* is homeomorphism) by(ContinuousBijectionCompactHausdorff())
}