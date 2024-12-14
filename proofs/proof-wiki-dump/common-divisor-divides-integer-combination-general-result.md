theorem Common_Divisor_Integer_Combination() {
  assert(
    ∀A ⊆ ℤ, ∀c ∈ ℤ, ∀n ≥ 2: 
    (A = {a₁,...,aₙ} ∧ (∀x ∈ A: c|x)) ⇒ 
    (∀x₁,...,xₙ ∈ ℤ: c|(a₁x₁ + ... + aₙxₙ))
  )
} ↔

proof Common_Divisor_Integer_Combination() {
  let P(n) := "∀x ∈ {a₁,...,aₙ}: c|x ⇒ ∀x₁,...,xₙ ∈ ℤ: c|(a₁x₁ + ... + aₙxₙ)" →

  // Base case
  assert(P(2)) by {
    apply(Common_Divisor_Two_Terms()) →
    assert(∀x ∈ {a₁,a₂}: c|x ⇒ ∀x₁,x₂ ∈ ℤ: c|(a₁x₁ + a₂x₂))
  } →

  // Inductive step
  assume(P(k) for k ≥ 2) {
    setVar(a₁,...,aₖ,aₖ₊₁: ℤ) →
    assume(c|x for all x ∈ {a₁,...,aₖ,aₖ₊₁}) →
    
    let d := a₁x₁ + ... + aₖxₖ →
    assert(c|d) by P(k) →
    assert(c|aₖ₊₁) →
    assert(∀xₖ₊₁ ∈ ℤ: c|aₖ₊₁xₖ₊₁) →
    
    apply(Linear_Combination_Divisibility()) →
    assert(c|(d + aₖ₊₁xₖ₊₁)) →
    assert(P(k+1))
  } →

  apply(Mathematical_Induction(P, 2)) →
  assert(∀n ≥ 2: P(n))
}