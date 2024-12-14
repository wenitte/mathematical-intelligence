theorem Complement_Preimage() {
  let(f: S → T) ∧
  let(T₁ ⊆ T) →
  assert(
    ∀T₁ ∈ 𝒫(T) ⇒ ℂₛ(f⁻¹[T₁]) = f⁻¹[ℂₜ(T₁)]
  )
} ↔

proof Complement_Preimage() {
  lemma Set_Diff_Image() {
    assert(
      ∀S₁ ⊆ S, ∀R ⊆ T × S →
      ℂᵢₘₐₑᵣ(R[S₁]) = R[ℂₛ(S₁)]
    )
  } →
  
  lemma Preimage_Domain() {
    assert(Preimg(f) = S)
  } →
  
  setVar(f⁻¹: T → S) →
  assert(f⁻¹ ∈ one_to_many_relation) →
  
  apply(Set_Diff_Image()) →
  assert(ℂₚᵣₑᵢₘₐₑf(f⁻¹[T₁]) = f⁻¹[ℂₜ(T₁)]) →
  
  apply(Preimage_Domain()) →
  assert(ℂₛ(f⁻¹[T₁]) = f⁻¹[ℂₜ(T₁)]) →
  
  conclude(
    ∀T₁ ∈ 𝒫(T) ⇒ ℂₛ(f⁻¹[T₁]) = f⁻¹[ℂₜ(T₁)]
  )
}