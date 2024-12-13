theorem PowerSum_Not_Power_Of_Two() {
  assert(
    ∀n,m,a ∈ ℤ : (n > 1 ∧ m > 1) ⇒ (1 + a^n ≠ 2^m)
  )
} ↔

proof PowerSum_Not_Power_Of_Two() {
  setVar(n,m,a: ℤ) →
  assume(∃n,m,a: 1 + a^n = 2^m ∧ n > 1 ∧ m > 1) →
  assert(a^n = 2^m - 1) →
  assert(2^m - 1 ≡ -1 (mod 4)) →
  assert(a^n ≡ -1 (mod 4)) →
  
  lemma OddNumber() {
    assert(a ≡ 1 (mod 2))
  } →
  
  lemma Square_Modulo_4() {
    assert(∀x ∈ ℤ: x^2 ≡ 0,1 (mod 4))
  } →
  
  apply(OddNumber(), Square_Modulo_4()) →
  assert(n ≡ 1 (mod 2)) →
  
  assert(2^m = a^n + 1) →
  assert(a^n + 1 = (a + 1)∑_{k=0}^{n-1}(-1)^k a^{n-k-1}) →
  
  lemma SumIsOdd() {
    assert(∑_{k=0}^{n-1}(-1)^k a^{n-k-1} ≡ 1 (mod 2))
  } →
  
  apply(SumIsOdd()) →
  assert((a + 1)∑_{k=0}^{n-1}(-1)^k a^{n-k-1} = 2^m) →
  assert(∑_{k=0}^{n-1}(-1)^k a^{n-k-1} = 1) →
  assert(a^n + 1 = a + 1) →
  assert(n = 1) →
  
  contradiction(n > 1) →
  conclude()
}