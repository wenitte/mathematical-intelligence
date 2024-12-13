theorem ParallelogramArea() {
  assert(
    ∀P[parallelogram] → Area(P) = base × height
  )
} ↔

proof ParallelogramArea() {
  // Case 1: Square
  lemma SquareCase() {
    setVar(a: ℝ) →
    assert(Area(square) = a²) ∧
    assert(base = height = a) →
    conclude(Area(square) = base × height)
  } →

  // Case 2: Rectangle
  lemma RectangleCase() {
    setVar(a, b: ℝ) →
    assert(Area(AIGE) = (a + b)²) ∧
    assert(ABCD ≅ CHGF) →
    assert(Area(AIGE) = a² + 2Area(ABCD) + b²) ∧
    assert((a + b)² = a² + 2ab + b²) →
    conclude(Area(ABCD) = ab)
  } →

  // Case 3: General Parallelogram
  lemma ParallelogramCase() {
    setVar(
      ABCD: parallelogram,
      F: point[foot_altitude_C],
      E: point[foot_altitude_D]
    ) →
    assert(AD ≅ BC) ∧
    assert(∠AED ≅ ∠BFC) ∧
    assert(DE ≅ CF) →
    assert(△AED ≅ △BFC) →
    assert(Area(AED) = Area(BFC)) →
    assert(Area(ABCD) = EF × FC) →
    assert(Area(ABCD) = AB × DE) →
    setVar(b: base, h: height, θ: angle) →
    assert(Area(ABCD) = b × h) ∧
    assert(h = b × sin(θ)) →
    conclude(Area(ABCD) = b × h)
  } →

  apply(SquareCase()) ∧
  apply(RectangleCase()) ∧
  apply(ParallelogramCase()) →
  conclude(∀P[parallelogram] → Area(P) = base × height)
}