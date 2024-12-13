theorem Rationals_Normal_Subgroup_Of_Reals() {
  assert(
    let G₁ = ⟨ℚ,+⟩ ∧
    let G₂ = ⟨ℝ,+⟩ ∧
    (G₁ ▹ G₂)
  )
} ↔

proof Rationals_Normal_Subgroup_Of_Reals() {
  setDef(ℝ) →
  assert(ℚ ⊆ ℝ) →
  
  lemma IsSubgroup() {
    assert(
      ⟨ℝ,+⟩ is_group ∧
      ⟨ℚ,+⟩ is_group
    ) →
    assert(⟨ℚ,+⟩ ≤ ⟨ℝ,+⟩)
  } →
  
  lemma AbelianGroupProperty() {
    assert(⟨ℝ,+⟩ is_abelian) →
    apply(Subgroup_Of_Abelian_Is_Normal) →
    assert(∀H ≤ G: G is_abelian → H ▹ G)
  } →
  
  apply(IsSubgroup()) →
  apply(AbelianGroupProperty()) →
  assert(⟨ℚ,+⟩ ▹ ⟨ℝ,+⟩)
}