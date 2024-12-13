theorem Golden_Rectangle_Approximation() {
  assert(
    ∀n ∈ ℕ ⇒ (
      let rectangle = construct_fibonacci_squares(n) ∧
      let ratio = rectangle.width / rectangle.height ∧
      lim(n → ∞) ratio = φ
    )
  )
} ↔

proof Golden_Rectangle_Method1() {
  setVar(n: ℕ) →
  assert(
    square₁.side = F_{n-1} ∧
    square₂.side = F_n
  ) →
  assert(
    rectangle.width = F_n ∧
    rectangle.height = F_{n+1}
  ) →
  lemma Golden_Ratio_Limit() {
    assert(
      lim(n → ∞) (F_{n+1}/F_n) = φ
    )
  } →
  apply(Golden_Ratio_Limit()) →
  assert(
    lim(n → ∞) (rectangle.width/rectangle.height) = φ
  )
} ↔

proof Golden_Rectangle_Method2() {
  setVar(n: ℕ) →
  lemma Fibonacci_Square_Sum() {
    assert(
      ∀n ≥ 1 ⇒ Σ(j=1 to n) F_j² = F_n × F_{n+1}
    )
  } →
  apply(Fibonacci_Square_Sum()) →
  assert(
    rectangle.area = F_n × F_{n+1}
  ) →
  assert(
    rectangle.width/rectangle.height = F_{n+1}/F_n
  ) →
  assert(
    lim(n → ∞) (rectangle.width/rectangle.height) = φ
  )
}