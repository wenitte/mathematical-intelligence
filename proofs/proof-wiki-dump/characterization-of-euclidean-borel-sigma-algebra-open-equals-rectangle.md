theorem BorelSigmaAlgebra_OpenEqualsRectangle() {
  assert(
    let 𝒪ⁿ := {open_subsets(ℝⁿ, τ)} ∧
    let 𝒥ʰᵒⁿ := {half_open_rectangles(ℝⁿ)} ∧
    σ(𝒪ⁿ) = σ(𝒥ʰᵒⁿ)
  )
} ↔

proof BorelSigmaAlgebra_OpenEqualsRectangle() {
  // First inclusion
  setVar(a,b: ℝⁿ) →
  assert(∀rect ∈ 𝒥ʰᵒⁿ: rect = ((-∞,b) ∩ [a,→))) →
  apply(CharacterizationBorelOpenClosed()) →
  apply(SigmaAlgebraIntersectionClosure()) →
  assert(𝒥ʰᵒⁿ ⊆ σ(𝒪ⁿ)) →
  assert(σ(𝒥ʰᵒⁿ) ⊆ σ(𝒪ⁿ)) →

  // Second inclusion
  setVar(k: ℕ) →
  define(1ⁿ := (1,...,1) ∈ ℝⁿ) →
  define(Sₖ := {[2⁻ᵏj, 2⁻ᵏ(j+1)) : j ∈ ℤⁿ}) →
  assert(⋃Sₖ = ℝⁿ) →
  assert(Sₖ ⊆ 𝒥ʰᵒⁿ) →
  assert(isCountable(Sₖ)) →

  setVar(U: 𝒪ⁿ) →
  define(Uₖ := ⋃{S ∈ Sₖ: S ⊆ U}) →
  assert(Uₖ ⊆ U) →
  assert(Uₖ ∈ σ(𝒥ʰᵒⁿ)) →
  assert(⋃{Uₖ: k ∈ ℕ} ∈ σ(𝒥ʰᵒⁿ)) →

  lemma UnionEqualsU() {
    setVar(x ∈ U) →
    assert(∃ε>0: Bε(x) ⊆ U) →
    setVar(k: √n·2⁻ᵏ < ε) →
    assert(∃j ∈ ℤⁿ: x ∈ [2⁻ᵏj, 2⁻ᵏ(j+1))) →
    assert(diam([2⁻ᵏj, 2⁻ᵏ(j+1))) = √n·2⁻ᵏ < ε) →
    assert([2⁻ᵏj, 2⁻ᵏ(j+1)) ⊆ Bε(x)) →
    assert(x ∈ Uₖ) →
    conclude(U = ⋃{Uₖ: k ∈ ℕ})
  } →

  apply(UnionEqualsU()) →
  assert(U ∈ σ(𝒥ʰᵒⁿ)) →
  assert(𝒪ⁿ ⊆ σ(𝒥ʰᵒⁿ)) →
  assert(σ(𝒪ⁿ) ⊆ σ(𝒥ʰᵒⁿ)) →
  conclude(σ(𝒪ⁿ) = σ(𝒥ʰᵒⁿ))
}