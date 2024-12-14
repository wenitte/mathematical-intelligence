theorem Closed_Ball_Disjoint_Union_Sufficient() {
  assert(
    ∀p ∈ Primes ∧
    ∀(Qp, ||·||p) ∈ p_adic_numbers ∧
    ∀y ∈ Qp ∧
    ∀n,m ∈ Z: n < m ∧
    ∃i ∈ Z: (
      0 ≤ i ≤ p^(m-n) - 1 ∧
      ||y - i·p^n||p ≤ p^(-m)
    ) →
    ||y||p ≤ p^(-n)
  )
} ↔

proof Closed_Ball_Disjoint_Union_Sufficient() {
  lemma NonArchimedean() {
    assert(||·||p satisfies NonArchimedean_Norm_Axioms)
  } →
  
  step1() {
    ||y||p = ||y - i·p^n + i·p^n||p
  } →
  
  apply(NonArchimedean.UltrametricInequality) →
  step2() {
    ||y - i·p^n + i·p^n||p ≤ max{||y - i·p^n||p, ||i·p^n||p}
  } →
  
  lemma FirstTerm() {
    assert(||y - i·p^n||p ≤ p^(-m) ≤ p^(-n))
  } →
  
  lemma SecondTerm() {
    apply(NonArchimedean.Multiplicativity) →
    assert(||i·p^n||p = ||i||p·||p^n||p) →
    assert(i ∈ Z ⊆ Zp → ||i||p ≤ 1) →
    assert(||i·p^n||p ≤ 1·p^(-n) = p^(-n))
  } →
  
  step3() {
    assert(max{||y - i·p^n||p, ||i·p^n||p} ≤ p^(-n))
  } →
  
  conclude() {
    ||y||p ≤ p^(-n)
  }
}