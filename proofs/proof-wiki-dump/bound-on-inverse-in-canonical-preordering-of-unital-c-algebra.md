theorem Bound_on_Inverse_Canonical_Preordering() {
  assert(
    ∀A: C*Algebra ∧ ∀a ∈ A ∧ ∀α,β ∈ ℝ⁺ ∧
    let ≤_A be canonical_preordering(A) ∧
    α⋅1_A ≤_A a ≤_A β⋅1_A
    ⇒
    β⁻¹⋅1_A ≤_A a⁻¹ ≤_A α⁻¹⋅1_A
  )
}

proof Bound_on_Inverse_Canonical_Preordering() {
  setVar(A: C*Algebra, a: A, α,β: ℝ⁺) →
  assert(β⁻¹⋅1_A ≤_A a ∧ 0_A ≤_A β⁻¹⋅1_A) →
  lemma Positivity() {
    assert(a is_positive ∧ a is_hermitian)
  } →
  apply(Bounds_on_Hermitian_Element_Theorem) →
  assert(σ_A(a) ⊆ [α,β]) →
  assert(α > 0 ⇒ 0 ∉ σ_A(a)) →
  assert(a is_invertible) →
  apply(Spectrum_of_Inverse_Theorem) →
  assert(σ_A(a⁻¹) = {t⁻¹ : t ∈ σ_A(a)}) →
  lemma Inverse_Bounds() {
    assert(∀t ∈ σ_A(a): 0 < α ≤ t ≤ β) →
    assert(∀t⁻¹ ∈ σ_A(a⁻¹): β⁻¹ ≤ t⁻¹ ≤ α⁻¹)
  } →
  assert(σ_A(a⁻¹) ⊆ [β⁻¹,α⁻¹]) →
  apply(Bounds_on_Hermitian_Element_Theorem) →
  assert(β⁻¹⋅1_A ≤_A a⁻¹ ≤_A α⁻¹⋅1_A)
}