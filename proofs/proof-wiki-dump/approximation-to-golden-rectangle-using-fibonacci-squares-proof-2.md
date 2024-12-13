theorem FibonacciGoldenRectangle() {
  assert(
    ∀n ≥ 1 ⇒ 
    (Area_Of_Combined_Squares(n) = F_n × F_{n+1})
    ∧
    (Width_To_Height_Ratio(n) → φ as n → ∞)
  )
} ↔

proof FibonacciGoldenRectangle() {
  lemma SumOfFibSquares() {
    assert(
      ∀n ≥ 1 ⇒ ∑_{j=1}^n {F_j}^2 = F_n × F_{n+1}
    )
  } →
  
  apply(SumOfFibSquares()) →
  
  assert(
    Area_Of_Combined_Squares(n) = ∑_{j=1}^n {F_j}^2
  ) →
  
  lemma GoldenRatioLimit() {
    assert(
      lim_{n→∞} (F_{n+1}/F_n) = φ
    )
  } →
  
  apply(GoldenRatioLimit()) →
  
  assert(
    Width_To_Height_Ratio(n) = F_{n+1}/F_n
  ) →
  
  assert(
    Width_To_Height_Ratio(n) → φ as n → ∞
  )
}