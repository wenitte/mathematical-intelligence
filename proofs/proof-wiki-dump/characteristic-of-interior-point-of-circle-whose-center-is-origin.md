theorem Circle_Interior_Characteristic() {
  assert(
    ∀C: Circle, ∀P(x,y): Point, ∀r: ℝ⁺ ⇒
    (center(C) = O(0,0) ∧ radius(C) = r) ⇒
    (P ∈ interior(C) ↔ x² + y² - r² < 0)
  )
} ↔

proof Circle_Interior_Characteristic() {
  setVar(C: Circle, P(x,y): Point, r: ℝ⁺) →
  setVar(d: ℝ⁺, "distance from P to O") →
  
  assert(d = √((x-0)² + (y-0)²)) →
  apply(Distance_Formula) →
  
  assert(d² = x² + y²) →

  lemma Interior_Definition() {
    assert(
      ∀P: Point ⇒
      (P ∈ interior(C) ↔ d² < r²)
    )
  } →
  
  apply(Interior_Definition) →
  assert(P ∈ interior(C) ↔ d² < r²) →
  assert(P ∈ interior(C) ↔ x² + y² < r²) →
  assert(P ∈ interior(C) ↔ x² + y² - r² < 0)
}