theorem TwoToN_GreaterThanNCubed() {
  assert(
    ∀n ∈ ℤ, n ≥ 10 ⇒ 2^n > n^3
  )
} ↔

proof TwoToN_GreaterThanNCubed() {
  setDef(P(n): 2^n > n^3) →
  
  lemma BaseCase() {
    assert(2^10 = 1024 ∧ 10^3 = 1000) →
    assert(1024 > 1000) →
    assert(P(10))
  } →

  lemma InductiveStep() {
    setVar(k: ℤ, k ≥ 10) →
    assume(P(k): 2^k > k^3) →
    
    lemma BoundInequality() {
      assert(k ≥ 10 ⇒ (1 + 1/k)^3 ≤ (1 + 1/10)^3) →
      assert((1 + 1/10)^3 = 1.331) →
      assert(1.331 < 2)
    } →

    apply(BoundInequality()) →
    
    assert(2^(k+1) = 2 × 2^k) →
    assert(2^(k+1) > (1 + 1/k)^3 × 2^k) →
    assert(2^(k+1) > (1 + 1/k)^3 × k^3) →
    assert(2^(k+1) > (k + 1)^3) →
    assert(P(k) → P(k+1))
  } →

  apply(BaseCase()) →
  apply(InductiveStep()) →
  applyPMI() →
  assert(∀n ∈ ℤ, n ≥ 10 ⇒ 2^n > n^3)
}