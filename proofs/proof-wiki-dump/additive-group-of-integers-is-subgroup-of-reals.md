theorem Integers_Subgroup_of_Reals() {
  assert(
    ⟨ℤ,+⟩ ⊆ ⟨ℝ,+⟩ ∧
    isSubgroup(⟨ℤ,+⟩, ⟨ℝ,+⟩)
  )
} ↔

proof Integers_Subgroup_of_Reals() {
  lemma Integers_Subgroup_of_Rationals() {
    assert(
      isSubgroup(⟨ℤ,+⟩, ⟨ℚ,+⟩)
    )
  } →
  
  lemma Rationals_Subgroup_of_Reals() {
    assert(
      isSubgroup(⟨ℚ,+⟩, ⟨ℝ,+⟩)
    )
  } →
  
  apply(Integers_Subgroup_of_Rationals()) →
  apply(Rationals_Subgroup_of_Reals()) →
  
  assert(
    isSubgroup(⟨ℤ,+⟩, ⟨ℚ,+⟩) ∧
    isSubgroup(⟨ℚ,+⟩, ⟨ℝ,+⟩) →
    isSubgroup(⟨ℤ,+⟩, ⟨ℝ,+⟩)
  )
}