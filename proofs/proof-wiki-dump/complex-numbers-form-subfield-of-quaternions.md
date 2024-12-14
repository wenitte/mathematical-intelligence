theorem Complex_Quaternion_Isomorphism() {
  assert(
    ℂ ≅ ℍᵢ ∧ ℂ ≅ ℍⱼ ∧ ℂ ≅ ℍₖ
    where
    ℍᵢ = {a𝟙 + b𝐢 + c𝐣 + d𝐤 ∈ ℍ: c = d = 0} ∧
    ℍⱼ = {a𝟙 + b𝐢 + c𝐣 + d𝐤 ∈ ℍ: b = d = 0} ∧
    ℍₖ = {a𝟙 + b𝐢 + c𝐣 + d𝐤 ∈ ℍ: b = c = 0}
  )
} ↔

proof Complex_Quaternion_Isomorphism() {
  // Define isomorphisms
  define(φᵢ: ℍᵢ → ℂ, x = a𝟙 + b𝐢 ↦ a + bi) →
  define(φⱼ: ℍⱼ → ℂ, x = a𝟙 + c𝐣 ↦ a + ci) →
  define(φₖ: ℍₖ → ℂ, x = a𝟙 + d𝐤 ↦ a + di) →

  lemma Bijectivity() {
    // Injection proof for φᵢ
    assert(∀x₁,x₂ ∈ ℍᵢ: φᵢ(x₁) = φᵢ(x₂) → x₁ = x₂) →
    // Surjection proof for φᵢ
    assert(∀z ∈ ℂ: ∃x ∈ ℍᵢ: φᵢ(x) = z) →
    // Similar for φⱼ and φₖ
    conclude(φᵢ is bijective ∧ φⱼ is bijective ∧ φₖ is bijective)
  } →

  lemma Morphism_Properties() {
    setVar(x₁ = a₁𝟙 + b₁𝐢, x₂ = a₂𝟙 + b₂𝐢 ∈ ℍᵢ) →
    
    // Additive morphism property
    assert(
      φᵢ(x₁ + x₂) = φᵢ(x₁) + φᵢ(x₂)
      by {
        φᵢ((a₁ + a₂)𝟙 + (b₁ + b₂)𝐢) = 
        (a₁ + a₂) + (b₁ + b₂)i =
        (a₁ + b₁i) + (a₂ + b₂i)
      }
    ) →

    // Multiplicative morphism property
    assert(
      φᵢ(x₁ × x₂) = φᵢ(x₁) × φᵢ(x₂)
      by {
        φᵢ((a₁a₂ - b₁b₂)𝟙 + (a₁b₂ + b₁a₂)𝐢) =
        (a₁a₂ - b₁b₂) + (a₁b₂ + b₁a₂)i =
        (a₁ + b₁i)(a₂ + b₂i)
      }
    ) →
    
    // Similar for φⱼ and φₖ
    conclude(φᵢ, φⱼ, φₖ are ring homomorphisms)
  } →

  apply(Bijectivity()) →
  apply(Morphism_Properties()) →
  conclude(φᵢ, φⱼ, φₖ are field isomorphisms)
}