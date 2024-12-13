theorem Banach_Tarski_Paradox() {
  define(𝔻³: {x ∈ ℝ³ | ||x|| ≤ 1}) →
  assert(
    ∃A,B: 𝔻³ ↔ [A ≈ B ∧ A ∩ B = ∅ ∧ A ∪ B ≈ 𝔻³]
  )
} ↔

proof Banach_Tarski_Paradox() {
  setVar(𝔻³: unit_ball, center: origin) →
  setVar(𝕊²: ∂𝔻³) →
  
  lemma Hausdorff_Decomposition() {
    assert(∃A,B,C,Q ⊆ 𝕊² ↔ [
      𝕊² = A ∪ B ∪ C ∪ Q ∧
      A ∩ B = ∅ ∧ B ∩ C = ∅ ∧ A ∩ C = ∅ ∧
      A ≈ B ≈ C ≈ (B ∪ C) ∧
      Q is countable
    ])
  } →

  define(r*: ℝ³ → ℝ³, r*(x) = rx) →
  define(W: ∪{r*(A) | 0 < r ≤ 1}) →
  define(X: ∪{r*(B) | 0 < r ≤ 1}) →
  define(Y: ∪{r*(C) | 0 < r ≤ 1}) →
  define(Z: ∪{r*(Q) | 0 < r ≤ 1}) →
  define(T: W ∪ Z ∪ {0}) →

  assert(W ≈ X ∪ Y) →
  assert(X ≈ Y) →
  assert(W ≈ X) →
  
  lemma Equidecomposability_Steps() {
    assert(W ∪ X ≈ W ∪ X ∪ Y) →
    assert(W ≈ W ∪ X ∪ Y) →
    assert(T ≈ 𝔻³)
  } →

  assert(∃φ ∈ SO(3): φ(Q) ⊂ A ∪ B ∪ C) →
  define(I: φ(Q) ⊂ W ∪ X ∪ Y) →
  assert(∃H ⊆ X: H ≈ I) →
  define(S: Y ∪ H ∪ {p}, p ∈ X - H) →

  assert(S ≈ 𝔻³) →
  assert(T ∪ S ≈ 𝔻³ ∪ D³) →
  conclude(𝔻³ ≈ 𝔻³ ∪ D³)
}