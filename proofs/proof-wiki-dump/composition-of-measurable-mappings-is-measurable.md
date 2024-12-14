theorem Composition_of_Measurable_Mappings() {
  assert(
    ∀X₁,X₂,X₃,Σ₁,Σ₂,Σ₃ ⇒
    (isMeasurableSpace(⟨X₁,Σ₁⟩) ∧
     isMeasurableSpace(⟨X₂,Σ₂⟩) ∧
     isMeasurableSpace(⟨X₃,Σ₃⟩)) ∧
    (f: X₁ → X₂ is Σ₁/Σ₂-measurable) ∧
    (g: X₂ → X₃ is Σ₂/Σ₃-measurable) ⇒
    (g ∘ f: X₁ → X₃ is Σ₁/Σ₃-measurable)
  )
} ↔

proof Composition_of_Measurable_Mappings() {
  setVar(E₃ ∈ Σ₃) →
  assert(g⁻¹(E₃) ∈ Σ₂) by(g_measurable) →
  assert(f⁻¹(g⁻¹(E₃)) ∈ Σ₁) by(f_measurable) →
  
  lemma Composition_Inverse() {
    assert((g ∘ f)⁻¹(E₃) = f⁻¹(g⁻¹(E₃)))
  } →
  
  apply(Composition_Inverse()) →
  assert((g ∘ f)⁻¹(E₃) ∈ Σ₁) →
  assert(∀E₃ ∈ Σ₃ ⇒ (g ∘ f)⁻¹(E₃) ∈ Σ₁) →
  conclude(g ∘ f is Σ₁/Σ₃-measurable)
}