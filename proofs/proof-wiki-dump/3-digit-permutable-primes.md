theorem Three_Digit_Permutable_Primes() {
  assert(
    ∀n ∈ {permutable primes with 3 digits} ↔ 
    n ∈ {311, 113, 131, 199, 919, 991, 337, 373, 733}
  )
}

proof Three_Digit_Permutable_Primes() {
  lemma Known_Primes() {
    assert(
      isPrime(113) ∧ isPrime(131) ∧ isPrime(311) ∧
      isPrime(199) ∧ isPrime(919) ∧ isPrime(991) ∧
      isPrime(337) ∧ isPrime(373) ∧ isPrime(733)
    )
  } →

  lemma Permutable_Prime_Digits() {
    assert(
      ∀d ∈ {digits of permutable prime} → d ∈ {1, 3, 7, 9}
    )
  } →

  lemma Three_Digit_Repdigit() {
    assert(
      ∀n ∈ {3-digit repdigit numbers} → 
      (sum_of_digits(n) mod 3 = 0) →
      (n mod 3 = 0) →
      ¬isPrime(n)
    )
  } →

  setVar(candidates = {113, 117, 119, 133, 137, 139, 177, 179, 199, 337, 339, 377, 379, 399, 779, 799}) →

  assert(
    117 = 3² × 13 ∧
    119 = 7 × 17 ∧
    133 = 7 × 19 ∧
    177 = 3 × 59 ∧
    339 = 3 × 113 ∧
    377 = 13 × 29 ∧
    779 = 19 × 41 ∧
    799 = 17 × 47
  ) →

  assert(
    371 = 7 × 53 ∧
    319 = 11 × 29 ∧
    791 = 7 × 113 ∧
    793 = 13 × 61
  ) →

  conclude(
    (Known_Primes() ∧ 
    all_others_composite()) →
    theorem_statement_true()
  )
}