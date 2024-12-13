theorem Descartes_Folium_Behaviour() {
  assert(
    ∃F: (ParametricCurve) ∧ 
    F.equations = {x = (3at)/(1+t³), y = (3at²)/(1+t³)} →
    (∃t=-1: F.isDiscontinuous(t)) ∧
    (∀t<-1: F.inQuadrant(4)) ∧
    (∀t∈(-1,0]: F.inQuadrant(2)) ∧
    (∀t≥0: F.inQuadrant(1))
  )
} ↔

proof Descartes_Folium_Behaviour() {
  lemma Discontinuity() {
    setVar(t: ℝ) →
    assert(t = -1 → 1+t³ = 0) →
    assert(denominator = 0 → F.isDiscontinuous(-1))
  } →

  lemma Behaviour_Less_Than_Negative_One() {
    assert(
      lim[t→-∞](3at)/(1+t³) = lim[t→-∞](3a)/t² = 0⁺ ∧
      lim[t→-∞](3at²)/(1+t³) = lim[t→-∞](3a)/t = 0⁻
    ) →
    assert(
      lim[t→-1⁻](3at)/(1+t³) = +∞ ∧
      lim[t→-1⁻](3at²)/(1+t³) = -∞
    ) →
    assert(∀t<-1: F.path((0,0) → (+∞,-∞)) ∧ F.inQuadrant(4))
  } →

  lemma Behaviour_Greater_Than_Zero() {
    assert(
      lim[t→+∞](3at)/(1+t³) = lim[t→+∞](3a)/t² = 0⁺ ∧
      lim[t→+∞](3at²)/(1+t³) = lim[t→+∞](3a)/t = 0⁺
    ) →
    assert(∀t>0: x>0 ∧ y>0) →
    assert(∀t≥0: F.inQuadrant(1))
  } →

  lemma Behaviour_Between_NegOne_Zero() {
    assert(t∈(-1,0) → x<0 ∧ y>0) →
    assert(
      lim[t→-1⁺](3at)/(1+t³) = -∞ ∧
      lim[t→-1⁺](3at²)/(1+t³) = +∞
    ) →
    assert(∀t∈(-1,0]: F.path((0,0) → (-∞,+∞)) ∧ F.inQuadrant(2))
  } →

  apply(Discontinuity()) →
  apply(Behaviour_Less_Than_Negative_One()) →
  apply(Behaviour_Greater_Than_Zero()) →
  apply(Behaviour_Between_NegOne_Zero()) →
  assert(conclusion)
}