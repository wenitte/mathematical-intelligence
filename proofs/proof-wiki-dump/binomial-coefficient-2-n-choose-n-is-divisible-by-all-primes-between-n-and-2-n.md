theorem Binomial_Coefficient_Prime_Divisibility() {
  assert(
    ∀n ∈ ℕ, ∀p ∈ ℙ : (n < p < 2n) ⇒ p|⌈2n choose n⌉
  )
} ↔

proof Binomial_Coefficient_Prime_Divisibility() {
  setVar(n: ℕ) →
  setVar(p: ℙ) →
  assume(n < p < 2n) →
  
  def BinomialCoefficient() {
    assert(⌈2n choose n⌉ = (2n)!/(n!)²)
  } →

  assert((2n)! = ⌈2n choose n⌉(n!)²) →

  lemma FactorialDivisibility() {
    assert(∀k ∈ ℕ, ∀m ∈ ℕ : k ≤ m ⇒ k|(m!))
  } →

  apply(FactorialDivisibility()) →
  assert(p|(2n)!) →
  assert(p|⌈2n choose n⌉(n!)²) →

  lemma PrimeCoprime() {
    assert(∀k ∈ ℙ, ∀m < k : gcd(k,m) = 1)
  } →

  apply(PrimeCoprime()) →
  assert(p∤(n!)) →
  assert(p∤(n!)²) →

  lemma EuclidLemma() {
    assert(∀a,b ∈ ℕ, ∀p ∈ ℙ : p|(ab) ⇒ (p|a ∨ p|b))
  } →

  apply(EuclidLemma()) →
  assert(p|⌈2n choose n⌉ ∨ p|(n!)²) →
  assert(p∤(n!)²) →
  conclude(p|⌈2n choose n⌉)
}