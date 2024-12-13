theorem Square_Greater_Segment_EMR() {
  assert(
    ∀AB∈Line, ∃C∈AB : IsEMRPoint(C, AB) ∧
    let AC = GreaterSegment(AB, C) ∧
    let AD = AB/2 ∧
    let CD = ExtendedLine(C, D) →
    CD² = 5·AD²
  )
} ↔

proof Square_Greater_Segment_EMR() {
  setVar(AB: Line, C: Point) →
  assume(IsEMRPoint(C, AB)) →
  construct(
    AD = AB/2,
    AE = Square(AB),
    DF = Square(CD),
    FC_extended = Line(F, G)
  ) →
  
  lemma EMR_Property() {
    assert(AB·BC = AC²) by(
      apply(Book6.Prop17_ProportionalLines) ∧
      apply(Book6.Def3_EMR)
    )
  } →
  
  assert(CE = FH) by(
    CE = AB·BC ∧
    FH = AC² ∧
    apply(EMR_Property())
  ) →
  
  assert(KA = 2·AH) by(
    BA = 2·AD ∧
    BA = KA ∧
    AD = AH
  ) →
  
  assert(CK = 2·CH) by(
    apply(Book6.Prop1_ProportionalAreas, [KA:AH = CK:CH]) ∧
    prev(KA = 2·AH)
  ) →
  
  assert(KC = LH + HC) by(
    LH + HC = 2·CH ∧
    prev(CK = 2·CH)
  ) →
  
  assert(AE = Gnomon(MNO)) by(
    CE = HF
  ) →
  
  assert(AE = 4·DH) by(
    BA = 2·AD →
    BA² = 4·AD²
  ) →
  
  assert(DF = 5·AP) by(
    MNO = 4·AP ∧
    prev(AE = Gnomon(MNO)) ∧
    prev(AE = 4·DH)
  ) →
  
  conclude(CD² = 5·AD²) by(
    DF = Square(CD) ∧
    AP = Square(AD) ∧
    prev(DF = 5·AP)
  )
}