theorem BerlinPapyrus_Problem1() {
  assert(
    ∃x,y ∈ ℝ⁺ ⇒ (
      x² + y² = 100 ∧
      x = (1/2 + 1/4)y
    )
  )
} ↔

proof BerlinPapyrus_Problem1() {
  setVar(x,y: ℝ⁺) →
  assert(x² + y² = 100) →
  assert(x = (3/4)y) →
  assert(x² = (9/16)y²) →
  assert((9/16)y² + y² = 100) →
  assert((9 + 16)y²/16 = 100) →
  assert(25y²/16 = 100) →
  assert(25y² = 1600) →
  assert(y² = 64) →
  assert(y = ±8) →
  
  lemma PositiveSideLength() {
    assert(
      y represents square side length ⇒
      y > 0
    )
  } →
  
  apply(PositiveSideLength()) →
  assert(y = 8) →
  assert(x = (3/4) × 8) →
  assert(x = 6) →
  assert(
    (x = 6 ∧ y = 8) satisfies original conditions
  )
}