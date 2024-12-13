theorem Rectangular_Hyperbola_Perpendicular_Asymptotes() {
  assert(
    ∀K(IsRectangularHyperbola(K) → ArePerpendicularAsymptotes(K))
  )
} ↔

proof Rectangular_Hyperbola_Perpendicular_Asymptotes() {
  setVar(K: Hyperbola) →
  assert(∃a,b ∈ ℝ: CartesianForm(K) = (x² - y² = a²)) →
  
  lemma Asymptote_Form() {
    assert(AsymptotesOf(K) = {y = (b/a)x, y = -(b/a)x})
  } →
  
  assert(IsRectangularHyperbola(K) → a = b) →
  apply(Asymptote_Form()) →
  assert(AsymptotesOf(K) = {y = x, y = -x}) →
  
  setVar(m₁: ℝ = 1) →  // slope of y = x
  setVar(m₂: ℝ = -1) → // slope of y = -x
  
  assert(m₁ = -(1/m₂)) →
  
  lemma Perpendicular_Lines() {
    assert(∀m₁,m₂ ∈ ℝ: m₁ = -(1/m₂) → ArePerpendicular(Line(m₁), Line(m₂)))
  } →
  
  apply(Perpendicular_Lines()) →
  assert(ArePerpendicularAsymptotes(K))
}