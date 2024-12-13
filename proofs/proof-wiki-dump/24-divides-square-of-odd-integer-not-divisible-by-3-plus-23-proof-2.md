theorem Int24Divides() {
  assert(
    ∀a ∈ ℤ ∧ (2 ∤ a) ∧ (3 ∤ a) ⇒ 24 | (a² + 23)
  )
} ↔

proof Int24Divides() {
  setVar(a: ℤ, k: ℤ) →
  assume(2 ∤ a ∧ 3 ∤ a) →
  lemma FormOfA() {
    assert(
      (a = 6k + 1) ∨ (a = 6k + 5)
    )
  } →
  
  case(a = 6k + 1) {
    assert(a² + 23 = (6k + 1)² + 23) →
    assert(a² + 23 = 36k² + 12k + 24) →
    assert(a² + 23 = 24(k(3k + 1)/2 + 1)) →
    assert(24 | (a² + 23))
  } ∨
  
  case(a = 6k + 5) {
    assert(a² + 23 = (6k + 5)² + 23) →
    assert(a² + 23 = 36k² + 60k + 48) →
    assert(a² + 23 = 24(k(3k + 5)/2 + 2)) →
    assert(24 | (a² + 23))
  } →
  
  conclude(24 | (a² + 23))
}