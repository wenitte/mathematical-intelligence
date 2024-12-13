theorem Square_Area() {
  assert(
    ∀L ∈ ℝ_≥0 ⇒ Area(L) = L²
  )
} ↔

proof Square_Area() {
  // Integer Case
  lemma Integer_Case() {
    setVar(L: ℕ) →
    case(L = 1) {
      assert(Area(1) = 1) // By definition
    } ∧
    case(L > 1) {
      assert(UnitSquares = L × L) →
      assert(Area(L) = UnitSquares × 1) →
      assert(Area(L) = L²)
    }
  } →

  // Rational Case
  lemma Rational_Case() {
    setVar(L: ℚ_≥0) →
    assert(∃p,q ∈ ℕ: L = p/q) →
    let(BigSquare: Square(p)) →
    assert(Area(BigSquare) = p²) → // From Integer_Case
    divide(BigSquare, q²) →
    assert(∀s ∈ SmallSquares: SideLength(s) = p/q) →
    assert(Area(L) = p²/q²) →
    assert(Area(L) = (p/q)²) →
    assert(Area(L) = L²)
  } →

  // Irrational Case
  lemma Irrational_Case() {
    setVar(L: ℝ_≥0\ℚ) →
    assert(∀ε>0 ∃A,B ∈ ℚ_+: A < L < B ∧ |A-L| < ε ∧ |B-L| < ε) →
    assert(lim(ε→0⁺) A = L ∧ lim(ε→0⁺) B = L) →
    assert(Area(B) ≥ Area(L) ≥ Area(A)) →
    apply(Rational_Case()) →
    assert(Area(B) = B² ∧ Area(A) = A²) →
    assert(lim(B→L) B² = L² = lim(A→L) A²) →
    assert(lim(B→L) Area(B) = L² ∧ lim(A→L) Area(A) = L²) →
    assert(L² ≥ Area(L) ≥ L²) →
    assert(Area(L) = L²)
  } →

  // Main Proof
  setVar(L: ℝ_≥0) →
  case(L ∈ ℕ) {
    apply(Integer_Case())
  } ∧
  case(L ∈ ℚ_≥0) {
    apply(Rational_Case())
  } ∧
  case(L ∈ ℝ_≥0\ℚ) {
    apply(Irrational_Case())
  }
}