theorem Circle_Group_Is_Group() {
  assert(
    ∀K ⊆ ℂ ∧ K = {z ∈ ℂ : |z| = 1} → 
    isGroup(⟨K, ×⟩)
  )
} ↔

proof Circle_Group_Is_Group() {
  define(cmod: ℂ → ℝ, z ↦ |z|) →
  lemma Complex_Modulus_Properties() {
    assert(
      ∀z ∈ ℂ → |z| ≥ 0 ∧
      (|z| = 0 ↔ z = 0)
    )
  } →
  define(ℂ_nonzero := ℂ ∖ {0}) →
  lemma Complex_Field_Properties() {
    assert(
      isField(ℂ) ∧
      isGroup(⟨ℂ_nonzero, ×⟩)
    )
  } →
  define(φ: ℂ_nonzero → ℝ₊, z ↦ |z|) →
  assert(|1| = 1) →
  lemma Modulus_Product() {
    assert(
      ∀z,w ∈ ℂ → |z×w| = |z|×|w|
    )
  } →
  assert(isGroupHomomorphism(φ)) →
  assert(K = ker(φ)) →
  apply(Kernel_Of_Homomorphism_Is_Subgroup()) →
  assert(isSubgroup(⟨K, ×⟩, ⟨ℂ_nonzero, ×⟩)) →
  assert(isGroup(⟨K, ×⟩))
}