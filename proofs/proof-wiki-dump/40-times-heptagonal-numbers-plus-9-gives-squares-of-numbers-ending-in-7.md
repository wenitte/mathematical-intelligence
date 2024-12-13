theorem FortyTimesHeptagonalPlusNine() {
  assert(
    ∀n ∈ ℤ_{>1}: (
      H_n = ∑_{k=1}^n (5k - 4) ∧
      S_n = 40 × H_n + 9
    ) ⇒ 
    S_n = (10(n-1) + 7)²
  )
}

proof FortyTimesHeptagonalPlusNine() {
  setVar(n: ℤ_{>1}) →
  
  lemma HeptagonalClosedForm() {
    assert(
      H_n = (n(5n-3))/2
    )
  } →

  assert(40 × H_n + 9) →
  apply(HeptagonalClosedForm()) →
  assert(40 × ((n(5n-3))/2) + 9) →
  assert(20n(5n-3) + 9) →
  assert(100n² - 60n + 9) →
  assert((10n - 3)²) →
  assert((10(n-1) + 7)²) →
  
  lemma EndingInSeven() {
    assert(
      ∀k ∈ ℤ_{>1}: (
        10(k-1) + 7 ≡ 7 (mod 10)
      )
    )
  } →
  
  apply(EndingInSeven()) →
  assert(S_n = (10(n-1) + 7)²)
}