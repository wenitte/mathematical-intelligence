theorem Square_Lesser_Segment_EMSR() {
  assert(
    ∀AB ∈ Line, ∃C ∈ AB: IsEMSR(AB,C) →
    let(AC = GreaterSegment(AB,C),
        D = Midpoint(AC)) →
    BD² = 5⋅DC²
  )
} ↔

proof Square_Lesser_Segment_EMSR() {
  setVar(AB: Line, C: Point) →
  assume(IsEMSR(AB,C)) →
  let(AC = GreaterSegment(AB,C),
      D = Midpoint(AC)) →
  
  construct(AE: Square(AB)) →
  
  assert(AC = 2⋅DC) →
  assert(AC² = 4⋅DC²) →
  assert(RS = 4⋅FG) →
  
  lemma EMSR_Definition() {
    assert(AB⋅BC = AC²) ∧
    assert(CE = AB⋅BC) →
    conclude(CE = RS)
  } →
  
  apply(EMSR_Definition()) →
  assert(CE = 4⋅FG) →
  
  lemma Midpoint_Properties() {
    assert(AD = DC) →
    assert(HK = KF) →
    assert(GF = HL) →
    assert(GK = KL) →
    assert(MN = NE) →
    assert(MF = CG) →
    assert(CG = FE)
  } →
  
  apply(Midpoint_Properties()) →
  assert(CG + CN = FE + CN) →
  assert(Gnomon(OPQ) = Rectangle(CE)) →
  assert(CE = 4⋅GF) →
  assert(OPQ = 4⋅GF) →
  assert(OPQ + FG = 5⋅GF) →
  
  lemma Final_Equalities() {
    assert(OPQ + FG = DN) ∧
    assert(DN = BD²) ∧
    assert(GF = DC²)
  } →
  
  apply(Final_Equalities()) →
  conclude(BD² = 5⋅DC²)
}