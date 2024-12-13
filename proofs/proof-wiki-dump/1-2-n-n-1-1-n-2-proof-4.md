theorem Sum_To_N_And_Back() {
  assert(
    ∀n ∈ ℕ ⇒ 1 + 2 + ... + n + (n-1) + ... + 1 = n²
  )
} ↔

proof Sum_To_N_And_Back() {
  setVar(n: ℕ) →
  define(Tn := 1 + 2 + ... + n + (n-1) + ... + 1) →
  assert(T₁ = 1) →
  
  lemma Difference_Formula() {
    assert(Tn - Tn₋₁ = 
      (1 + 2 + ... + n + (n-1) + ... + 1) - 
      (1 + 2 + ... + (n-1) + (n-2) + ... + 1)) →
    apply(IntegerAssociativity) →
    assert(= ((1 + 2 + ... + n) - (1 + 2 + ... + (n-1))) + 
           ((n-1) + (n-2) + ... + 1) - ((n-2) + (n-3) + ... + 1)) →
    apply(IntegerCommutativity) →
    assert(= n + (n-1)) →
    assert(= 2n - 1)
  } →

  assert(Tn = (Tn - Tn₋₁) + (Tn₋₁ - Tn₋₂) + ... + (T₂ - T₁) + T₁) →
  apply(Difference_Formula()) →
  assert(= (2n - 1) + (2(n-1) - 1) + ... + (2×2 - 1) + 1) →
  assert(= Σₖ₌₁ⁿ (2k - 1)) →
  apply(OddNumberTheorem) →
  assert(= n²)
}