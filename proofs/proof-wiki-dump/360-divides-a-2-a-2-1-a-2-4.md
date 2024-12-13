theorem Divisibility_360() {
  assert(
    ∀a ∈ ℤ ⇒ 360 ∣ (a² * (a² - 1) * (a² - 4))
  )
} ↔

proof Divisibility_360() {
  setVar(a: ℤ) →
  
  lemma DifferenceOfSquares() {
    assert(
      a²(a² - 1)(a² - 4) = a(a - 2)(a - 1)a(a + 1)(a + 2)
    )
  } →
  
  lemma ConsecutiveIntegers() {
    assert(
      {a - 2, a - 1, a, a + 1, a + 2} are 5 consecutive integers
    )
  } →
  
  lemma Product120() {
    assert(
      120 ∣ (a(a² - 1)(a² - 4))
    ) ∧
    assert(
      120 ∣ (a²(a² - 1)(a² - 4))
    ) ∧
    assert(
      120 = 2³ * 3 * 5
    )
  } →
  
  lemma Divisibility9() {
    assert(
      ∀a ∈ ℤ ⇒ (
        (a ∈ 3ℤ ⇒ 9 ∣ a²) ∨
        (a ∈ 3ℤ + 1 ⇒ 9 ∣ ((a-1)(a+2))) ∨
        (a ∈ 3ℤ + 2 ⇒ 9 ∣ ((a-2)(a+1)))
      )
    )
  } →
  
  apply(DifferenceOfSquares()) →
  apply(ConsecutiveIntegers()) →
  apply(Product120()) →
  apply(Divisibility9()) →
  
  assert(
    9 ∣ (a²(a² - 1)(a² - 4)) ∧ 120 ∣ (a²(a² - 1)(a² - 4)) →
    360 ∣ (a²(a² - 1)(a² - 4))
  )
}