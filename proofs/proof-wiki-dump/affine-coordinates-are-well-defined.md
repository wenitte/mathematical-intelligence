theorem AffineCoordsWellDefined() {
  let(𝔼: AffineSpace, V: DiffSpace, k: Field, ℝ: Frame) →
  assert(ℝ = (p₀, e₁, ..., eₙ)) →
  define(Θᵣ: k^n → 𝔼) →
  assert(Θᵣ(λ₁, ..., λₙ) = p₀ + ∑ᵢ₌₁ⁿ λᵢeᵢ) →
  assert(Θᵣ is_bijective)
} ↔

proof AffineCoordsWellDefined() {
  // Surjection proof
  lemma Surjection() {
    ∀p ∈ 𝔼 →
    setVar(v = p - p₀) →
    assert(v ∈ V) →
    ∃(λ₁, ..., λₙ)[v = ∑ᵢ₌₁ⁿ λᵢeᵢ] →
    assert(p₀ + ∑ᵢ₌₁ⁿ λᵢeᵢ = p₀ + v) ∧
    assert(p₀ + v = p₀ + (p - p₀)) ∧
    assert(p₀ + (p - p₀) = p) →
    conclude(∀p ∈ 𝔼 ∃(λ₁, ..., λₙ)[Θᵣ(λ₁, ..., λₙ) = p])
  } →

  // Injection proof
  lemma Injection() {
    ∀(λ₁, ..., λₙ), (μ₁, ..., μₙ) ∈ k^n →
    assume(Θᵣ(λ₁, ..., λₙ) = Θᵣ(μ₁, ..., μₙ)) →
    assert(p₀ + ∑ᵢ₌₁ⁿ λᵢeᵢ = p₀ + ∑ᵢ₌₁ⁿ μᵢeᵢ) →
    apply(AffineSpaceProps.3) →
    assert(∑ᵢ₌₁ⁿ λᵢeᵢ = ∑ᵢ₌₁ⁿ μᵢeᵢ) →
    apply(UniqueBasisCombination) →
    conclude(∀i ∈ {1,...,n}[λᵢ = μᵢ])
  } →

  apply(Surjection()) ∧
  apply(Injection()) →
  conclude(Θᵣ is_bijective)
}