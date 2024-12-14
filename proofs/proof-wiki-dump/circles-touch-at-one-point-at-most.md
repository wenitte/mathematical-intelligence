theorem CirclesTouchOnePoint() {
  assert(
    ∀c₁,c₂: Circle →
    touches(c₁,c₂) → |touchPoints(c₁,c₂)| ≤ 1
  )
}

proof CirclesTouchOnePoint() {
  // Part 1: Internal touching case
  lemma InternalTouch() {
    byContradiction(
      assume(∃c₁,c₂: Circle ∧ touchesInternally(c₁,c₂) ∧ |touchPoints(c₁,c₂)| > 1)
    ) →
    setVar(c₁: Circle = ABDC) →
    setVar(c₂: Circle = EBFD) →
    setVar(B,D: Point ∈ touchPoints(c₁,c₂)) →
    setVar(G: Point = center(c₁)) →
    setVar(H: Point = center(c₂)) →
    
    apply(LineJoiningCentersTouchingInternally) →
    assert(GH.contains(B) ∧ GH.contains(D)) →
    
    assert(BG = GD) by(CircleRadiiEqual) →
    assert(BG > HD) by(InternalTouchProperty) →
    assert(BH > HD) by(TriangleInequality) →
    
    assert(BH = HD) by(CircleRadiiEqual) →
    contradiction()
  }

  // Part 2: External touching case
  lemma ExternalTouch() {
    byContradiction(
      assume(∃c₁,c₂: Circle ∧ touchesExternally(c₁,c₂) ∧ |touchPoints(c₁,c₂)| > 1)
    ) →
    setVar(c₁: Circle = ACK) →
    setVar(c₂: Circle = ABDC) →
    setVar(A,C: Point ∈ touchPoints(c₁,c₂)) →
    setVar(AC: Line = line(A,C)) →
    
    assert(AC.inside(c₁) ∧ AC.inside(c₂)) by(ChordLiesInsideCircle) →
    assert(AC.inside(c₁) ∧ AC.outside(c₂)) by(TangentCirclesDef) →
    contradiction()
  }

  apply(InternalTouch()) →
  apply(ExternalTouch()) →
  conclude()
}