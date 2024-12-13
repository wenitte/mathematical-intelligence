theorem NormOnContinuousFunctions() {
  let(C[a,b]: {f | f: [a,b] → ℝ, continuous})
  let(x ∈ C[a,b])
  let(‖·‖₁: C[a,b] → ℝ, ‖x‖₁ = ∫ₐᵇ |x(t)| dt)
  assert(
    ‖·‖₁ is_norm_on C[a,b]
  )
} ↔

proof NormOnContinuousFunctions() {
  // Positive definiteness
  block PositiveDefiniteness() {
    setVar(x ∈ C[a,b]) →
    assert(∀t ∈ [a,b]: |x(t)| ≥ 0) →
    assert(‖x‖₁ = ∫ₐᵇ |x(t)| dt ≥ 0) →
    
    // Forward implication
    lemma ZeroImpliesZeroNorm() {
      assert(x = 0 → ‖x‖₁ = 0)
    } →
    
    // Reverse implication
    lemma ZeroNormImpliesZero() {
      assume(‖x‖₁ = 0) →
      byContradiction(() => {
        assume(∃t₀ ∈ (a,b): x(t₀) ≠ 0) →
        assert(x continuous_at t₀) →
        assert(∃δ > 0: [t₀-δ,t₀+δ] ⊂ [a,b]) →
        let(ε = |x(t₀)|/2) →
        assert(∀t ∈ (t₀-δ,t₀+δ): |x(t)| > |x(t₀)|/2) →
        assert(0 = ‖x‖₁ ≥ ∫ₜ₀₋δᵗ⁰⁺δ |x(t)| dt ≥ δ|x(t₀)| > 0) →
        assert(contradiction)
      })
    }
  } →

  // Positive homogeneity
  block PositiveHomogeneity() {
    setVar(x ∈ C[a,b], α ∈ ℝ) →
    assert(‖αx‖₁ = ∫ₐᵇ |αx(t)| dt) →
    assert(= |α|∫ₐᵇ |x(t)| dt) →
    assert(= |α|‖x‖₁)
  } →

  // Triangle inequality
  block TriangleInequality() {
    setVar(x,y ∈ C[a,b]) →
    assert(‖x+y‖₁ = ∫ₐᵇ |(x+y)(t)| dt) →
    assert(= ∫ₐᵇ |x(t) + y(t)| dt) →
    assert(≤ ∫ₐᵇ (|x(t)| + |y(t)|) dt) →
    assert(= ∫ₐᵇ |x(t)| dt + ∫ₐᵇ |y(t)| dt) →
    assert(= ‖x‖₁ + ‖y‖₁)
  }
}