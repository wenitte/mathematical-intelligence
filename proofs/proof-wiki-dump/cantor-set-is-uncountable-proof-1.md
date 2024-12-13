theorem Cantor_Set_Uncountable() {
  assert(
    ∀𝒞 (isCantor(𝒞) → ¬isCountable(𝒞))
  )
} ↔

proof Cantor_Set_Uncountable() {
  setDef(𝒞: {x ∈ [0,1] | hasTernaryRepNoOnes(x)}) →
  
  assert(
    ∀x ∈ 𝒞 → ∃(rₖ ∈ {0,2})ₖ₌₁^∞: x = ∑ᵢ₌₁^∞ rᵢ⋅3⁻ᵢ
  ) →
  
  lemma Unique_Representation() {
    assert(
      ∀x ∈ 𝒞 → uniqueTernary(x)
    )
  } →
  
  define(
    f: 𝒞 → [0,1],
    f(∑ᵢ₌₁^∞ rᵢ⋅3⁻ᵢ) = ∑ᵢ₌₁^∞ (rᵢ/2)⋅2⁻ᵢ
  ) →
  
  assert(
    ∀j: rⱼ/2 ∈ {0,1}
  ) →
  
  lemma Binary_Representation() {
    assert(
      ∀y ∈ [0,1] → ∃(bₖ ∈ {0,1})ₖ₌₁^∞: y = ∑ᵢ₌₁^∞ bᵢ⋅2⁻ᵢ
    )
  } →
  
  assert(
    ∀y ∈ [0,1] → ∃x ∈ 𝒞: 
    x = ∑ᵢ₌₁^∞ 2bᵢ⋅3⁻ᵢ ∧ f(x) = y
  ) →
  
  conclude(
    isSurjective(f) ∧
    isUncountable([0,1]) →
    isUncountable(𝒞)
  )
}