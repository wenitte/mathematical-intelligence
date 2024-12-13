theorem Circle_Area() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ Area(circle(r)) = πr²
  )
} ↔

proof Circle_Area() {
  setVar(r: ℝ⁺) →
  setVar(sectors: Set) →
  
  lemma Triangle_Approximation() {
    assert(
      limit(|sectors| → ∞) ⇒
      ∀s ∈ sectors: s ≈ triangle(height: r, base: bᵢ)
    )
  } →
  
  lemma Triangle_Area() {
    assert(
      ∀i ∈ ℕ ⇒ Area(triangle(height: r, base: bᵢ)) = (r·bᵢ)/2
    )
  } →
  
  apply(Triangle_Approximation()) →
  apply(Triangle_Area()) →
  
  assert(
    Area(circle(r)) = ∑(i=1 to ∞)(r·bᵢ)/2
  ) →
  
  assert(
    Area(circle(r)) = (r/2)·∑(i=1 to ∞)bᵢ
  ) →
  
  lemma Circle_Circumference() {
    assert(
      ∑(i=1 to ∞)bᵢ = 2πr
    )
  } →
  
  apply(Circle_Circumference()) →
  
  assert(
    Area(circle(r)) = (r/2)·(2πr)
  ) →
  
  assert(
    Area(circle(r)) = πr²
  )
}