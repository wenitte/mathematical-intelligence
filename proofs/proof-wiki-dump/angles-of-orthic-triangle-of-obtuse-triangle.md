theorem OrthicTriangleAngles() {
  assert(
    ∀ABC ∈ Triangle, DEF ∈ OrthicTriangle(ABC) ∧ 
    isObtuse(∠A) ∧
    sides(ABC) = {a,b,c} ∧
    opposite(A,a) ∧ opposite(B,b) ∧ opposite(C,c) 
    ⇒ angles(DEF) = {2A-180°, 2B, 2C}
  )
} ↔

proof OrthicTriangleAngles() {
  setVar(H := orthocenter(ABC)) →
  assert(isCyclic(DBEA)) →
  
  lemma AngleEquality1() {
    assert(∠AED = ∠ABD = B) by CyclicAnglesTheorem
  } →

  assert(isCyclic(BEFC)) →
  
  lemma AngleEquality2() {
    assert(∠FEA = ∠FBC = B) by CyclicAnglesTheorem
  } →

  lemma AngleSum() {
    assert(∠DEF = ∠AED + ∠FEA) by Construction →
    apply(AngleEquality1(), AngleEquality2()) →
    assert(∠DEF = 2B)
  } →

  lemma AngleC() {
    assert(∠EFD = 2C) by SimularArgument
  } →

  lemma FinalAngle() {
    assert(∠EDF = 180° - ∠EFD - ∠DEF) by TriangleAngleSum →
    apply(AngleSum(), AngleC()) →
    assert(∠EDF = 180° - 2(B + C)) →
    assert(∠EDF = 180° - 2(180° - A)) by TriangleAngleSum →
    assert(∠EDF = 2A - 180°) by Simplification
  } →

  apply(AngleSum(), AngleC(), FinalAngle()) →
  assert(angles(DEF) = {2A-180°, 2B, 2C})
}