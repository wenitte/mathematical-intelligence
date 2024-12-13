theorem Algebra_of_Sets_Closed_under_Set_Difference() {
  assert(
    ∀S: Set ∧ ∀ℜ: AlgebraOfSets(S) ⇒
    ∀A,B ∈ ℜ ⇒ (A \ B) ∈ ℜ
  )
}

proof Algebra_of_Sets_Closed_under_Set_Difference() {
  // Proof 1 via Ring of Sets definition
  setVar(S: Set) →
  setVar(ℜ: AlgebraOfSets(S)) →
  assert(ℜ isRingOfSetsWithUnit) →
  apply(RingOfSets_Definition2) →
  assert(∀A,B ∈ ℜ ⇒ (A \ B) ∈ ℜ)

  // Alternative Proof 2 via complement and intersection
  lemma AlgebraOfSets_Property() {
    assert(∀A ∈ ℜ ⇒ RelativeComplement(S,A) ∈ ℜ)
  } →
  
  setVar(A,B ∈ ℜ) →
  assert(RelativeComplement(S,B) ∈ ℜ) →
  assert(A ∩ RelativeComplement(S,B) ∈ ℜ) →
  apply(SetDifference_Definition) →
  assert(A \ B = A ∩ RelativeComplement(S,B)) →
  assert(A \ B ∈ ℜ)
}