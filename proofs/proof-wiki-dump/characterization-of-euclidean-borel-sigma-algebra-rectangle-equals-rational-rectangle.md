theorem Euclidean_Borel_Rectangle_Equality() {
  assert(
    ∀n ∈ ℕ ⇒ (
      let 𝕁ʰᵒⁿ := {half-open rectangles in ℝⁿ} ∧
      let 𝕁ʰᵒ,ʳᵃᵗⁿ := {half-open rectangles in ℝⁿ with rational endpoints} ⇒
      σ(𝕁ʰᵒⁿ) = σ(𝕁ʰᵒ,ʳᵃᵗⁿ)
    )
  )
} ↔

proof Euclidean_Borel_Rectangle_Equality() {
  setVar(n: ℕ) →
  
  lemma Subset_Inclusion() {
    assert(σ(𝕁ʰᵒ,ʳᵃᵗⁿ) ⊆ σ(𝕁ʰᵒⁿ))
  } →
  
  assert(suffices(𝕁ʰᵒⁿ ⊆ σ(𝕁ʰᵒ,ʳᵃᵗⁿ))) →
  
  setVar(R := ▯[a,b): half-open n-rectangle) →
  setVar(sequence(aₘ: ℚⁿ) | limit(aₘ) = a ∧ m₁ > m₂ ⇒ aₘ₁ > aₘ₂) →
  setVar(b' ∈ ℚⁿ | b' > b) →
  
  assert(∀m ∈ ℕ: ▯[aₘ,b') ∈ 𝕁ʰᵒ,ʳᵃᵗⁿ) →
  assert(⋂ₘ▯[aₘ,b') ∈ σ(𝕁ʰᵒ,ʳᵃᵗⁿ)) →
  
  lemma Intersection_Equivalence() {
    assert(
      ∀x ∈ ℝⁿ: (
        x ∈ ⋂ₘ▯[aₘ,b') ↔
        (∀m ∈ ℕ: x ≥ aₘ) ∧ (x < b') ↔
        (x ≥ a) ∧ (x < b') ↔
        x ∈ ▯[a,b')
      )
    )
  } →
  
  setVar(sequence(bₘ: ℚⁿ) | limit(bₘ) = b ∧ m₁ > m₂ ⇒ bₘ₁ > bₘ₂) →
  setVar(a' ∈ ℚⁿ | a' < a) →
  
  assert(∀m ∈ ℕ: ▯[a',bₘ) ∈ 𝕁ʰᵒ,ʳᵃᵗⁿ) →
  assert(⋃ₘ▯[a',bₘ) ∈ σ(𝕁ʰᵒ,ʳᵃᵗⁿ)) →
  
  lemma Union_Equivalence() {
    assert(⋃ₘ▯[a',bₘ) = ▯[a',b))
  } →
  
  assert(▯[a,b') ∩ ▯[a',b) ∈ σ(𝕁ʰᵒ,ʳᵃᵗⁿ)) →
  assert(▯[a,b') ∩ ▯[a',b) = ▯[a,b)) →
  
  conclude(▯[a,b) ∈ σ(𝕁ʰᵒ,ʳᵃᵗⁿ))
}