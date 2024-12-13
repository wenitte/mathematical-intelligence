theorem Regular_Polygon_Area() {
  assert(
    ∀P ∈ RegularPolygon ∧ 
    ∀C ∈ Incircle(P) ∧ 
    ∀r = radius(C) ∧ 
    ∀n = sides(P) ∧
    ∀A = area(P) ⇒ 
    A = n * r² * tan(π/n)
  )
} ↔

proof Regular_Polygon_Area() {
  setVar(P: RegularPolygon) →
  setVar(n: ℕ, n ≥ 3) →
  setVar(C: Circle, C = incircle(P)) →
  setVar(r: ℝ⁺, r = radius(C)) →
  setVar(O: Point, O = center(C)) →
  
  lemma Isosceles_Decomposition() {
    assert(
      ∃{A,B} ∈ vertices(P) ∧
      triangle(O,A,B) ∈ IsoscelesTriangle ∧
      count(decompose(P, triangles)) = n
    )
  } →
  
  setVar(d: ℝ⁺, d = sideLength(P)) →
  setVar(AOB: Angle, AOB = 2π/n) →
  
  assert(d = 2r * tan(π/n)) →
  assert(area(triangle(O,A,B)) = (r*d)/2) →
  assert(A = n * area(triangle(O,A,B))) →
  
  calc {
    A 
    = n * (r*d)/2
    = n * (r * (2r * tan(π/n)))/2
    = n * r² * tan(π/n)
  } →
  
  conclude(A = n * r² * tan(π/n))
}