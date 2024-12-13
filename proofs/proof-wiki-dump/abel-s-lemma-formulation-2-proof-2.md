theorem AbelLemma2() {
  assert(
    ∀n,m ∈ ℤ, n ≥ m ⇒
    let A_n = Σ[i=m→n](a_i) →
    Σ[k=m→n](a_k b_k) = Σ[k=m→n-1](A_k(b_k - b_(k+1))) + A_n b_n
  )
}

proof AbelLemma2() {
  setVar(n,m: ℤ, n ≥ m) →
  lemma VacuousSummation() {
    assert(A_(m-1) = Σ[i=m→m-1](a_i) = 0)
  } →
  
  assert(Σ[k=m→n](a_k b_k)) →
  assert(= Σ[k=m→n]((A_k - A_(k-1))b_k)) →
  
  lemma DistributiveProperty() {
    assert(Σ[k=m→n](A_k b_k - A_(k-1) b_k) = 
           Σ[k=m→n](A_k b_k) - Σ[k=m→n](A_(k-1) b_k))
  } →
  apply(DistributiveProperty()) →
  
  lemma IndexShift() {
    assert(Σ[k=m→n](A_(k-1) b_k) = Σ[k=m-1→n-1](A_k b_(k+1)))
  } →
  apply(IndexShift()) →
  
  assert(= Σ[k=m→n](A_k b_k) - Σ[k=m-1→n-1](A_k b_(k+1))) →
  assert(= Σ[k=m→n-1](A_k(b_k - b_(k+1))) + A_n b_n - A_(m-1) b_m) →
  
  apply(VacuousSummation()) →
  assert(= Σ[k=m→n-1](A_k(b_k - b_(k+1))) + A_n b_n)
}