theorem DivisibilityBy24() {
  assert(
    ∀a ∈ ℤ ∧ (2 ∤ a) ∧ (3 ∤ a) ⇒ 24 | (a² + 23)
  )
} ↔

proof DivisibilityBy24_Method1() {
  setVar(a: ℤ) →
  assume(2 ∤ a ∧ 3 ∤ a) →
  lemma SquareModulo24() {
    assert(24 | (a² - 1))
  } →
  apply(SquareModulo24()) →
  assert(24 | (a² - 1)) →
  assert(24 | (a² - 1 + 24)) →
  assert(24 | (a² + 23))
}

proof DivisibilityBy24_Method2() {
  setVar(a: ℤ) →
  assume(2 ∤ a ∧ 3 ∤ a) →
  assert(∃k ∈ ℤ: (a = 6k + 1) ∨ (a = 6k + 5)) →
  
  case(a = 6k + 1) {
    assert(a² + 23 = (6k + 1)² + 23) →
    assert((6k + 1)² + 23 = 36k² + 12k + 24) →
    assert(36k² + 12k + 24 = 24(k(3k + 1)/2 + 1))
  } ∨
  
  case(a = 6k + 5) {
    assert(a² + 23 = (6k + 5)² + 23) →
    assert((6k + 5)² + 23 = 36k² + 60k + 48) →
    assert(36k² + 60k + 48 = 24(k(3k + 5)/2 + 2))
  } →
  
  assert(24 | (a² + 23))
}