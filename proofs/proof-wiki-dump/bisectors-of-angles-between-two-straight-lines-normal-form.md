theorem AngleBisectors() {
  assert(
    ∀L₁,L₂ ∈ Lines(ℂ) ∧
    L₁: (x cos α + y sin α = p) ∧
    L₂: (x cos β + y sin β = q) ⇒
    BisectorLines = {
      x(cos α - cos β) + y(sin α - sin β) = p - q,
      x(cos α + cos β) + y(sin α + sin β) = p + q
    }
  )
} ↔

proof AngleBisectors() {
  setVar(S: Point) → // Intersection point of L₁,L₂
  setVar(P(x,y): Point) → // Arbitrary point on bisector
  setVar(M,N: Point) → // Perpendicular projections

  lemma Perpendiculars() {
    assert(PM ⊥ L₁ ∧ PN ⊥ L₂) ∧
    assert(∠PSM = ∠PSN) ∧
    assert(∠PMS = ∠PNS) ∧
    assert(PS = PS) → // Common side
    assert(△PSM ≅ △PSN) → // Triangle congruence
    assert(|PM| = |PN|) // Perpendicular lengths equal
  } →

  assert(
    PM = x cos α + y sin α - p ∧
    PN = x cos β + y sin β - q
  ) →
  
  assert(|PM| = |PN| ⇒ 
    x(cos α - cos β) + y(sin α - sin β) = p - q
  ) →

  lemma SignAnalysis() {
    assert(
      sign(PM) = sign(PM') ∧
      sign(PN) = -sign(PN')
    ) →
    assert(
      Bisector₁: PM = PN ∧
      Bisector₂: PM = -PN
    )
  } →

  apply(SignAnalysis()) →
  assert(
    Bisector₂: x(cos α + cos β) + y(sin α + sin β) = p + q
  )
}