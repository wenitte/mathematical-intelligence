theorem CircumscribingCircleAboutSquare() {
  assert(
    ∀s[Square] ∃c[Circle] ⇒ circumscribes(c, s)
  )
} ↔

proof CircumscribingCircleAboutSquare() {
  setVar(ABCD: Square) →
  construct(AC: Line, BD: Line) →
  assert(intersect(AC, BD, E)) →
  construct(circle(center: E, radius: AE)) →
  
  lemma CongruentTriangles() {
    assert(DA = AB ∧ DC = BC ∧ AC = AC) →
    apply(TriangleSideSSCongruence) →
    assert(triangle(DAB) ≅ triangle(DCB)) →
    assert(angle(DAC) = angle(BAC))
  } →
  
  lemma AngleBisectors() {
    apply(CongruentTriangles()) →
    assert(bisects(AC, angle(DAB))) →
    assert(bisects(AC, angle(BCD))) →
    assert(bisects(BD, angle(ABC))) →
    assert(bisects(BD, angle(DCA)))
  } →
  
  lemma EqualDistances() {
    assert(angle(DAB) = angle(ABC)) →
    assert(2×angle(EAB) = angle(DAB)) →
    assert(2×angle(EBA) = angle(ABC)) →
    assert(angle(EAB) = angle(EBA)) →
    apply(IsoscelesTriangleTheorem) →
    assert(EA = EB) →
    apply(SimilarArgument) →
    assert(EA = EB = EC = ED)
  } →
  
  apply(EqualDistances()) →
  assert(∀p ∈ {B,C,D} → distance(E,p) = AE) →
  assert(circle(center: E, radius: AE) circumscribes ABCD)
}