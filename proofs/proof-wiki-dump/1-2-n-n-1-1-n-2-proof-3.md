theorem Sum_Square_Series() {
  assert(
    ∀n ∈ ℕ ⇒ (1 + 2 + ... + n + (n-1) + ... + 1 = n²)
  )
} ↔

proof Sum_Square_Series() {
  // Base case
  setVar(n: 1) →
  assert(1 = 1²) →
  
  setVar(n: 2) →
  assert(1 + 2 + 1 = 4) ∧
  assert(2² = 4) →

  // Induction step
  setVar(k: ℕ) →
  assume(1 + 2 + ... + k + (k-1) + ... + 1 = k²) →
  
  lemma Inductive_Step() {
    assert(1 + 2 + ... + (k+1) + k + (k-1) + ... + 1
    = (1 + 2 + ... + k + (k-1) + ... + 1) + k + (k+1)
    = k² + k + (k+1)
    = k² + 2k + 1
    = (k+1)²)
  } →
  
  apply(Inductive_Step()) →
  
  conclude(
    ∀n ∈ ℕ ⇒ (1 + 2 + ... + n + (n-1) + ... + 1 = n²)
  )
}