theorem Center_Of_Circle() {
  assert(
    ∀C: Circle, ∀P: Point, ∀L₁,L₂,L₃: Line |
    (P ∈ interior(C) ∧ 
     L₁,L₂,L₃ connect P to C ∧
     |L₁| = |L₂| = |L₃|) ⇒ 
    P = center(C)
  )
} ↔

proof Center_Of_Circle() {
  setVar(C: Circle = ABC) →
  setVar(P: Point = D) →
  assert(|DA| = |DB| = |DC|) →

  construct(
    Line(AB), 
    Line(BC),
    Point(E: bisect(AB)),
    Point(F: bisect(BC)),
    Line(ED), Line(FD),
    Line(GK: extend(ED)),
    Line(HL: extend(FD))
  ) →

  assert(|AE| = |EB| ∧ |AD| = |BD| ∧ |ED| common) →
  
  lemma Triangle_Congruence() {
    assert(triangle(AED) ≅ triangle(BED)) →
    assert(∠AED = ∠BED)
  } →

  apply(Triangle_Congruence()) →
  apply(Right_Angle_Definition) →
  assert(∠AED = 90° ∧ ∠BED = 90°) →
  
  lemma Center_On_Perpendicular() {
    assert(center(ABC) ∈ GK)
  } →

  lemma Second_Triangle_Congruence() {
    assert(triangle(BFD) ≅ triangle(CFD)) →
    assert(center(ABC) ∈ HL)
  } →

  assert(GK ∩ HL = {D}) →
  assert(D = center(ABC))
}