theorem SymmetricSequenceSum() {
  assert(
    ∀n ∈ ℕ ⇒ (1 + 2 + ... + n + (n-1) + ... + 1 = n²)
  )
} ↔

proof SymmetricSequenceSum() {
  setVar(n: ℕ) →
  assert(1 + 2 + ... + (n-1) + n + (n-1) + ... + 1) →
  assert(
    (1 + 2 + ... + (n-1)) + (1 + 2 + ... + (n-1) + n)
  ) →
  
  lemma TriangularNumbers() {
    assert(
      ∀k ∈ ℕ ⇒ (1 + 2 + ... + k = (k(k+1))/2)
    )
  } →
  
  apply(TriangularNumbers()) →
  assert(
    ((n-1)n)/2 + (n(n+1))/2
  ) →
  
  assert(
    (n² - n + n² + n)/2
  ) →
  
  assert(
    (2n²)/2
  ) →
  
  assert(n²)
}