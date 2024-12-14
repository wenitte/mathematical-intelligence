theorem Homeomorphic_Spaces_Sufficient() {
  assert(
    ∀T₁(S₁,τ₁) ∈ TopologicalSpace ∧
    ∀S₂ ∈ Set ∧
    ∀τ₂ ⊆ 𝒫(S₂) ∧
    ∃f: S₁ → S₂ [
      isBijection(f) ∧
      isSurjection(f→|τ₁, τ₁, τ₂)
    ] ⇒
    isHomeomorphic(T₁, (S₂,τ₂))
  )
} ↔

proof Homeomorphic_Spaces_Sufficient() {
  assume(premises) →
  
  lemma DirectImageBijective() {
    assert(isBijection(f) ⇒ isBijection(f→))
  } →
  
  lemma Topology_Axioms() {
    // O1: Union of Open Sets
    assert(
      ∀{Vᵢ: i ∈ I} ⊆ τ₂ ∃{Uᵢ: i ∈ I} ⊆ τ₁ [
        (∀i ∈ I: f→(Uᵢ) = Vᵢ) ∧
        (⋃ᵢ∈ᵢ Uᵢ ∈ τ₁) ∧
        (⋃ᵢ∈ᵢ Vᵢ = f→(⋃ᵢ∈ᵢ Uᵢ)) ∧
        (⋃ᵢ∈ᵢ Vᵢ ∈ τ₂)
      ]
    ) →
    
    // O2: Intersection of Open Sets
    assert(
      ∀V₁,V₂ ∈ τ₂ ∃U₁,U₂ ∈ τ₁ [
        f→(U₁) = V₁ ∧
        f→(U₂) = V₂ ∧
        (U₁ ∩ U₂ ∈ τ₁) ∧
        (V₁ ∩ V₂ = f→(U₁ ∩ U₂)) ∧
        (V₁ ∩ V₂ ∈ τ₂)
      ]
    ) →
    
    // O3: Whole Space is Open
    assert(
      S₁ ∈ τ₁ ∧
      S₂ = f→(S₁) ∧
      S₂ ∈ τ₂
    )
  } →
  
  lemma OpenMapping() {
    assert(
      ∀U ∈ τ₁: f→(U) ∈ τ₂
    )
  } →
  
  lemma ContinuousMapping() {
    assert(
      isBijection(f→) ∧
      isBijection(f→|τ₁) ⇒
      isBijection((f→)⁻¹|τ₂) ∧
      ∀V ∈ τ₂: f⁻¹(V) ∈ τ₁
    )
  } →
  
  apply(Topology_Axioms()) →
  apply(OpenMapping()) →
  apply(ContinuousMapping()) →
  
  assert(
    isTopologicalSpace((S₂,τ₂)) ∧
    isHomeomorphism(f) ∧
    isHomeomorphic(T₁, (S₂,τ₂))
  )
}