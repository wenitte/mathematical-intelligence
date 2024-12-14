theorem CircumscribingTriangle() {
  assert(
    ∀circle(ABC) ∧ ∀triangle(DEF) ⇒
    ∃triangle(LMN) : (
      isCircumscribed(LMN, ABC) ∧
      isEquiangular(LMN, DEF)
    )
  )
}

proof CircumscribingTriangle() {
  setVar(ABC: circle) →
  setVar(DEF: triangle) →
  setVar(K: point, center(ABC)) →
  setVar(B: point, onCircle(ABC)) →
  
  construct({
    extend(EF, [G, H]) →
    angle(BKA = DEG) →
    angle(BKC = DFH) →
    tangents([LM, MN, LN], ABC, [A, B, C])
  }) →

  lemma Perpendicular_Tangents() {
    assert(
      perpendicular(LM, AK) ∧
      perpendicular(MN, BK) ∧
      perpendicular(LN, CK)
    )
  } →

  lemma Right_Angles() {
    assert(
      rightAngle(KAM) ∧
      rightAngle(KBM)
    )
  } →

  assert(angle(AMB) + angle(AKB) = 2*rightAngle) →
  assert(angle(AKB) = angle(DEG)) →
  assert(angle(AMB) + angle(DEG) = 2*rightAngle) →
  
  lemma Straight_Line_Angles() {
    assert(angle(DEF) + angle(DEG) = 2*rightAngle)
  } →

  conclude(angle(AMB) = angle(DEF)) →
  
  similarly({
    assert(angle(ALC) = angle(EDF)) →
    assert(angle(BNC) = angle(DFE))
  }) →
  
  conclude(isEquiangular(LMN, DEF))
}