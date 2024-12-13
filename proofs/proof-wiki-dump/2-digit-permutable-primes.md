theorem TwoDigitPermutablePrimes() {
  assert(
    PermutablePrimes_2Digit = {11, 13, 31, 17, 71, 37, 73, 79, 97}
  )
} ↔

proof TwoDigitPermutablePrimes() {
  lemma PrimePairs() {
    assert(isPrime(13) ∧ isPrime(31)) ∧
    assert(isPrime(17) ∧ isPrime(71)) ∧
    assert(isPrime(37) ∧ isPrime(73)) ∧
    assert(isPrime(79) ∧ isPrime(97))
  } →
  
  lemma ValidDigits() {
    assert(∀p ∈ PermutablePrimes → digits(p) ⊆ {1, 3, 7, 9})
  } →
  
  lemma RepdigitCase() {
    assert(∀n ∈ TwoDigitRepdigits → isComposite(n) ∨ n = 11) ∧
    assert(isPrime(11) → 11 ∈ PermutablePrimes)
  } →
  
  setVar(CandidateSet = {13, 17, 19, 37, 39, 79} ∪ anagrams({13, 17, 19, 37, 39, 79})) →
  
  lemma Elimination() {
    assert(39 = 3 × 13 → isComposite(39)) ∧
    assert(91 = 7 × 13 → isComposite(91)) ∧
    assert(19 ∈ CandidateSet ∧ 91 ∈ anagrams(19) ∧ isComposite(91) → 
           {19, 91} ∉ PermutablePrimes)
  } →
  
  apply(PrimePairs()) ∧
  apply(ValidDigits()) ∧
  apply(RepdigitCase()) ∧
  apply(Elimination()) →
  
  assert(PermutablePrimes_2Digit = {11, 13, 31, 17, 71, 37, 73, 79, 97})
}