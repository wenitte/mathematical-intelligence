theorem ArithmeticSequenceOf16Primes() {
  assert(
    ∀n ∈ {0,1,...,15} ⇒ 
    isPrime(2236133941 + 223092870n)
  )
} ↔

proof ArithmeticSequenceOf16Primes() {
  // Show sequence doesn't extend below n=0
  assert(2236133941 - 223092870 = 2013041071) →
  assert(2013041071 = 53 × 89 × 426763) →
  
  // Verify each value in sequence is prime
  lemma VerifyN0() {
    assert(2236133941 + 0 × 223092870 = 2236133941) →
    assert(isPrime(2236133941))
  } →
  
  lemma VerifyN1() {
    assert(2236133941 + 1 × 223092870 = 2459226811) →
    assert(isPrime(2459226811))
  } →
  
  // ... [similar lemmas for n=2 through n=14] ...
  
  lemma VerifyN15() {
    assert(2236133941 + 15 × 223092870 = 5582526991) →
    assert(isPrime(5582526991))
  } →
  
  // Show sequence doesn't extend beyond n=15
  assert(2236133941 + 16 × 223092870 = 5805619861) →
  assert(5805619861 = 79 × 73488859) →
  assert(¬isPrime(5805619861))
}