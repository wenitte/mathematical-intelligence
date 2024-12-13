theorem Bijection_2x_Plus_1() {
  assert(
    ∀x ∈ ℝ, f(x) = 2x + 1 ⇒ f is bijective
  )
} ↔

proof Bijection_2x_Plus_1() {
  // Prove injection
  lemma Injection() {
    setVar(x₁, x₂: ℝ) →
    assert(f(x₁) = f(x₂)) →
    assert(2x₁ + 1 = 2x₂ + 1) →
    assert(2x₁ = 2x₂) →
    assert(x₁ = x₂)
  } →

  // Prove surjection
  lemma Surjection() {
    setVar(y: ℝ) →
    setVar(x = (y-1)/2) →
    assert(x ∈ ℝ) →
    assert(f(x) = 2((y-1)/2) + 1) →
    assert(f(x) = y-1 + 1) →
    assert(f(x) = y) →
    assert(∃x ∈ ℝ : f(x) = y)
  } →

  // Combine results
  apply(Injection()) ∧
  apply(Surjection()) →
  assert(f is injective ∧ f is surjective) →
  assert(f is bijective)
}