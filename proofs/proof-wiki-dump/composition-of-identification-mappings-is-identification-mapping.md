theorem Composition_Identification_Mappings() {
  define(T₁ := (S₁, τ₁): TopologicalSpace) ∧
  define(S₂, S₃: Set) ∧
  define(f₁: S₁ → S₂) ∧
  define(f₂: S₂ → S₃) ∧
  define(τ₂ := identification_topology(S₂, f₁, τ₁)) ∧
  define(τ₃ := identification_topology(S₃, f₂, τ₂)) ∧
  define(φ := f₂ ∘ f₁) →
  assert(
    is_identification_mapping(φ)
  )
} ↔

proof Composition_Identification_Mappings() {
  setVar(V ⊆ S₃) →
  assert(
    V ∈ τ₃ ↔ f₂⁻¹[V] ∈ τ₂
  ) by(identification_mapping_def(f₂)) →
  assert(
    f₂⁻¹[V] ∈ τ₂ ↔ f₁⁻¹[f₂⁻¹[V]] ∈ τ₁
  ) by(identification_mapping_def(f₁)) →
  lemma Preimage_Composite() {
    assert(
      f₁⁻¹[f₂⁻¹[V]] = (f₂ ∘ f₁)⁻¹[V] = φ⁻¹[V]
    )
  } →
  apply(Preimage_Composite()) →
  assert(
    V ∈ τ₃ ↔ φ⁻¹[V] ∈ τ₁
  ) by(transitive_equivalence()) →
  conclude(
    is_identification_mapping(φ)
  )
}