theorem Circumcenter_Is_Orthocenter_Medial() {
  let(T: Triangle) →
  setVar(A,B,C: Point) →
  assert(T = Triangle(A,B,C)) →
  setVar(D,E,F: Point) →
  assert(Triangle(D,E,F) = MedialTriangle(T)) →
  setVar(K: Point) →
  assert(K = Circumcenter(Triangle(A,B,C))) →
  assert(K = Orthocenter(Triangle(D,E,F)))
} ↔

proof Circumcenter_Is_Orthocenter_Medial() {
  setVar(FG,DH,EJ: Line) →
  assert(FG = PerpendicularBisector(AC)) ∧
  assert(DH = PerpendicularBisector(AB)) ∧
  assert(EJ = PerpendicularBisector(BC)) →
  
  lemma Circumcenter_Intersection() {
    assert(K = Intersection(FG,DH,EJ)) →
    assert(K = Circumcenter(Triangle(A,B,C)))
  } →

  lemma Perpendicular_Bisector_Is_Altitude() {
    assert(FG = Altitude(Triangle(D,E,F), D)) ∧
    assert(DH = Altitude(Triangle(D,E,F), E)) ∧
    assert(EJ = Altitude(Triangle(D,E,F), F))
  } →
  
  apply(Perpendicular_Bisector_Is_Altitude()) →
  assert(Intersection(FG,DH,EJ) = Orthocenter(Triangle(D,E,F))) →
  assert(K = Orthocenter(Triangle(D,E,F)))
}