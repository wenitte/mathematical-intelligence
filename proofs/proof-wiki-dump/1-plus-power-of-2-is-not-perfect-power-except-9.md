theorem OnePlusTwoPowerNotPerfectPower() {
  assert(
    ∀n,a,b ∈ ℕ⁺, b > 1 ⇒ 
    (1 + 2^n = a^b) ↔ (n=3 ∧ a=3 ∧ b=2)
  )
}

proof OnePlusTwoPowerNotPerfectPower() {
  lemma ReduceToPrimeB() {
    assert(∀b ∈ ℕ⁺, sufficient(isPrime(b)))
  } →
  
  case n=0 {
    assert(1 + 2^0 = 2) →
    assert(¬∃k>1: 2 = x^k)
  } →
  
  case n>0 {
    assert(1 + 2^n ≡ 1 mod 2) →
    assert(∃m ∈ ℕ: a = 2m + 1) →
    
    expand(1 + 2^n = (2m + 1)^b) →
    apply(BinomialTheorem) →
    assert(1 + 2^n = ∑(i=0 to b) binomial(b,i)(2m)^i) →
    assert(2^n = ∑(i=1 to b) binomial(b,i)(2m)^i) →
    factor(2m) →
    assert(2^n = 2m∑(i=1 to b) binomial(b,i)(2m)^(i-1)) →
    
    lemma PowerOfTwo() {
      assert(∀k: factor(2^n) → isPowerOfTwo(k))
    } →
    
    assert(∑(i=1 to b) binomial(b,i)(2m)^(i-1) ≥ 2) →
    assert(∑(i=1 to b) binomial(b,i)(2m)^(i-1) ≡ b mod 2) →
    assert(b = 2) →
    
    expand(2^n = (2m + 1)^2 - 1) →
    simplify() →
    assert(2^n = 4m(m + 1)) →
    
    lemma ConsecutivePowersOfTwo() {
      assert(m,m+1 ∈ {2^k: k∈ℕ}) →
      assert(m = 1)
    } →
    
    substitute(m = 1) →
    assert(a = 3 ∧ 2^n = 8) →
    conclude(n = 3)
  }
}