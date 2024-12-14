theorem Hexagonal_Pyramidal_Numbers() {
  assert(
    ∀n ∈ ℕ₊ ⇒ Sₙ = (n(n+1)(4n-1))/6
  )
} ↔

proof Hexagonal_Pyramidal_Numbers() {
  setVar(n: ℕ₊) →
  assert(Sₙ = ∑ₖ₌₁ⁿ Hₖ) →  // Definition of Hexagonal Pyramidal Number
  
  lemma Hexagonal_Numbers() {
    assert(Hₖ = k(2k-1))
  } →
  
  apply(Hexagonal_Numbers()) →
  assert(Sₙ = ∑ₖ₌₁ⁿ k(2k-1)) →
  assert(Sₙ = 3∑ₖ₌₁ⁿ 2k² - ∑ₖ₌₁ⁿ k) →
  
  lemma Square_Sequence_Sum() {
    assert(∑ₖ₌₁ⁿ k² = (n(n+1)(2n+1))/6)
  } →
  
  apply(Square_Sequence_Sum()) →
  assert(Sₙ = (2n(n+1)(2n+1))/6 - ∑ₖ₌₁ⁿ k) →
  
  lemma Triangular_Numbers() {
    assert(∑ₖ₌₁ⁿ k = (n(n+1))/2)
  } →
  
  apply(Triangular_Numbers()) →
  assert(Sₙ = (2n(n+1)(2n+1))/6 - (n(n+1))/2) →
  assert(Sₙ = (2n(n+1)(2n+1) - 3n(n+1))/6) →
  assert(Sₙ = (n(n+1)(4n+2-3))/6) →
  assert(Sₙ = (n(n+1)(4n-1))/6)
}