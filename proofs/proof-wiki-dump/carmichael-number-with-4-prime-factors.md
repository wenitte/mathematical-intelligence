theorem Smallest_Carmichael_Four_Primes() {
  assert(
    41041 = min({n ∈ ℕ : n is Carmichael ∧ |PrimeFactors(n)| = 4})
  )
} ↔

proof Smallest_Carmichael_Four_Primes() {
  lemma List_Initial_Carmichael() {
    assert(
      Carmichael_Sequence_Start = [
        561, 1105, 1729, 2465, 2821, 6601, 8911, 10585, 15841, 29341, 41041
      ]
    )
  } →
  
  lemma Prime_Factorizations() {
    assert(
      561 = 3 × 11 × 17 ∧
      1105 = 5 × 13 × 17 ∧
      1729 = 7 × 13 × 19 ∧
      2465 = 5 × 17 × 29 ∧
      2821 = 7 × 13 × 31 ∧
      6601 = 7 × 23 × 41 ∧
      8911 = 7 × 19 × 67 ∧
      10585 = 5 × 29 × 73 ∧
      15841 = 7 × 31 × 73 ∧
      29341 = 13 × 37 × 61 ∧
      41041 = 7 × 11 × 13 × 41
    )
  } →
  
  apply(List_Initial_Carmichael()) →
  apply(Prime_Factorizations()) →
  
  assert(
    ∀n ∈ Carmichael_Sequence_Start\{41041} →
    |PrimeFactors(n)| = 3
  ) →
  
  assert(
    |PrimeFactors(41041)| = 4
  ) →
  
  assert(
    41041 = min({n ∈ ℕ : n is Carmichael ∧ |PrimeFactors(n)| = 4})
  )
}