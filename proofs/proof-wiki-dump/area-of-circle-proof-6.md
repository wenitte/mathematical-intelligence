theorem Circle_Area() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ Area(Circle(r)) = πr²
  )
} ↔

proof Circle_Area() {
  setVar(r: ℝ⁺) →
  setVar(A: ℝ⁺) →
  
  lemma Circle_Equation() {
    assert(
      Circle(r) = {(x,y) ∈ ℝ² | x² + y² = r²}
    )
  } →
  
  lemma Circle_Y_Component() {
    assert(
      y = ±√(r² - x²)
    )
  } →
  
  lemma Upper_Half() {
    assert(
      y = +√(r² - x²) for y ≥ 0
    )
  } →
  
  apply(Circle_Equation()) →
  apply(Circle_Y_Component()) →
  apply(Upper_Half()) →
  
  assert(
    A/4 = ∫[0→r](√(r² - x²))dx
  ) →
  
  lemma Definite_Integral() {
    assert(
      ∫[0→r](√(r² - x²))dx = (πr²)/4
    )
  } →
  
  apply(Definite_Integral()) →
  assert(
    A/4 = (πr²)/4
  ) →
  assert(
    A = πr²
  )
}