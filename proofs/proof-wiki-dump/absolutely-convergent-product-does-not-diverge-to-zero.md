theorem AbsolutelyConvergentProduct_NotZero() {
  let K: ValuedField
  assert(
    (∃{an}n∈ℕ ∈ K) ∧ 
    (∏n=1^∞ (1 + an) is absolutely convergent) ⇒
    (∏n=1^∞ (1 + an) ≠ 0)
  )
} ↔

proof AbsolutelyConvergentProduct_NotZero() {
  setVar(n0: ℕ) →
  apply(FactorsConvergeToOne) →
  assert(∀n ≥ n0: ‖an‖ < 1) →
  
  lemma ProofByContradiction() {
    assume(∏n=1^∞ (1 + an) = 0) →
    apply(NormOfLimit) →
    assert(∏n=n0^∞ ‖1 + an‖ = 0) →
    
    apply(TriangleInequality) →
    apply(SqueezeTheorem) →
    assert(∏n=n0^∞ (1 - ‖an‖) = 0) →
    
    apply(WeierstrassProductInequality) →
    assert(∀N ≥ n0: ∏n=n0^N (1 - ‖an‖) ≥ 1 - ∑n=n0^N ‖an‖) →
    
    apply(LimitProperties) →
    assert(0 ≥ 1 - ∑n=n0^∞ ‖an‖) →
    
    apply(AbsoluteConvergence) →
    assert(∃n1 ≥ n0: ∑n=n1^∞ ‖an‖ < 1) →
    
    assert(contradiction)
  } →
  
  apply(ProofByContradiction) →
  conclude(∏n=1^∞ (1 + an) ≠ 0)
}

alternative_proof AbsolutelyConvergentProduct_NotZero() {
  setVar(n0: ℕ) →
  apply(FactorsConvergeToOne) →
  assert(∀n ≥ n0: ‖an‖ < 1) →
  assert(∑n=n0^∞ ln(1 - ‖an‖) is absolutely convergent) →
  
  lemma ProofByContradiction() {
    assume(∏n=n0^∞ (1 + an) = 0) →
    apply(NormOfLimit) →
    assert(∏n=n0^∞ ‖1 + an‖ = 0) →
    
    apply(TriangleInequality) →
    apply(SqueezeTheorem) →
    assert(∏n=n0^∞ (1 - ‖an‖) = 0) →
    
    apply(LogarithmOfInfiniteProduct) →
    assert(∑n=n0^∞ ln(1 - ‖an‖) = -∞) →
    
    assert(contradiction)
  } →
  
  apply(ProofByContradiction) →
  conclude(∏n=1^∞ (1 + an) ≠ 0)
}