theorem CharacterizationHilbertSequenceSpace() {
  assert(
    ∀α(CardinalNumber(α) ∧ Infinite(α)) ∧
    ∃I(|I| = α) ∧
    let(H^α = ⟨A, d_2⟩) ∧
    let(A = {x: I → ℝ | (|{i ∈ I: x_i ≠ 0}| ≤ ℵ₀) ∧ (∑_{i∈I} x_i² converges)}) ∧
    let(H = ⟨ℓ², d_ℓ²⟩) ∧
    ∀x₁,...,xₘ: I → ℝ
  ) ⇒ (
    (x₁,...,xₘ ∈ A) ↔
    ∃{j₀,j₁,j₂,...} ⊆ I(
      Countable({j₀,j₁,j₂,...}) ∧
      ∀k∈[1,m](
        {i ∈ I: (xₖ)ᵢ ≠ 0} ⊆ {j₀,j₁,j₂,...} ∧
        ⟨(xₖ)ⱼₙ⟩ ∈ ℓ² ∧
        ∑_{i∈I} (xₖ)ᵢ² = ∑_{n=0}^∞ (xₖ)ⱼₙ²
      )
    )
  )
}

proof CharacterizationHilbertSequenceSpace() {
  // Necessary Condition
  setVar(x₁,...,xₘ ∈ A) →
  assert(∀k∈[1,m]({i ∈ I: (xₖ)ᵢ ≠ 0} is countable)) →
  lemma CountableSubset() {
    assert(∃I'⊆I(|I'| = ℵ₀))
  } →
  setVar(J = I' ∪ ⋃_{k=1}^m {i ∈ I: (xₖ)ᵢ ≠ 0}) →
  apply(CountableUnion()) →
  assert(|J| = ℵ₀) →
  setVar({j₀,j₁,j₂,...} = enum(J)) →
  assert(∀k∈[1,m]({i ∈ I: (xₖ)ᵢ ≠ 0} ⊆ {j₀,j₁,j₂,...})) →
  
  // Series Equality Chain
  assert(∀k∈[1,m](
    ∑_{i∈I} (xₖ)ᵢ² =
    ∑_{i∈I} |(xₖ)ᵢ²| =
    ∑_{n=0}^∞ |(xₖ)ⱼₙ²| =
    ∑_{n=0}^∞ (xₖ)ⱼₙ²
  )) →
  assert(∀k∈[1,m](⟨(xₖ)ⱼₙ⟩ ∈ ℓ²))
  
  // Sufficient Condition
  setVar({j₀,j₁,j₂,...} ⊆ I ∧ |{j₀,j₁,j₂,...}| = ℵ₀) →
  assert(∀k∈[1,m](
    {i ∈ I: (xₖ)ᵢ ≠ 0} ⊆ {j₀,j₁,j₂,...} ∧
    ⟨(xₖ)ⱼₙ⟩ ∈ ℓ²
  )) →
  assert(∀k∈[1,m](∑_{n=0}^∞ (xₖ)ⱼₙ² < ∞)) →
  assert(∀k∈[1,m](
    ∑_{n=0}^∞ (xₖ)ⱼₙ² =
    ∑_{n=0}^∞ |(xₖ)ⱼₙ²| =
    ∑_{i∈I} |(xₖ)ᵢ²| =
    ∑_{i∈I} (xₖ)ᵢ²
  ))
}