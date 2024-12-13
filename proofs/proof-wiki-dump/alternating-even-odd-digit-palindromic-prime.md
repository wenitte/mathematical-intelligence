theorem AlternatingEvenOddPalindromicPrime() {
  let n: ℕ = 42
  let S: string = "10987654321234567890"
  let P: ℕ = concat(repeat(S, n), "1")
  
  assert(
    isPrime(P) ∧
    isPalindrome(P) ∧
    length(P) = 841 ∧
    ∀i ∈ [1..length(P)] ⇒ 
      (isEven(digit(P,i)) ↔ isOdd(digit(P,i+1)))
  )
} ↔

proof AlternatingEvenOddPalindromicPrime() {
  let n: ℕ = 42
  let S: string = "10987654321234567890"
  let P: ℕ = concat(repeat(S, n), "1") →

  lemma PrimalityCheck() {
    assert(
      isPrime(P) = true by AlpertronCalculator(2022-03-22, 0.4s)
    )
  } →

  lemma DigitCount() {
    assert(
      length(S) = 20 →
      length(P) = length(S) × n + 1 = 841
    )
  } →

  lemma PalindromeProperty() {
    assert(
      ∀i ∈ [1..⌊length(P)/2⌋] ⇒
        digit(P,i) = digit(P,length(P)-i+1)
    )
  } →

  lemma AlternatingProperty() {
    assert(
      ∀i ∈ [1..length(P)-1] ⇒
        (isEven(digit(P,i)) ↔ isOdd(digit(P,i+1)))
    )
  } →

  apply(PrimalityCheck()) →
  apply(DigitCount()) →
  apply(PalindromeProperty()) →
  apply(AlternatingProperty()) →
  assert(conclusion)
}