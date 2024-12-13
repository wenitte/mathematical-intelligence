theorem Alternate_Ratios_Equal_Fractions() {
  assert(
    ∀A,BC,D,EF ∈ ℕ⁺ ⇒
    (isAliquotPart(A,BC) ∧ isAliquotPart(D,EF) ∧ 
     sameAliquotPart(A,BC,D,EF)) →
    (∀k ∈ ℚ⁺ ⇒ 
     (isAliquotOrAliquantPart(A,D,k) ↔ isAliquotOrAliquantPart(BC,EF,k)))
  )
} ↔

proof Alternate_Ratios_Equal_Fractions() {
  setVar(A,BC,D,EF: ℕ⁺) →
  assert(isAliquotPart(A,BC) ∧ isAliquotPart(D,EF)) →
  assert(sameAliquotPart(A,BC,D,EF)) →
  
  lemma Equal_Divisions() {
    assert(
      ∃BG,GC,EH,HF ∈ ℕ⁺ ⇒
      (BC = BG + GC ∧ EF = EH + HF ∧
       BG = A ∧ EH = D ∧
       BG = GC ∧ EH = HF)
    )
  } →
  
  apply(Equal_Divisions()) →
  assert(count(divisions(BC,A)) = count(divisions(EF,D))) →
  
  lemma Part_Equality() {
    assert(
      ∀k ∈ ℚ⁺ ⇒
      (isAliquotOrAliquantPart(BG,EH,k) ↔ isAliquotOrAliquantPart(GC,HF,k))
    )
  } →
  
  apply(Euclid_VII_5()) →
  apply(Euclid_VII_6()) →
  assert(
    ∀k ∈ ℚ⁺ ⇒
    (isAliquotOrAliquantPart(BG,EH,k) ↔ isAliquotOrAliquantPart(BC,EF,k))
  ) →
  
  assert(BG = A ∧ EH = D) →
  conclude(
    ∀k ∈ ℚ⁺ ⇒
    (isAliquotOrAliquantPart(A,D,k) ↔ isAliquotOrAliquantPart(BC,EF,k))
  )
}