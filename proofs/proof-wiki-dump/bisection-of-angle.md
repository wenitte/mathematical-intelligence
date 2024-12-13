theorem AngleBisection() {
  assert(
    ∀angle ∈ Plane ∃line(
      isBisector(line, angle)
    )
  )
} ↔

proof AngleBisection() {
  setVar(∠BAC: Angle) →
  construct(D: Point, on(AB)) →
  
  lemma EqualLines() {
    apply(Prop3_EqualLines()) →
    construct(AE: Line, on(AC)) →
    assert(AE = AD)
  } →
  
  construct(DE: Line) →
  
  lemma EquilateralTriangle() {
    apply(Prop1_EquilateralTriangle(DE)) →
    construct(F: Point) →
    assert(
      isEquilateral(△DEF)
    )
  } →
  
  construct(AF: Line) →
  
  assert(
    AD = AE ∧
    AF = AF ∧ // Common side
    DF = EF   // Equilateral property
  ) →
  
  lemma TriangleCongruence() {
    apply(Prop8_SSS_Congruence()) →
    assert(△ADF ≅ △AEF)
  } →
  
  assert(∠DAF = ∠EAF) →
  
  conclude(
    isBisector(AF, ∠BAC)
  )
}