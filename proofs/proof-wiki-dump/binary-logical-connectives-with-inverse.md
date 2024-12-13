theorem Binary_Logical_Connectives_With_Inverse() {
  assert(
    ∀(○: BinaryConnective) ∃(∗: BinaryConnective) [
      (∀p,q ∈ {F,T}: ((p ○ q) ∗ q ↔ p) ∧ (q ∗ (p ○ q) ↔ p)] ↔
      [○ = XOR ∨ ○ = BICOND]
    ]
  )
}

proof Binary_Logical_Connectives_With_Inverse() {
  // Necessary Condition
  setVar(○: BinaryConnective) →
  assume(∃(∗: BinaryConnective)(∀p,q ∈ {F,T}: (p ○ q) ∗ q = p)) →
  
  lemma Eliminate_Constant_Output() {
    assert(∀q ∈ {F,T}: F ○ q ≠ T ○ q) →
    eliminate(fT) ∧ eliminate(fF)
  } →

  lemma Eliminate_OR_Like() {
    assert(∀q ∈ {F,T}: p ○ q ≠ const) →
    eliminate(OR) ∧ eliminate(IMPLIES) ∧ 
    eliminate(IMPLIED_BY) ∧ eliminate(AND)
  } →

  lemma Eliminate_Fixed_Output() {
    assert(∀p ∈ {F,T}: (p ○ q)|q=F ≠ (p ○ q)|q=T) →
    eliminate(PR1) ∧ eliminate(PR2) ∧
    eliminate(NOT_PR1) ∧ eliminate(NOT_PR2)
  } →

  assert(RemainingCandidates = {XOR, BICOND}) →

  // Sufficient Condition
  lemma XOR_Has_Inverse() {
    apply(XOR_Is_Self_Inverse) →
    assert(∀p,q ∈ {F,T}: (p XOR q) XOR q ↔ p)
  } →

  lemma BICOND_Has_Inverse() {
    apply(BICOND_Is_Self_Inverse) →
    assert(∀p,q ∈ {F,T}: (p BICOND q) BICOND q ↔ p)
  } →

  conclude(
    ○ ∈ {XOR, BICOND} ↔ 
    ∃(∗: BinaryConnective)(∀p,q ∈ {F,T}: (p ○ q) ∗ q ↔ p)
  )
}