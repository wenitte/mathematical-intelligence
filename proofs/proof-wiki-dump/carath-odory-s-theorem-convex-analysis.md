theorem Caratheodory() {
  assert(
    ∀E ⊆ ℝ^l ∧ ∀x ∈ conv(E) ⇒
    ∃{y₁,...,yₖ} ⊆ E : (
      x = Σᵢ₌₁ᵏ γᵢyᵢ ∧
      (∀i: γᵢ ≥ 0) ∧
      (Σᵢ₌₁ᵏ γᵢ = 1) ∧
      {y₁,...,yₖ} are affinely independent ∧
      k ≤ l + 1
    )
  )
} ↔

proof Caratheodory() {
  setVar(E: subset(ℝ^l)) →
  setVar(x: element(conv(E))) →
  
  assert(∃k,{y₁,...,yₖ}⊆E,{γ₁,...,γₖ}: 
    x = Σᵢ₌₁ᵏ γᵢyᵢ ∧ 
    ∀i(γᵢ ≥ 0) ∧ 
    Σᵢ₌₁ᵏ γᵢ = 1
  ) →

  lemma MinimalK() {
    assert(
      K = {k∈ℕ | x is convex combination of k points in E} →
      ∃k_s: k_s = min(K)
    )
  } →
  apply(MinimalK()) →

  lemma Contradiction() {
    assume(
      {y₁,...,yₖ_s} are affinely dependent
    ) →
    assert(
      ∃{α₁,...,αₖ_s}: 
        Σᵢ₌₁ᵏˢ αᵢyᵢ = 0 ∧
        Σᵢ₌₁ᵏˢ αᵢ = 0 ∧
        ∃j(αⱼ > 0)
    ) →
    setVar(r = min{γᵢ/αᵢ | αᵢ > 0}) →
    assert(
      x = Σᵢ₌₁ᵏˢ (γᵢ - r·αᵢ)yᵢ ∧
      ∀i(γᵢ - r·αᵢ ≥ 0) ∧
      ∃j(γⱼ - r·αⱼ = 0)
    ) →
    assert(contradiction(k_s = min(K)))
  } →
  
  assert(
    {y₁,...,yₖ_s} are affinely independent ∧
    k_s ≤ l + 1
  )
}