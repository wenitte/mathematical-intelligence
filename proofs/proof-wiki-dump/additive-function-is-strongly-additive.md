theorem Additive_Is_Strongly_Additive() {
  assert(
    ∀S: Algebra(sets) ∧
    ∀f: (S → ℝ̄) ∧ 
    isAdditive(f) ⇒
    isStronglyAdditive(f) ∧
    ∀A,B ∈ S: f(A ∪ B) + f(A ∩ B) = f(A) + f(B)
  )
}

proof Additive_Is_Strongly_Additive() {
  setVar(S: Algebra, f: S → ℝ̄, A,B ∈ S) →
  
  lemma Partition_Decomposition() {
    assert(
      A = (A\B) ∪ (A∩B) ∧
      B = (B\A) ∪ (A∩B) ∧
      (A\B) ∩ (B\A) = ∅
    )
  } →

  apply(isAdditive(f)) →
  assert(
    f(A) = f(A\B) + f(A∩B) ∧
    f(B) = f(B\A) + f(A∩B)
  ) →

  lemma Well_Defined() {
    assert(isWellDefined(f(A) + f(B)))
  } →

  assert(
    f(A) + f(B) = 
    f(A\B) + 2f(A∩B) + f(B\A)
  ) →

  lemma Union_Partition() {
    assert(
      (A\B) ∪ (A∩B) ∪ (B\A) = A ∪ B
    )
  } →

  apply(isAdditive(f)) →
  assert(
    f(A\B) + 2f(A∩B) + f(B\A) =
    f(A ∪ B) + f(A ∩ B)
  ) →

  conclude(
    f(A ∪ B) + f(A ∩ B) = f(A) + f(B)
  )
}