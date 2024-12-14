theorem CircumscribingCircle_RegularPentagon() {
  assert(
    ∀P[RegularPentagon] ∃C[Circle] : circumscribes(C, P)
  )
} ↔

proof CircumscribingCircle_RegularPentagon() {
  setVar(ABCDE: RegularPentagon) →
  
  lemma BisectAngles() {
    construct(CF: Line, bisects(CF, ∠BCD)) ∧
    construct(DF: Line, bisects(DF, ∠CDE))
  } →

  lemma CircleConstruction() {
    setPoint(F: Point, intersection(CF, DF)) →
    construct(circle: Circle, center(F) ∧ radius(FC))
  } →

  lemma AllRadiiEqual() {
    construct(FB: Line) ∧
    construct(FA: Line) ∧
    construct(FE: Line) →
    
    assert(
      ∠CBA ∧ ∠BAE ∧ ∠AED are_bisected_by(FB, FA, FE)
    ) →
    
    assert(
      ∠BCD = ∠CDE ∧
      2∠FCD = ∠BCD ∧
      2∠CDF = ∠CDE
    ) →
    
    conclude(∠FCD = ∠CDF) →
    
    apply(IsoscelesTriangle_TwoEqualAngles) →
    conclude(FC = FD) →
    
    apply(SimilarArgument) →
    conclude(FB = FA = FE = FC = FD)
  } →
  
  conclude(
    circle_ABCDE circumscribes pentagon_ABCDE
  )
}