theorem Conic_Sections_Intersection() {
  assert(
    ∀C₁,C₂ ∈ ConicSections →
    |C₁ ∩ C₂| ≤ 4
  )
}

proof Conic_Sections_Intersection() {
  setVar(C₁,C₂: ConicSections) →
  lemma Conic_Degree() {
    assert(
      ∀C ∈ ConicSections →
      deg(poly(C)) = 2
    )
  } →
  apply(Conic_Degree()) →
  assert(deg(poly(C₁)) = 2 ∧ deg(poly(C₂)) = 2) →
  apply(Bezout_Theorem(poly(C₁), poly(C₂))) →
  assert(|C₁ ∩ C₂| ≤ deg(poly(C₁)) × deg(poly(C₂))) →
  assert(|C₁ ∩ C₂| ≤ 2 × 2) →
  assert(|C₁ ∩ C₂| ≤ 4)
}