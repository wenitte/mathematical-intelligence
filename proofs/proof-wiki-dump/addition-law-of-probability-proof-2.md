theorem Addition_Law_Of_Probability() {
  assert(
    ∀(A,B: Set) ⇒ Pr(A ∪ B) = Pr(A) + Pr(B) - Pr(A ∩ B)
  )
} ↔

proof Addition_Law_Of_Probability() {
  lemma Set_Partition() {
    assert(
      A = (A\B) ∪ (A∩B) ∧
      B = (B\A) ∪ (A∩B) ∧
      (A\B) ∩ (A∩B) = ∅ ∧
      (B\A) ∩ (A∩B) = ∅
    )
  } →

  lemma Set_Disjoint() {
    assert((A\B) ∩ (B\A) = ∅)
  } →

  apply(Set_Partition()) →
  assert(
    Pr(A) = Pr(A\B) + Pr(A∩B) ∧
    Pr(B) = Pr(B\A) + Pr(A∩B)
  ) →

  assert(
    Pr(A) + Pr(B) = Pr(A\B) + 2Pr(A∩B) + Pr(B\A)
  ) →

  lemma Union_Partition() {
    assert(
      A ∪ B = (A\B) ∪ (A∩B) ∪ (B\A)
    )
  } →

  apply(Union_Partition()) →
  assert(
    Pr(A\B) + 2Pr(A∩B) + Pr(B\A) = 
    Pr((A\B) ∪ (A∩B) ∪ (B\A)) + Pr(A∩B)
  ) →

  assert(
    Pr((A\B) ∪ (A∩B) ∪ (B\A)) = Pr(A ∪ B)
  ) →

  assert(
    Pr(A) + Pr(B) = Pr(A ∪ B) + Pr(A∩B)
  ) →

  assert(
    Pr(A ∪ B) = Pr(A) + Pr(B) - Pr(A∩B)
  )
}