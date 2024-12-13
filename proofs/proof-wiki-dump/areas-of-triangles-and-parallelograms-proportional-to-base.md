theorem Areas_Proportional_Base() {
  assert(
    ∀(ABC, ACD: Triangle) ∧ ∀(EC, CF: Parallelogram) ∧
    (height(ABC) = height(ACD)) ∧ (height(EC) = height(CF)) ⇒
    (length(AC)/length(CD) = area(ABC)/area(ACD) = area(EC)/area(CF))
  )
} ↔

proof Areas_Proportional_Base() {
  setVar(
    H,L,B,D,G,K: Point,
    BD: Line
  ) →
  construct(
    extend(BD, H, L) ∧
    segments(BG = BC) ∧ segments(GH = BC) ∧
    segments(DK = CD) ∧ segments(KL = CD) ∧
    lines(AG, AH, AK, AL)
  ) →
  
  lemma Equal_Base_Equal_Area() {
    assert(
      (CB = BG = GH) ⇒ area(ABC) = area(AGB) = area(AHG)
    )
  } →
  
  lemma Base_Multiple() {
    assert(
      (HC/BC = n) ⇒ (area(AHC)/area(ABC) = n)
    )
  } →
  
  lemma Height_Comparisons() {
    assert(
      (HC > CL ⇒ area(AHC) > area(ACL)) ∧
      (HC = CL ⇒ area(AHC) = area(ACL)) ∧
      (HC < CL ⇒ area(AHC) < area(ACL))
    )
  } →
  
  apply(Book_V_Def_5_Ratio_Equality()) →
  assert(length(BC)/length(CD) = area(ABC)/area(ACD)) →
  
  lemma Parallelogram_Double() {
    assert(
      area(EC) = 2*area(ABC) ∧
      area(CF) = 2*area(ACD)
    )
  } →
  
  apply(Ratio_Equals_Multiples()) →
  assert(area(ABC)/area(ACD) = area(EC)/area(CF)) →
  
  apply(Ratio_Transitivity()) →
  assert(length(AC)/length(CD) = area(ABC)/area(ACD) = area(EC)/area(CF))
}