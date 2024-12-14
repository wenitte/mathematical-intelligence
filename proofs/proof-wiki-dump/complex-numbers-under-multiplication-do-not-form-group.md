theorem Complex_Mult_Not_Group() {
  assert(
    ¬(〈ℂ,×〉 is_group)
  )
} ↔

proof Complex_Mult_Not_Group() {
  assume(〈ℂ,×〉 is_group) →
  setDef(0 ∈ ℂ) →
  assert(∀x ∈ ℂ: x × 0 = 0 ∧ 0 × x = 0) →
  assert(0 is_zero_element) →
  
  lemma Group_With_Zero_Is_Trivial() {
    assert(
      G is_group ∧ G has_zero_element → G is_trivial_group
    )
  } →
  
  apply(Group_With_Zero_Is_Trivial()) →
  assert(〈ℂ,×〉 is_trivial_group) →
  assert(∃z ∈ ℂ: z ≠ 0) →
  assert(contradiction: 〈ℂ,×〉 is_trivial_group ∧ ∃z ∈ ℂ: z ≠ 0) →
  conclude(¬(〈ℂ,×〉 is_group))
}