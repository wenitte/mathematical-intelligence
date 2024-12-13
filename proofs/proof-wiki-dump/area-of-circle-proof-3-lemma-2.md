theorem Circle_Area_Lemma_2() {
  assert(
    ∀r,c ∈ ℝ+ : (
      let C = area_of_circle(r,c) ∧
      let T = area_of_triangle(r,c) →
      T ≥ C
    )
  )
} ↔

proof Circle_Area_Lemma_2() {
  setVar(r,c: ℝ+) →
  setVar(C: area_of_circle(r,c)) →
  setVar(T: area_of_triangle(r,c)) →
  
  lemma Proof_By_Contradiction() {
    assume(T < C) →
    assert(∃P: regular_polygon_area(P) ∧ T < P < C) →
    
    lemma Regular_Polygon_Area() {
      setVar(h: height, q: perimeter) →
      assert(P = (h*q)/2) →
      assert(h < r ∧ q < c)
    } →
    
    apply(Regular_Polygon_Area()) →
    assert(P > T → (h*q)/2 > (r*c)/2) ∧
    assert(h < r ∧ q < c → (h*q)/2 < (r*c)/2) →
    assert(contradiction((h*q)/2 > (r*c)/2 ∧ (h*q)/2 < (r*c)/2))
  } →
  
  apply(Proof_By_Contradiction()) →
  assert(¬(T < C)) →
  conclude(T ≥ C)
}