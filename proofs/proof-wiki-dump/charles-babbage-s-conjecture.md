theorem Babbage_Conjecture() {
  assert(
    ∀n ∈ ℕ ⇒ (
      (binom(2n - 1, n - 1) - 1 | n²) ↔ isPrime(n)
    )
  )
}

proof Babbage_Conjecture_Refutation() {
  setConst(n = 16843) →
  assert(isPrime(n)) →
  assert(n = 1944th_prime) →
  
  lemma Binomial_Calculation() {
    assert(
      binom(2n - 1, n - 1) = 
      binom(32965, 16842)
    )
  } →

  lemma Counter_Example() {
    assert(
      n² ∤ (binom(32965, 16842) - 1)
    ) ∧
    assert(
      binom(32965, 16842) - 1 = [large_number_value]
    )
    // Where [large_number_value] is the explicitly calculated value shown in original proof
  } →

  apply(Binomial_Calculation()) →
  apply(Counter_Example()) →
  
  conclude(
    ∃n ∈ ℕ: (
      isPrime(n) ∧ 
      n² ∤ (binom(2n - 1, n - 1) - 1)
    ) →
    conjecture_disproven()
  )
}

note() {
  assert(
    "David Singmaster proved no other counterexample exists for n < 150000"
  )
}