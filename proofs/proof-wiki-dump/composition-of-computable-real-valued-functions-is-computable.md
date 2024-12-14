theorem CompositionComputableFunctions() {
  assert(
    ∀D ⊆ ℝⁿ ∧ ∀E ⊆ ℝᵐ ∧
    ∀f: D → ℝ [isComputable(f)] ∧
    ∀i ∈ {1,...,n}: gᵢ: E → ℝ [isComputable(gᵢ)] ∧
    (∀x ∈ E: ⟨g₁(x),...,gₙ(x)⟩ ∈ D) →
    isComputable(h: E → ℝ) where
    h(x₁,...,xₘ) = f(g₁(x₁,...,xₘ),...,gₙ(x₁,...,xₘ))
  )
} ↔

proof CompositionComputableFunctions() {
  lemma SeqCompComposition() {
    assert(
      isSequentiallyComputable(f) ∧
      ∀i: isSequentiallyComputable(gᵢ) →
      isSequentiallyComputable(h)
    )
  } →
  
  lemma UniformContinuityComposition() {
    assert(
      isComputablyUniformlyContinuous(f) ∧
      ∀i: isComputablyUniformlyContinuous(gᵢ) →
      isComputablyUniformlyContinuous(h)
    )
  } →
  
  apply(SeqCompComposition()) →
  apply(UniformContinuityComposition()) →
  assert(isComputable(h))
}