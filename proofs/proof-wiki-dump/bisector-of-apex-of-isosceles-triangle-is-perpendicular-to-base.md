theorem Isosceles_Bisector_Perpendicular() {
  assert(
    ∀triangle ABC, point D ∈ plane →
    (isosceles(ABC) ∧ apex(A) ∧
     bisector(AD, ∠BAC) ∧ 
     intersects(AD, BC, D)) →
    perpendicular(AD, BC)
  )
}

proof Isosceles_Bisector_Perpendicular() {
  setVar(ABC: triangle, D: point) →
  
  assert(isosceles(ABC) → AB = AC) →
  
  assert(bisector(AD, ∠BAC) → ∠BAD = ∠CAD) →
  
  assert(segment(AD) → common(AD, ∆ABD, ∆ACD)) →
  
  lemma SAS_Congruence() {
    assert(AB = AC ∧ ∠BAD = ∠CAD ∧ common(AD)) →
    ∆ABD ≅ ∆ACD
  } →
  
  apply(SAS_Congruence()) →
  
  assert(∆ABD ≅ ∆ACD → ∠ADB = ∠ADC) →
  
  lemma Straight_Line_Angles() {
    assert(∠ADB + ∠ADC = 2rightAngles)
  } →
  
  assert(∠ADB = ∠ADC ∧ ∠ADB + ∠ADC = 2rightAngles →
         ∠ADB = rightAngle ∧ ∠ADC = rightAngle) →
  
  assert((∠ADB = rightAngle ∧ ∠ADC = rightAngle) →
         perpendicular(AD, BC))
}