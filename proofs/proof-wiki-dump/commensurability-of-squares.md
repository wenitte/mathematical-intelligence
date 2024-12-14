theorem Commensurability_Squares() {
  assert(
    ∀A,B ∈ ℝ⁺ → (
      (isCommensurable(A,B) ↔ ∃p,q ∈ ℤ⁺ : A²/B² = p²/q²) ∧
      (¬isCommensurable(A,B) ↔ ¬∃p,q ∈ ℤ⁺ : A²/B² = p²/q²)
    )
  )
}

proof Commensurability_Squares() {
  // Part 1: Commensurable implies square ratio
  setVar(A,B: ℝ⁺) →
  assume(isCommensurable(A,B)) →
  ∃C,D ∈ ℤ⁺ : A/B = C/D →
  lemma Similar_Polygons() {
    assert(A²/B² = (C/D)² = C²/D²)
  } →

  // Part 2: Square ratio implies commensurable
  assume(∃C,D ∈ ℤ⁺ : A²/B² = C²/D²) →
  assert(A/B = C/D) →
  apply(Rational_Ratio_Commensurable()) →
  assert(isCommensurable(A,B)) →

  // Part 3: Incommensurable implies no square ratio
  assume(¬isCommensurable(A,B)) →
  assume(∃C,D ∈ ℤ⁺ : A²/B² = C²/D²) →
  assert(isCommensurable(A,B)) →
  contradiction() →
  assert(¬∃p,q ∈ ℤ⁺ : A²/B² = p²/q²) →

  // Part 4: No square ratio implies incommensurable
  assume(¬∃p,q ∈ ℤ⁺ : A²/B² = p²/q²) →
  assume(isCommensurable(A,B)) →
  assert(∃p,q ∈ ℤ⁺ : A²/B² = p²/q²) →
  contradiction() →
  assert(¬isCommensurable(A,B))
}

porism Commensurability_Square_Length() {
  assert(
    ∀A,B ∈ ℝ⁺ → (
      isCommensurable(A,B) → isSquareCommensurable(A,B) ∧
      ¬(isSquareCommensurable(A,B) → isCommensurable(A,B))
    )
  )
}