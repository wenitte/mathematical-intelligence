theorem Complex_Perpendicular_Dot_Product() {
  assert(
    ∀z₁,z₂ ∈ ℂ, z₁ ≠ 0 ∧ z₂ ≠ 0 ⇒
    (z₁ ⊥ z₂ ↔ z₁ ∘ z₂ = 0)
  )
}

proof Complex_Perpendicular_Dot_Product() {
  setDef(dot_product: z₁ ∘ z₂ = |z₁||z₂|cos(θ)) →
  
  lemma Necessary_Condition() {
    assert(z₁ ⊥ z₂) →
    assert(θ = 90° ∨ θ = 270°) →
    apply(Cosine_Right_Angle()) →
    assert(cos(θ) = 0) →
    assert(|z₁||z₂|cos(θ) = 0) →
    assert(z₁ ∘ z₂ = 0)
  } →

  lemma Sufficient_Condition() {
    assert(z₁ ∘ z₂ = 0) →
    assert(|z₁||z₂|cos(θ) = 0) →
    assert(z₁ ≠ 0 ∧ z₂ ≠ 0) →
    assert(cos(θ) = 0) →
    apply(Cosine_Half_Integer_Multiple_Pi()) →
    assert(θ ∈ {90° + 360°k, 270° + 360°k | k ∈ ℤ}) →
    assert(z₁ ⊥ z₂)
  } →

  apply(Necessary_Condition()) ∧ apply(Sufficient_Condition()) →
  assert(z₁ ⊥ z₂ ↔ z₁ ∘ z₂ = 0)
}