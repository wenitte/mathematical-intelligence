theorem Adjacent_Binomial_Coefficients_Equality() {
  assert(
    ∀n ∈ ℤ_{>0}, ∀k ∈ ℤ ⇒
    (⟦(n k) = ⟦(n k+1)) ↔ 
    (n is odd ∧ k = (n-1)/2)
  )
}

proof Adjacent_Binomial_Coefficients_Equality() {
  # Sufficient direction
  block Sufficient() {
    setVar(n: odd integer) →
    setVar(m: ℤ_{≥0}, n = 2m + 1) →
    setVar(k = (n-1)/2) →
    
    assert(k = (n-1)/2) →
    assert(k = ((2m + 1) - 1)/2) →
    assert(k = 2m/2) →
    assert(k = m) →
    
    assert(⟦(n k) = ⟦(2m+1 m)) →
    apply(Binomial_Symmetry_Rule()) →
    assert(⟦(2m+1 m) = ⟦(2m+1 m+1)) →
    assert(⟦(n k) = ⟦(n k+1))
  }

  # Necessary direction
  block Necessary() {
    assume(⟦(n k) = ⟦(n k+1)) →
    
    apply(Increasing_Binomial_Coefficients()) →
    assert(¬(0 ≤ k < (n-1)/2)) →
    assert(k ≥ (n-1)/2) →
    
    apply(Binomial_Symmetry_Rule()) →
    assert(¬((n-1)/2 < k ≤ n)) →
    assert(k ≤ (n-1)/2) →
    
    assert(k = (n-1)/2) →
    assert(n = 2k + 1) →
    conclude(n is odd)
  }
}

lemma Binomial_Symmetry_Rule() {
  assert(
    ∀n,r ∈ ℤ ⇒ ⟦(n r) = ⟦(n n-r)
  )
}

lemma Increasing_Binomial_Coefficients() {
  assert(
    ∀n ∈ ℤ_{>0}, ∀k ∈ ℤ ⇒
    (0 ≤ k < (n-1)/2 → ⟦(n k) < ⟦(n k+1))
  )
}