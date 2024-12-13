theorem Alternate_Ratios_of_Multiples() {
  assert(
    ∀A,BC,D,EF ∈ ℕ⁺ ⇒ 
    (A is_unit ∧ A measures BC ∧ D measures EF same_times_as(A,BC)) ⇒
    (A measures D same_times_as BC measures EF)
  )
} ↔

proof Alternate_Ratios_of_Multiples() {
  setVar(A: unit_number) →
  setVar(BC,D,EF: ℕ⁺) →
  assume(A measures BC ∧ D measures EF same_times_as(A,BC)) →
  
  lemma Units_Division() {
    assert(BC = BG + GH + HC) ∧
    assert(BG = GH = HC = A) ∧
    assert(EF = EK + KL + LF) ∧
    assert(EK = KL = LF = D)
  } →
  
  apply(Units_Division()) →
  assert(count(BG,GH,HC) = count(EK,KL,LF)) →
  
  lemma Equal_Ratios() {
    assert(BG:EK = GH:KL = HC:LF) ∧
    assert(BG = A ∧ EK = D)
  } →
  
  apply(Book_VII_Prop_12("Ratios_Distributive_Over_Addition")) →
  assert(BG:EK = (BG+GH+HC):(EK+KL+LF)) →
  assert(BG:EK = BC:EF) →
  
  apply(Equal_Ratios()) →
  assert(A:D = BC:EF) →
  
  conclude(A measures D same_times_as BC measures EF)
}