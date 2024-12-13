theorem Binomial_Expansion_Seven() {
  assert(
    ∀x ∈ ℝ ⇒ (1 + x)^7 = 1 + 7x + 21x^2 + 35x^3 + 35x^4 + 21x^5 + 7x^6 + x^7
  )
} ↔

proof Binomial_Expansion_Seven() {
  setVar(x: ℝ) →
  
  lemma Binomial_Theorem() {
    assert(
      ∀n ∈ ℕ ∀x ∈ ℝ ⇒ (1 + x)^n = ∑_{k=0}^n (n choose k)x^k
    )
  } →

  apply(Binomial_Theorem(), n=7) →
  assert((1 + x)^7 = ∑_{k=0}^7 (7 choose k)x^k) →
  
  lemma Pascal_Row_Seven() {
    assert(
      (7 choose 0) = 1 ∧
      (7 choose 1) = 7 ∧
      (7 choose 2) = 21 ∧
      (7 choose 3) = 35 ∧
      (7 choose 4) = 35 ∧
      (7 choose 5) = 21 ∧
      (7 choose 6) = 7 ∧
      (7 choose 7) = 1
    )
  } →
  
  apply(Pascal_Row_Seven()) →
  assert(
    ∑_{k=0}^7 (7 choose k)x^k = 
    1 + 7x + 21x^2 + 35x^3 + 35x^4 + 21x^5 + 7x^6 + x^7
  )
}