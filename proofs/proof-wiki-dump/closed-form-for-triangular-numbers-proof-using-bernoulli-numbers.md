theorem Triangular_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ⁺ ⇒ (∑_{i=1}^n i = (n(n+1))/2)
  )
} ↔

proof Triangular_Numbers_Closed_Form() {
  setVar(n: ℕ⁺) →
  lemma Sum_Of_Powers() {
    assert(
      ∀p,n ∈ ℕ⁺ ⇒ (∑_{i=1}^n i^p = (n^{p+1})/(p+1) + ∑_{k=1}^p (B_k * p^{k-1} * n^{p-k+1})/k!)
    )
  } →
  
  apply(Sum_Of_Powers()) →
  assert(p = 1) →
  assert(∑_{i=1}^n i^1 = n^2/2 + (B_1 * 1^0 * n^1)/1!) →
  
  lemma Bernoulli_First() {
    assert(B_1 = -1/2)
  } →
  
  lemma Power_Zero_Falling() {
    assert(∀x ∈ ℝ ⇒ x^0 = 1)
  } →
  
  apply(Bernoulli_First() ∧ Power_Zero_Falling()) →
  assert(∑_{i=1}^n i = n^2/2 + (-1/2 * 1 * n)/1) →
  assert(∑_{i=1}^n i = n^2/2 + (-n/2)) →
  assert(∑_{i=1}^n i = (n^2 + n)/2) →
  assert(∑_{i=1}^n i = (n(n+1))/2)
}