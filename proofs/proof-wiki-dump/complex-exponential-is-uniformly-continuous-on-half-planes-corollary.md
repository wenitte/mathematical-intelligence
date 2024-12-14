theorem ComplexExpUniformConvergence() {
  assert(
    ∀X[Set] ∧ 
    ∀{gₙ: X → ℂ} ∧
    ∀g[X → ℂ] ∧
    (gₙ →_{unif} g) ∧
    ∃a ∈ ℝ[∀x ∈ X ⇒ Re(g(x)) ≤ a] ⇒
    (exp∘gₙ →_{unif} exp∘g)
  )
}

proof ComplexExpUniformConvergence() {
  setVar(X: Set) →
  setVar(gₙ: X → ℂ) →
  setVar(g: X → ℂ) →
  setVar(a: ℝ) →

  assert(∃N ∈ ℝ⁺[
    ∀n > N ∧ ∀x ∈ X ⇒ |gₙ(x) - g(x)| ≤ 1
  ]) →

  assert(∀x ∈ X ⇒ Re(gₙ(x)) ≤ a + 1) →

  lemma ComplexExpUniformContinuous() {
    assert(
      exp(z) is uniformly continuous on {z ∈ ℂ: Re(z) ≤ a + 1}
    )
  } →

  lemma UniformContinuousPreservesConvergence() {
    assert(
      f uniformly continuous ∧ xₙ →_{unif} x ⇒ f(xₙ) →_{unif} f(x)
    )
  } →

  apply(ComplexExpUniformContinuous()) →
  apply(UniformContinuousPreservesConvergence()) →
  
  assert(exp∘gₙ →_{unif} exp∘g)
}