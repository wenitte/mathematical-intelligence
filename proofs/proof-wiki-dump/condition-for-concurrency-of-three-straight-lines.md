theorem ThreeLinesConvurrency() {
  assert(
    ∀L₁,L₂,L₃ ∈ Lines(ℝ²) ∧
    L₁: l₁x + m₁y + n₁ = 0 ∧
    L₂: l₂x + m₂y + n₂ = 0 ∧
    L₃: l₃x + m₃y + n₃ = 0 →
    concurrent(L₁,L₂,L₃) ↔ det|
      l₁ m₁ n₁
      l₂ m₂ n₂
      l₃ m₃ n₃| = 0
  )
}

proof ThreeLinesConvurrency() {
  // Necessary condition
  lemma NecessaryCondition() {
    assume(concurrent(L₁,L₂,L₃)) →
    assert(∃k ∈ ℝ: L₃ ≡ (l₁x + m₁y + n₁) - k(l₂x + m₂y + n₂) = 0) →
    assert(L₃ ≡ (l₁ - kl₂)x + (m₁ - km₂)y + (n₁ - kn₂) = 0) →
    apply(DeterminantTranspose) →
    apply(DeterminantColumnOperation) →
    assert(det|
      l₁ m₁ n₁
      l₂ m₂ n₂
      l₃ m₃ n₃| = 0)
  }

  // Sufficient condition
  lemma SufficientCondition() {
    assume(det|
      l₁ m₁ n₁
      l₂ m₂ n₂
      l₃ m₃ n₃| = 0) →
    assert(∃a₁,a₂,a₃ ∈ ℝ\{0}: 
      a₁(l₁,m₁,n₁) + a₂(l₂,m₂,n₂) + a₃(l₃,m₃,n₃) = 0) →
    let(k = -a₂/a₁) →
    assert(L₃ ≡ (l₁x + m₁y + n₁) - k(l₂x + m₂y + n₂) = 0) →
    apply(IntersectionTheorem) →
    assert(concurrent(L₁,L₂,L₃))
  }

  apply(NecessaryCondition) ∧
  apply(SufficientCondition) →
  assert(concurrent(L₁,L₂,L₃) ↔ det|
    l₁ m₁ n₁
    l₂ m₂ n₂
    l₃ m₃ n₃| = 0)
}