theorem BaseRepresentation() {
  assert(
    ∀b ∈ ℤ, b > 1 ∧
    ∀n ∈ ℤ_{>0} ⇒ 
    ∃!{r_j}_{0≤j≤t} [
      n = ∑_{k=0}^t r_k b^k ∧
      ∀k ∈ [0,t]: r_k ∈ ℕ_b ∧
      r_t ≠ 0
    ]
  )
} ↔

proof BaseRepresentation() {
  setFunc(s_b(n): "number of representations of n in base b") →
  goal(∀n ∈ ℤ_{>0}: s_b(n) = 1) →
  
  lemma RepresentationDecrease() {
    assert(
      ∀n > 1: [
        n = r_k b^k + r_{k-1} b^{k-1} + ... + r_t b^t ∧
        r_k ≠ 0 ∧ r_t ≠ 0 →
        n-1 = r_k b^k + r_{k-1} b^{k-1} + ... + (r_t-1)b^t + ∑_{j=0}^{t-1}(b-1)b^j
      ]
    )
  } →
  
  apply(RepresentationDecrease()) →
  assert(∀n > 1: s_b(n) ≤ s_b(n-1)) →
  
  lemma ChainInequality() {
    assert(
      ∀m,n ∈ ℕ, m ≥ n: 
      s_b(m) ≤ s_b(m-1) ≤ ... ≤ s_b(n+1) ≤ s_b(n)
    )
  } →
  
  assert(s_b(1) = 1) →
  assert(s_b(b^n) ≥ 1) →
  assert(1 ≤ s_b(b^n) ≤ s_b(n) ≤ s_b(1) = 1) →
  conclude(∀n ∈ ℤ_{>0}: s_b(n) = 1)
}