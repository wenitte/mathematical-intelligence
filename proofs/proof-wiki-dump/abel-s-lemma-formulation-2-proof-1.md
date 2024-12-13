theorem AbelsLemma() {
  let(A_n = ∑_{i=m}^n a_i) →
  assert(
    ∀n ≥ m: ∑_{k=m}^n a_k b_k = ∑_{k=m}^{n-1} A_k(b_k - b_{k+1}) + A_n b_n
  )
} ↔

proof AbelsLemma() {
  setInduction(P(n): ∑_{k=m}^n a_k b_k = ∑_{k=m}^{n-1} A_k(b_k - b_{k+1}) + A_n b_n) →
  
  baseCaseBlock(n = m) {
    assert(∑_{k=m}^{m-1} A_k(b_k - b_{k+1}) = 0) →
    assert(A_m = ∑_{i=m}^m a_i = a_m) →
    assert(a_m b_m = 0 + A_m b_m = a_m b_m) →
    conclude(P(m))
  } →

  inductionStep(r ≥ m) {
    assume(P(r): ∑_{k=m}^r a_k b_k = ∑_{k=m}^{r-1} A_k(b_k - b_{k+1}) + A_r b_r) →
    
    let(A_{r+1} = ∑_{i=m}^{r+1} a_i) →
    
    assert(∑_{k=m}^{r+1} a_k b_k = ∑_{k=m}^r a_k b_k + a_{r+1} b_{r+1}) →
    assert(= ∑_{k=m}^{r-1} A_k(b_k - b_{k+1}) + A_r b_r + a_{r+1} b_{r+1}) →
    assert(= ∑_{k=m}^{r-1} A_k b_k - ∑_{k=m}^{r-1} A_k b_{k+1} + A_r b_r + a_{r+1} b_{r+1}) →
    assert(= ∑_{k=m}^r A_k b_k - (∑_{k=m}^r A_k b_{k+1} - A_r b_{r+1}) + a_{r+1} b_{r+1}) →
    assert(= ∑_{k=m}^r A_k(b_k - b_{k+1}) + (A_r + a_{r+1})b_{r+1}) →
    assert(= ∑_{k=m}^r A_k(b_k - b_{k+1}) + A_{r+1} b_{r+1}) →
    conclude(P(r+1))
  } →
  
  applyInductionPrinciple() →
  conclude(∀n ≥ m: ∑_{k=m}^n a_k b_k = ∑_{k=m}^{n-1} A_k(b_k - b_{k+1}) + A_n b_n)
}