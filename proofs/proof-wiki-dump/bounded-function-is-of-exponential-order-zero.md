theorem Bounded_Function_Exponential_Order_Zero() {
  assert(
    ∀f: [0,∞) → 𝔽 where 𝔽 ∈ {ℝ,ℂ} ∧
    isContinuous(f, [0,∞), allowFiniteDiscontinuities = true) ∧
    isBounded(f) 
    ⇒ 
    isExponentialOrderZero(f)
  )
} ↔

proof Bounded_Function_Exponential_Order_Zero() {
  assume(isBounded(f)) →
  setVar(U: ℝ, upperBound(f)) →
  setVar(L: ℝ, lowerBound(f)) →
  setVar(K: ℝ, max{|U|, |L|}) →
  
  assert(
    ∀t ≥ 1 →
    |f(t)| < K
  ) →
  
  assert(
    K = K⋅e^(0⋅t)
  ) →
  
  lemma ExponentialOrderDefinition() {
    assert(
      ∃M,K > 0, ∃a ∈ ℝ:
      |f(t)| ≤ K⋅e^(at) for t ≥ M
    )
  } →
  
  apply(ExponentialOrderDefinition(), M=1, K=K, a=0) →
  
  assert(isExponentialOrderZero(f))
}