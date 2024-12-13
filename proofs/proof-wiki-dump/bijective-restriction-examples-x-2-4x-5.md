theorem Bijective_Restriction_Example() {
  let f: ℝ → ℝ
  assert(
    ∀x ∈ ℝ ⇒ f(x) = x² - 4x + 5 ∧
    ∃f₁: (-∞, 2] → [1, ∞) ∧
    ∃f₂: [2, ∞) → [1, ∞) ∧
    isBijectiveRestriction(f₁, f) ∧
    isBijectiveRestriction(f₂, f)
  )
} ↔

proof Bijective_Restriction_Example() {
  lemma Image_Of_f() {
    assert(Img(f) = [1, ∞))
  } →
  
  let g: ℝ → [1, ∞)
  assert(g(x) = x² - 4x + 5) →
  
  lemma Stationary_Point() {
    assert(
      ∃!x₀ ∈ ℝ: f'(x₀) = 0 ∧
      x₀ = 2
    )
  } →
  
  lemma Monotonicity() {
    assert(
      ∀x₁,x₂ ∈ (-∞, 2]: x₁ < x₂ ⇒ f(x₁) > f(x₂) ∧
      ∀x₁,x₂ ∈ [2, ∞): x₁ < x₂ ⇒ f(x₁) < f(x₂)
    )
  } →
  
  apply(Strictly_Monotone_Mapping_Theorem()) →
  assert(isInjective(f₁) ∧ isInjective(f₂)) →
  
  assert(
    isSurjective(f₁) ∧
    isSurjective(f₂)
  ) →
  
  conclude(
    isBijective(f₁) ∧
    isBijective(f₂)
  )
}