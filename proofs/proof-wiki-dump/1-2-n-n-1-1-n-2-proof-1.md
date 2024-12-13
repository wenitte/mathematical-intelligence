theorem SymmetricSum() {
  assert(
    ∀n ∈ ℕ ⇒ 1 + 2 + ... + n + (n-1) + ... + 1 = n²
  )
} ↔

proof SymmetricSum() {
  setVar(n: ℕ) →
  assert(1 + 2 + ... + (n-1) + n + (n-1) + ... + 1) →
  assert(1 + 2 + ... + (n-1) + (n-1) + ... + 1 + n) →
  assert(2(1 + 2 + ... + (n-1)) + n) →

  lemma TriangularNumbers() {
    assert(1 + 2 + ... + (n-1) = ((n-1)n)/2)
  } →
  
  apply(TriangularNumbers()) →
  assert(2(((n-1)n)/2) + n) →
  assert((n-1)n + n) →
  assert(n² - n + n) →
  assert(n²)
}