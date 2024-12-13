theorem Binomial_Coefficient_Integer() {
  assert(
    ∀n,k ∈ ℤ: (n choose k) ∈ ℤ
  )
}

proof Binomial_Coefficient_Integer() {
  setVar(n,k: ℤ) →
  
  case k_bounds(¬(0 ≤ k ≤ n)) {
    assert((n choose k) = 0) →
    assert(0 ∈ ℤ)
  } →
  
  case k_valid(0 ≤ k ≤ n) {
    assert((n choose k) = n!/(k!(n-k)!)) →
    
    rewrite((n choose k)) {
      assert((n choose k) = (n(n-1)(n-2)....(n-k+1))/k!)
    } →
    
    setVar(P = n(n-1)(n-2)....(n-k+1)) →
    assert(|P| = k consecutive integers) →
    
    lemma Factorial_Divides_Product() {
      assert(∀a,b ∈ ℤ: b! | (product of b consecutive integers))
    } →
    
    apply(Factorial_Divides_Product(), k) →
    assert(k! | P) →
    assert(∃m ∈ ℤ: P = m⋅k!) →
    assert((n choose k) = m) →
    assert((n choose k) ∈ ℤ)
  }
}