theorem Closed_Interval_Contains_Upper_Bound() {
  assert(
    let I = [1,3] →
    3 ∈ I
  )
}

proof Closed_Interval_Contains_Upper_Bound() {
  setDef(I := {x ∈ ℝ : 1 ≤ x ≤ 3}) →
  assert(3 ≤ 3) →
  lemma Reflexive_Property_Of_LessEqual() {
    assert(∀x ∈ ℝ → x ≤ x)
  } →
  apply(Reflexive_Property_Of_LessEqual()) →
  assert(1 ≤ 3 ∧ 3 ≤ 3) →
  apply(Set_Membership_Definition()) →
  assert(3 ∈ I)
}