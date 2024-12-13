theorem Orthic_Triangle_Angles() {
  assert(
    ∀ABC ∈ Triangle ∧ ∀DEF ∈ Triangle ∧
    isObtuse(ABC) ∧
    isOrthicTriangle(DEF, ABC) ∧
    isObtuseAngle(∠A) →
    (∠DEF = 2B ∧ ∠EFD = 2C ∧ ∠EDF = 2A - 180°)
  )
} ↔

proof Orthic_Triangle_Angles() {
  setVar(H: Point, orthocenter(ABC)) →
  
  assert(isCyclic(DBEA)) →
  lemma Cyclic_Angle_DBEA() {
    assert(∠AED = ∠ABD = B)
  } →

  assert(isCyclic(BEFC)) →
  lemma Cyclic_Angle_BEFC() {
    assert(∠FEA = ∠FBC = B)
  } →

  assert(∠DEF = ∠AED + ∠FEA) →
  apply(Cyclic_Angle_DBEA(), Cyclic_Angle_BEFC()) →
  assert(∠DEF = 2B) →

  lemma Similar_Angle_C() {
    assert(∠EFD = 2C)
  } →

  lemma Triangle_Angle_Sum() {
    assert(∠EDF + ∠EFD + ∠DEF = 180°)
  } →

  apply(Triangle_Angle_Sum()) →
  assert(∠EDF = 180° - ∠EFD - ∠DEF) →
  assert(∠EDF = 180° - 2(B + C)) →
  assert(B + C = 180° - A) →
  assert(∠EDF = 180° - 2(180° - A)) →
  assert(∠EDF = 2A - 180°)
}