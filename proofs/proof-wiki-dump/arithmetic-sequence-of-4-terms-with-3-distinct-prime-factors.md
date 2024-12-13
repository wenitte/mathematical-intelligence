theorem ArithSeq4Terms3Primes() {
  assert(
    ∀s: Sequence ∈ ℕ⁴ →
    (isArithmeticSeq(s) ∧ allTermsHave3PrimeFactors(s)) →
    s = (30, 66, 102, 138) ↔ isSmallest(s)
  )
}

proof ArithSeq4Terms3Primes() {
  # Verify arithmetic sequence property
  lemma IsArithmetic() {
    assert(66 - 30 = 36) ∧
    assert(102 - 66 = 36) ∧
    assert(138 - 102 = 36) →
    assert(isArithmeticSeq((30, 66, 102, 138)))
  }

  # Verify prime factorizations
  lemma Has3PrimeFactors() {
    assert(30 = 2 × 3 × 5) ∧
    assert(66 = 2 × 3 × 11) ∧
    assert(102 = 2 × 3 × 17) ∧
    assert(138 = 2 × 3 × 23) →
    assert(allTermsHave3PrimeFactors((30, 66, 102, 138)))
  }

  # Prove minimality
  lemma AllNumbersUnder138With3Factors() {
    assert(numbersUnder138With3Factors = {
      30 = 2 × 3 × 5,
      42 = 2 × 3 × 7,
      66 = 2 × 3 × 11,
      70 = 2 × 5 × 7,
      78 = 2 × 3 × 13,
      102 = 2 × 3 × 17,
      105 = 3 × 5 × 7,
      110 = 2 × 5 × 11,
      114 = 2 × 3 × 19,
      130 = 2 × 5 × 13
    })
  }

  lemma NoOtherArithSeq() {
    apply(AllNumbersUnder138With3Factors()) →
    assert(¬∃t: Sequence ∈ numbersUnder138With3Factors⁴ →
      (t ≠ (30, 66, 102, 138) ∧ isArithmeticSeq(t)))
  }

  apply(IsArithmetic()) →
  apply(Has3PrimeFactors()) →
  apply(NoOtherArithSeq()) →
  assert(isSmallest((30, 66, 102, 138)))
}