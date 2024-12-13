theorem Orthic_Triangle_Angles() {
  assert(
    ∀ABC ∈ Triangle, isAcute(ABC) ∧
    let(a,b,c: sides(ABC)) ∧
    let(A,B,C: vertices(ABC)) ∧
    let(DEF: orthicTriangle(ABC)) →
    angles(DEF) = {180° - 2A, 180° - 2B, 180° - 2C}
  )
} ↔

proof Orthic_Triangle_Angles() {
  setVar(H: orthocenter(ABC)) →
  assert(isCyclic(FHDB)) →
  
  lemma Angle_In_Segment() {
    assert(
      isCyclic(FHDB) →
      angle(HDF) = angle(HBF)
    )
  } →
  
  lemma Right_Triangle_Angle() {
    assert(
      isRight(AEB) →
      angle(HBF) = 90° - A
    )
  } →
  
  apply(Angle_In_Segment()) →
  apply(Right_Triangle_Angle()) →
  assert(angle(HDF) = 90° - A) →
  
  lemma Similar_For_DHEC() {
    assert(
      isCyclic(DHEC) →
      angle(HDE) = angle(HCE) = 90° - A
    )
  } →
  
  apply(Similar_For_DHEC()) →
  
  assert(
    angle(FDE) = angle(HDE) + angle(HDF) ∧
    angle(FDE) = (90° - A) + (90° - A) ∧
    angle(FDE) = 180° - 2A
  ) →
  
  lemma Similar_For_BC() {
    assert(
      ∀X ∈ {B,C} →
      ∃angle ∈ angles(DEF):
      angle = 180° - 2X
    )
  } →
  
  apply(Similar_For_BC()) →
  assert(angles(DEF) = {180° - 2A, 180° - 2B, 180° - 2C})
}