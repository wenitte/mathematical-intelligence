theorem BertrandChebyshev() {
  assert(
    ∀n ∈ ℕ_{>0} ⇒ ∃p ∈ ℙ : n < p ≤ 2n
  )
}

proof BertrandChebyshev() {
  // Part 1: Base cases
  lemma SmallNumbers() {
    assert(n ≤ 2047) →
    setSequence(primes: [2,3,5,7,13,23,43,83,163,317,631,1259,2503]) →
    assert(∀i ∈ [1..12]: primes[i+1] < 2·primes[i]) →
    assert(∀n ≤ 2047: ∃p ∈ primes: n < p ≤ 2n)
  }

  // Key lemmas
  lemma BinomialLowerBound() {
    assert(∀n ∈ ℕ: (2n choose n) ≥ 2^(2n)/(2n+1))
  }

  lemma PrimeBound() {
    assert(∀m ∈ ℕ: ∏(p≤m, p∈ℙ) p ≤ 2^(2m))
  }

  lemma PrimePowerDivisor() {
    assert(∀p ∈ ℙ: p^k | (2n choose n) ⇒ p^k ≤ 2n)
  }

  // Main proof by contradiction for n ≥ 2048
  setVar(n: ℕ, n ≥ 2048) →
  assume(¬∃p ∈ ℙ: n < p ≤ 2n) →
  
  apply(PrimePowerDivisor()) →
  assert(p > √(2n) ⇒ p appears at most once in (2n choose n)) →
  assert(n ≥ 3 ⇒ ¬∃p ∈ ℙ: 2n/3 < p ≤ n) →

  apply(BinomialLowerBound()) →
  assert(2^(2n)/(2n+1) ≤ (2n choose n) ≤ ∏(p≤√(2n)) 2n · ∏(√(2n)<p≤2n/3) p) →
  
  apply(PrimeBound()) →
  assert(2^(2n)/(2n+1) ≤ (2n)^(√(2n)) · 2^(4n/3)) →
  
  // Final contradiction
  setVar(r: ℝ = √(2n)) →
  assert(2^r > r^8 for r ≥ 64) →
  assert(contradiction())
}

proof SmallNumbersAlternative() {
  assert(n ≤ 426) →
  setSequence(primes: [2,3,5,7,13,23,43,83,163,317,631]) →
  assert(∀i ∈ [1..10]: primes[i+1] < 2·primes[i]) →
  assert(∀n ≤ 426: ∃p ∈ primes: n < p ≤ 2n)
}