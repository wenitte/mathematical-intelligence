theorem Bisectors_Adjacent_Angles_Perpendicular() {
  assert(
    ∀l₁,l₂: Line, ∀P: Point, ∀b₁,b₂: Line ⇒
    [intersect(l₁,l₂,P) ∧ 
     isBisector(b₁,angle(l₁,l₂,P)) ∧
     isBisector(b₂,adjacentAngle(l₁,l₂,P))] →
    perpendicular(b₁,b₂)
  )
} ↔

proof Bisectors_Adjacent_Angles_Perpendicular() {
  setVar(AB,CD: Line) →
  setVar(E,F,G: Point) →
  assert(intersect(AB,CD,E)) →
  assert(isBisector(EF,∠AEC)) →
  assert(isBisector(EG,∠CEB)) →
  
  assert(2∠FEC = ∠AEC) →
  assert(2∠CEG = ∠CEB) →
  
  lemma Two_Angles_Straight_Line() {
    assert(∠AEC + ∠CEB = 2·rightAngle)
  } →
  
  apply(Two_Angles_Straight_Line()) →
  assert(2∠FEC + 2∠CEG = 2·rightAngle) →
  assert(∠FEG = ∠FEC + ∠CEG) →
  assert(∠FEG = rightAngle) →
  
  conclude(perpendicular(EF,EG))
}