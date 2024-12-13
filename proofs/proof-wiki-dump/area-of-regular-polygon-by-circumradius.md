theorem Regular_Polygon_Area() {
  assert(
    ∀P: RegularPolygon, n: ℕ, r: ℝ⁺ ⇒
    (isRegularNGon(P, n) ∧ hasCircumradius(P, r)) →
    Area(P) = (1/2)×n×r²×sin(2π/n)
  )
} ↔

proof Regular_Polygon_Area() {
  setVar(P: RegularPolygon, n: ℕ, r: ℝ⁺) →
  setVar(O: Point, A: Point, B: Point) →
  
  lemma Triangle_Decomposition() {
    assert(
      ∃triangles: Set(Triangle) ⇒
      (|triangles| = n ∧
      P = Union(triangles) ∧
      ∀t ∈ triangles: isIsosceles(t))
    )
  } →
  
  let(OAB: Triangle) →
  assert(Area(P) = n×Area(OAB)) →
  
  setVar(d: ℝ⁺, h: ℝ⁺) →
  assert(d = sideLength(P)) →
  assert(h = altitude(OAB)) →
  assert(∠AOB = 2π/n) →
  
  lemma Triangle_Relations() {
    assert(h = r×cos(π/n)) ∧
    assert(d = 2r×sin(π/n))
  } →
  
  assert(Area(OAB) = (h×d)/2) →
  assert(Area(P) = n×((r×cos(π/n))×(2r×sin(π/n)))/2) →
  assert(Area(P) = n×r²×cos(π/n)×sin(π/n)) →
  
  lemma Double_Angle_Sin() {
    assert(2×sin(x)×cos(x) = sin(2x))
  } →
  
  apply(Double_Angle_Sin()) →
  assert(Area(P) = (1/2)×n×r²×sin(2π/n))
}