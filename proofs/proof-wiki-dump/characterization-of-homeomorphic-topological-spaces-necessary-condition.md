theorem Homeomorphic_Spaces_Necessary() {
  assert(
    ∀T₁(S₁,τ₁) ∈ TopologicalSpace,
    ∀S₂ ∈ Set,
    ∀τ₂ ⊆ 𝒫(S₂),
    IsHomeomorphic((S₂,τ₂), T₁) ⇒
    ∃f: S₁ → S₂ [
      IsBijection(f) ∧
      IsBijection(f→|τ₁: τ₁ → τ₂)
    ]
  )
}

proof Homeomorphic_Spaces_Necessary() {
  setVar(f: S₁ → S₂, IsHomeomorphism(f)) →
  
  assert(
    IsHomeomorphism(f) ↔ 
    [IsBijection(f) ∧ IsOpen(f) ∧ IsContinuous(f)]
  ) →

  lemma OpenMapping() {
    assert(
      IsOpen(f) ↔ 
      ∀U ∈ τ₁[f→(U) ∈ τ₂]
    )
  } →

  lemma ContinuousMapping() {
    assert(
      IsContinuous(f) ↔
      ∀V ∈ τ₂[f⁻¹(V) ∈ τ₁]
    )
  } →

  lemma ImagePreimageEquality() {
    assert(
      ∀V ∈ τ₂[
        f→(f⁻¹(V)) =
        (f ∘ f⁻¹)(V) =
        V
      ]
    )
  } →

  apply(OpenMapping()) →
  apply(ContinuousMapping()) →
  apply(ImagePreimageEquality()) →
  
  assert(
    IsSurjection(f→|τ₁: τ₁ → τ₂)
  )
}