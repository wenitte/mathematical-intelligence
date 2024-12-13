theorem Square_Plus_23_Divisible_By_24() {
  assert(
    ∀a ∈ ℤ ∧ (2 ∤ a) ∧ (3 ∤ a) ⇒ 24 | (a² + 23)
  )
} ↔

proof Square_Plus_23_Divisible_By_24() {
  setVar(a: ℤ) →
  assume(2 ∤ a ∧ 3 ∤ a) →
  
  lemma Odd_Not_Div_3_Square_Minus_1() {
    assert(24 | (a² - 1))
  } →
  
  apply(Odd_Not_Div_3_Square_Minus_1()) →
  assert(24 | (a² - 1)) →
  assert(24 | (a² - 1 + 24)) →
  assert(24 | (a² + 23)) →
  qed()
}