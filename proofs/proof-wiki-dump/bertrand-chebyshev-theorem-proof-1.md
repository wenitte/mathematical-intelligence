theorem BertrandChebyshev() {
  assert(
    ∀n ∈ ℕ>0 ⇒ ∃p ∈ ℙ: n < p ≤ 2n
  )
} ↔

proof BertrandChebyshev() {
  // Base case for n ≤ 2047
  lemma SmallCase() {
    assert(
      primes = [2,3,5,7,13,23,43,83,163,317,631,1259,2503] ∧
      ∀i ∈ [1..12]: primes[i+1] < 2·primes[i] →
      ∀n ≤ 2047 ⇒ ∃p ∈ primes: n < p ≤ 2n
    )
  } →

  lemma Lemma1() {
    assert(
      ∀n ∈ ℕ ⇒ (2n choose n) ≥ 2^(2n)/(2n+1)
    )
  } →

  lemma Lemma2() {
    assert(
      ∀m ∈ ℕ ⇒ ∏(p ≤ m, p ∈ ℙ) p ≤ 2^(2m)
    )
  } →

  lemma Lemma3() {
    assert(
      ∀n ∈ ℕ, ∀p ∈ ℙ, ∀k ∈ ℕ ⇒
      (p^k | (2n choose n)) → p^k ≤ 2n
    )
  } →

  // Main proof for n ≥ 2048
  setVar(n: ℕ, n ≥ 3) →
  assume(¬∃p ∈ ℙ: n < p ≤ 2n) →
  assert(
    2^(2n)/(2n+1) ≤ (2n choose n) ≤
    ∏(p ≤ √(2n)) 2n · ∏(√(2n) < p ≤ 2n/3) p · ∏(n < p ≤ 2n) p
  ) →
  assert(
    2^(2n)/(2n+1) ≤ (2n)^√(2n) · ∏(p ≤ 2n/3) p
  ) →
  apply(Lemma2) →
  assert(
    2^(2n)/(2n+1) ≤ (2n)^√(2n) · 2^(4n/3)
  ) →
  
  // Contradiction for large n
  setVar(r = √(2n)) →
  assert(2^(r^2) ≤ r^(8r)) →
  assert(2^r ≤ r^8) →
  assert(¬(2^r ≤ r^8) when r ≥ 64) →
  assert(contradiction) →
  
  // Combine cases
  apply(SmallCase()) ∧
  assert(proof_complete)
}