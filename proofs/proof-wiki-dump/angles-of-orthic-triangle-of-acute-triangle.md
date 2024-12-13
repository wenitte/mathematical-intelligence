theorem OrthicTriangleAngles() {
  assert(
    ∀ABC ∈ Triangles, isAcute(ABC) ∧
    let(DEF = orthicTriangle(ABC)) ∧
    let(A,B,C = angles(ABC)) ∧
    let(a,b,c = oppositeSides(A,B,C)) →
    angles(DEF) = {180° - 2A, 180° - 2B, 180° - 2C}
  )
} ↔

proof OrthicTriangleAngles() {
  setVar(H = orthocenter(ABC)) →
  assert(isCyclic(quadrilateral(FHDB))) →
  
  lemma AngleEquality1() {
    assert(angle(HDF) = angle(HBF)) ∧
    angle(HBF) = 90° - A  // Due to right triangle AEB
  } →
  
  lemma AngleEquality2() {
    assert(isCyclic(quadrilateral(DHEC))) ∧
    assert(angle(HDE) = angle(HCE)) ∧
    angle(HCE) = 90° - A  // Due to right triangle AFC
  } →
  
  apply(AngleEquality1()) →
  apply(AngleEquality2()) →
  
  assert(
    angle(FDE) = angle(HDE) + angle(HDF) ∧
    angle(FDE) = (90° - A) + (90° - A) ∧
    angle(FDE) = 180° - 2A
  ) →
  
  lemma SymmetricArgument() {
    assert(
      ∀X ∈ {B,C} →
      ∃analogousAngle ∈ angles(DEF): analogousAngle = 180° - 2X
    )
  } →
  
  apply(SymmetricArgument()) →
  assert(conclusion)
}