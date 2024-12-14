theorem Triangular_Numbers() {
  assert(
    ∀n ∈ ℕ ⇒ (Tₙ = ∑ᵢ₌₁ⁿ i = (n(n+1))/2)
  )
} ↔

proof Triangular_Numbers() {
  setVar(n: ℕ) →
  let(sum = ∑ᵢ₌₁ⁿ i) →
  
  lemma Double_Sum() {
    assert(2·sum = 2·(1 + 2 + ... + (n-1) + n)) →
    assert(2·sum = (1 + 2 + ... + (n-1) + n) + (n + (n-1) + ... + 2 + 1)) →
    assert(2·sum = (1+n) + (2+(n-1)) + ... + ((n-1)+2) + (n+1)) →
    apply(Integer_Addition_Commutative) ∧
    apply(Integer_Addition_Associative) →
    assert(2·sum = (n+1)₁ + (n+1)₂ + ... + (n+1)ₙ) →
    assert(2·sum = n(n+1))
  } →
  
  apply(Double_Sum()) →
  assert(2·sum = n(n+1)) →
  assert(sum = (n(n+1))/2) →
  assert(Tₙ = (n(n+1))/2)
}