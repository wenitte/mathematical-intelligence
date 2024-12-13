theorem Binomial_Coefficient_Identity() {
  assert(
    ∀n,k ∈ ℤ ∧ n ≥ 4 ∧ 2 ≤ k ≤ n-2 ⇒
    (n choose k) = (n-2 choose k-2) + 2(n-2 choose k-1) + (n-2 choose k)
  )
} ↔

proof Binomial_Coefficient_Identity() {
  setVar(n: ℤ, k: ℤ) →
  assume(n ≥ 4 ∧ 2 ≤ k ≤ n-2) →
  
  lemma Pascals_Rule() {
    assert(∀a,b ∈ ℤ ⇒ (a choose b) = (a-1 choose b) + (a-1 choose b-1))
  } →

  assert((n choose k) = (n-1 choose k) + (n-1 choose k-1)) by Pascals_Rule() →
  
  assert((n-1 choose k) = (n-2 choose k-1) + (n-2 choose k)) by Pascals_Rule() →
  assert((n-1 choose k-1) = (n-2 choose k-2) + (n-2 choose k-1)) by Pascals_Rule() →
  
  substitute() →
  assert((n choose k) = ((n-2 choose k-1) + (n-2 choose k)) + 
                        ((n-2 choose k-2) + (n-2 choose k-1))) →
  
  groupTerms() →
  assert((n choose k) = (n-2 choose k-2) + 2(n-2 choose k-1) + (n-2 choose k)) →
  
  lemma ValidRange() {
    assert(k < 2 ⇒ (n-2 choose k-2) undefined) ∧
    assert(k > n-2 ⇒ (n-2 choose k) undefined) ∧
    assert(n ≤ 3 ⇒ ¬∃k(2 ≤ k ≤ n-2))
  } →
  
  apply(ValidRange()) →
  conclude()
}