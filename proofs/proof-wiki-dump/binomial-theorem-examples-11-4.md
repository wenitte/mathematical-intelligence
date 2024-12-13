theorem BinomialExample_11_4() {
  assert(
    11^4 = 14641
  )
} ↔

proof BinomialExample_11_4() {
  assert(11^4 = (10 + 1)^4) →
  
  lemma BinomialTheorem() {
    assert(
      ∀n ∈ ℕ, ∀x,y ∈ ℝ ⇒
      (x + y)^n = ∑_{k=0}^n (n choose k)x^k y^{n-k}
    )
  } →
  
  apply(BinomialTheorem()) →
  assert((10 + 1)^4 = ∑_{k=0}^4 (4 choose k)10^k 1^{4-k}) →
  
  lemma BinomialCoefficients() {
    assert(
      (4 choose 0) = 1 ∧
      (4 choose 1) = 4 ∧
      (4 choose 2) = 6 ∧
      (4 choose 3) = 4 ∧
      (4 choose 4) = 1
    )
  } →
  
  apply(BinomialCoefficients()) →
  assert(∑_{k=0}^4 (4 choose k)10^k 1^{4-k} = 
         1 + 10×4 + 100×6 + 1000×4 + 10000×1) →
  
  assert(1 + 40 + 600 + 4000 + 10000 = 14641)
}