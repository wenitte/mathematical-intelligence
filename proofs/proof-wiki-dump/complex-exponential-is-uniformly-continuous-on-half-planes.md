theorem ComplexExponential_UniformContinuity() {
  assert(
    ∀a ∈ ℝ ⇒ exp(z) is_uniformly_continuous_on {z ∈ ℂ : Re(z) ≤ a}
  )
} ↔

proof ComplexExponential_UniformContinuity() {
  setVar(a: ℝ) →
  setVar(ε > 0) →
  setVar(x, y ∈ ℂ: Re(x) ≤ a ∧ Re(y) ≤ a) →
  
  assert(|exp(x) - exp(y)| = |exp(y)| · |exp(x-y) - 1|) →
  
  lemma ModulusExp() {
    assert(|exp(y)| = exp(Re(y)))
  } →
  
  apply(ModulusExp()) →
  assert(|exp(x) - exp(y)| = exp(Re(y)) · |exp(x-y) - 1|) →
  
  lemma ExpIncreasing() {
    assert(Re(y) ≤ a ⇒ exp(Re(y)) ≤ exp(a))
  } →
  
  apply(ExpIncreasing()) →
  assert(|exp(x) - exp(y)| ≤ exp(a) · |exp(x-y) - 1|) →
  
  lemma ExpContinuous() {
    assert(∃δ > 0: ∀z ∈ ℂ: |z| < δ ⇒ |exp(z) - 1| < ε)
  } →
  
  apply(ExpContinuous()) →
  assert(|x - y| < δ ⇒ |exp(x) - exp(y)| < exp(a)·ε) →
  
  conclude(exp(z) is_uniformly_continuous_on {z ∈ ℂ : Re(z) ≤ a})
}

corollary UniformConvergence_Exponential() {
  assert(
    ∀X: Set, ∀{gₙ: X → ℂ}, ∀g: X → ℂ,
    (gₙ converges_uniformly_to g ∧
     ∃a ∈ ℝ: ∀x ∈ X: Re(g(x)) ≤ a) ⇒
    exp∘gₙ converges_uniformly_to exp∘g
  )
}