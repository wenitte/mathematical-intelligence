theorem Circle_Area_Lemma() {
  assert(
    ∀r ∈ ℝ⁺ ∧ ∀c ∈ ℝ⁺ ∧
    let T = triangle_area(r,c) ∧
    let C = circle(r) ∧
    c = circle_circumference(r) →
    T = πr²
  )
} ↔

proof Circle_Area_Lemma() {
  setVar(r: ℝ⁺) →
  setVar(c: ℝ⁺) →
  
  assert(T = (r × c)/2) →
  lemma Triangle_Area() {
    assert(
      ∀base,height ∈ ℝ⁺ →
      triangle_area = (base × height)/2
    )
  } →

  assert(c = 2πr) →
  lemma Circle_Circumference() {
    assert(
      ∀r ∈ ℝ⁺ →
      circle_circumference(r) = 2πr
    )
  } →

  substitute(c = 2πr) →
  assert(T = (r × 2πr)/2) →
  simplify() →
  assert(T = πr²)
}