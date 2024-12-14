theorem Binomial_Coefficient_Maximum() {
  assert(
    ∀n,k ∈ ℤ≥0 ⇒
    let k_max = argmax_k(binomial(n,k)) ⇒
    k_max = floor(n/2) ∧ k_max = ceiling(n/2)
  )
} ↔

proof Binomial_Coefficient_Maximum() {
  lemma Increasing_Condition() {
    assert(
      ∀k ∈ ℤ>0: binomial(n,k) > binomial(n,k-1) ↔ k ≤ n/2
    )
  } →
  
  case Even_n() {
    setVar(n = 2r, r ∈ ℤ) →
    assert(r = floor(n/2) = ceiling(n/2)) →
    assert(∀k < r: binomial(n,r) > binomial(n,k)) →
    
    lemma Symmetry_Rule() {
      assert(∀k ∈ ℤ≥0: binomial(n,k) = binomial(n,n-k))
    } →
    
    apply(Symmetry_Rule()) →
    assert(∀k < r: binomial(n,r) > binomial(n,n-k)) →
    assert(∀k > r: binomial(n,r) > binomial(n,k)) →
    assert(binomial(n,r) = binomial(n,n-r) = binomial(n,n/2)) →
    assert(∀k ≠ r: binomial(n,k) < binomial(n,n/2)) →
    conclude(k_max = floor(n/2) = ceiling(n/2))
  } ∧
  
  case Odd_n() {
    setVar(n = 2r + 1, r ∈ ℤ) →
    assert(r = floor(n/2)) →
    assert(∀k < r: binomial(n,r) > binomial(n,k)) →
    assert(binomial(n,r) = binomial(n,n-r) = binomial(n,r+1)) →
    
    apply(Symmetry_Rule()) →
    assert(∀k < r: binomial(n,r) > binomial(n,n-k)) →
    assert(∀k > r+1: binomial(n,r) > binomial(n,k)) →
    assert(r = floor(n/2) ∧ r+1 = ceiling(n/2)) →
    conclude(k_max = floor(n/2) = ceiling(n/2))
  }
}