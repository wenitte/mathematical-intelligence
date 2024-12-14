theorem Equal_Angles_Elevated_Lines() {
  assert(
    ∀ BAC, EDF, AG, DM ∈ Angles ∧
    ∀ G, M, L, N ∈ Points ∧
    angle(BAC) = angle(EDF) ∧
    angle(MDE) = angle(GAB) ∧
    angle(MDF) = angle(GAC) ∧
    perpendicular(GL, plane(BAC)) ∧
    perpendicular(MN, plane(EDF)) 
    ⇒ angle(GAL) = angle(MDN)
  )
} ↔

proof Equal_Angles_Elevated_Lines() {
  setVar(AH = DM) →
  assert(parallel(HK, GL)) →
  
  lemma Perpendicular_Parallel() {
    assert(
      perpendicular(GL, plane(BAC)) ∧ 
      parallel(HK, GL) 
      ⇒ perpendicular(HK, plane(BAC))
    )
  } →
  
  setVar(perpendiculars = {KN⊥AC, NF⊥DF, KB⊥AB, NE⊥DE}) →
  
  lemma Pythagoras_Application() {
    assert(
      HA² = HK² + KA² ∧
      KA² = KC² + CA² 
      ⇒ HA² = HK² + KC² + CA² ∧
      HC² = HK² + KC² 
      ⇒ HA² = HC² + CA²
    )
  } →
  
  lemma Right_Angle_Deduction() {
    assert(
      HA² = HC² + CA² 
      ⇒ angle(HCA) = 90° ∧
      angle(DFM) = 90°
    )
  } →
  
  assert(angle(HCA) = angle(DFM)) →
  assert(angle(HAC) = angle(MDF)) →
  
  apply(Triangle_SAA_Congruence()) →
  assert(AC = DF ∧ AB = DE) →
  
  apply(Triangle_SAS_Congruence()) →
  assert(
    triangle(CAB) = triangle(FDE) ∧
    angle(ACB) = angle(DFE)
  ) →
  
  assert(
    angle(ACK) = angle(DFN) = 90° ∧
    angle(BCK) = angle(EFN) ∧
    angle(CBK) = angle(FEN)
  ) →
  
  apply(Triangle_SSS_Congruence()) →
  assert(
    AH = MD ∧
    AK = DN ∧
    HK = MN 
    ⇒ angle(HAK) = angle(MDN)
  )
}