theorem AnglesCirclesRatio() {
  assert(
    ∀C1,C2 ∈ Circles: radius(C1) = radius(C2) ⇒
    ∀arc1 ∈ C1, arc2 ∈ C2,
    ∀θ1c,θ2c ∈ CenterAngles(C1,C2),
    ∀θ1p,θ2p ∈ CircumferenceAngles(C1,C2) ⇒
    [arc1:arc2 = θ1c:θ2c = θ1p:θ2p]
  )
}

proof AnglesCirclesRatio() {
  setVar(
    ABC,DEF: Circle,
    G,H: Point | G = center(ABC) ∧ H = center(DEF),
    BGC,EHF: CenterAngle,
    BAC,EDF: CircumferenceAngle
  ) →

  lemma EqualArcsEqualAngles() {
    assert(
      ∀arc1,arc2 ∈ Circle: arc1 = arc2 ⇒
      centerAngle(arc1) = centerAngle(arc2)
    )
  } →

  defineSequence(
    CK,KL: Arc | CK = BC ∧ KL = BC,
    FM,MN: Arc | FM = EF ∧ MN = EF
  ) →

  apply(EqualArcsEqualAngles()) →
  assert(BGC = CGK = KGL) →

  lemma MultipleRatio() {
    assert(
      ∀n ∈ ℕ:
      length(BL) = n×length(BC) ⇔
      angle(BGL) = n×angle(BGC)
    )
  } →

  lemma AngleArcComparison() {
    assert(
      BL = EN ⇔ BGL = EHN ∧
      BL > EN ⇔ BGL > EHN ∧
      BL < EN ⇔ BGL < EHN
    )
  } →

  apply(Book5.Definition5.EqualityRatios()) →
  assert(BC:EF = BGL:EHF) →

  apply(InscribedAngleTheorem()) →
  assert(BGC:EHF = BAC:DEF) →

  conclude(BC:EF = BGC:EHF = BAC:DEF)
}