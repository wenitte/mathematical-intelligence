theorem PentagonalPyramidalNumber() {
  assert(
    ∀n ∈ ℕ⁺ ⇒ Q_n = (n² × (n + 1))/2
  )
} ↔

proof PentagonalPyramidalNumber() {
  setVar(n: ℕ⁺) →
  assert(Q_n = ∑[k=1 to n](P_k)) →
  assert(
    Q_n = ∑[k=1 to n]((k(3k - 1))/2)
  ) →
  assert(
    Q_n = (1/2)(3∑[k=1 to n](k²) - ∑[k=1 to n](k))
  ) →
  lemma SumOfSquares() {
    assert(∑[k=1 to n](k²) = (n(n+1)(2n+1))/6)
  } →
  apply(SumOfSquares()) →
  assert(
    Q_n = (1/2)(3((n(n+1)(2n+1))/6) - ∑[k=1 to n](k))
  ) →
  lemma TriangularNumbers() {
    assert(∑[k=1 to n](k) = (n(n+1))/2)
  } →
  apply(TriangularNumbers()) →
  assert(
    Q_n = (1/2)((n(n+1)(2n+1))/2 - (n(n+1))/2)
  ) →
  assert(
    Q_n = (1/2)((n(n+1)(2n))/2)
  ) →
  assert(
    Q_n = (n²(n+1))/2
  )
}