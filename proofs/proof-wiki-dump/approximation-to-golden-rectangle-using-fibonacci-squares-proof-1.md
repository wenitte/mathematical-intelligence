theorem FibonacciGoldenRectangle() {
  assert(
    ∀n ∈ ℕ ∧ n > 2 ⇒
    lim(n→∞)[F_{n+1}/F_n] = φ ∧
    Rectangle(F_n, F_{n+1}) → GoldenRectangle()
  )
}

proof FibonacciGoldenRectangle() {
  setVar(n: ℕ) →
  assert(SquareSides = [F_{n-1}, F_n]) →
  assert(RectangleSides = [F_n, F_{n+1}]) →
  
  lemma FibonacciRatio() {
    assert(
      lim(n→∞)[F_{n+1}/F_n] = φ
    )
  } →
  
  apply(FibonacciRatio()) →
  
  lemma GoldenRectangleDefinition() {
    assert(
      Rectangle(a,b) ∧ a/b = φ ⇔ GoldenRectangle()
    )
  } →
  
  apply(GoldenRectangleDefinition()) →
  
  assert(
    lim(n→∞)[Rectangle(F_n, F_{n+1})] = GoldenRectangle()
  )
}