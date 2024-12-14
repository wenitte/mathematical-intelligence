theorem PolygonalNumbers() {
  assert(
    ∀k,n ∈ ℕ ⇒ P(k,n) = (n/2)((k-2)n - k + 4)
  )
} ↔

proof PolygonalNumbers() {
  setVar(k,n: ℕ) →
  
  lemma RecursiveDefinition() {
    assert(
      P(k,n) = {
        0 if n = 0;
        P(k,n-1) + (k-2)(n-1) + 1 if n > 0
      }
    )
  } →

  lemma ArithmeticSequence() {
    assert(
      ∀j ∈ [1,n] ⇒ ((k-2)(j-1) + 1) is arithmetic ∧
      first_term = 1 ∧
      difference = k-2
    )
  } →

  apply(RecursiveDefinition()) →
  apply(ArithmeticSequence()) →
  
  assert(
    P(k,n) = ∑(j=1 to n)((k-2)(j-1) + 1)
  ) →
  
  apply(ArithmeticSequenceSum) →
  assert(
    P(k,n) = (n(2 + (n-1)(k-2)))/2
  ) →
  
  expand() →
  assert(
    P(k,n) = (n/2)((k-2)n - (k-2) + 2)
  ) →
  
  simplify() →
  assert(
    P(k,n) = (n/2)((k-2)n - k + 4)
  )
}

corollary SpecialCases() {
  assert(
    P(3,n) = n(n+1)/2 ∧        // Triangular
    P(4,n) = n² ∧              // Square
    P(5,n) = n(3n-1)/2 ∧       // Pentagonal
    P(6,n) = n(2n-1) ∧         // Hexagonal
    P(7,n) = n(5n-3)/2 ∧       // Heptagonal
    P(8,n) = n(3n-2)           // Octagonal
  )
}