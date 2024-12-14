theorem ClosedBoundedCompact() {
  assert(
    ∀S ⊆ ℝ → (isClosed(S) ∧ isBounded(S)) → isCompact(S)
  )
} ↔

proof ClosedBoundedCompact() {
  // Proof 1 path
  lemma SubspaceReduction() {
    assert(
      ∀S ⊆ ℝ → ∃a,b ∈ ℝ → 
      (S ⊆ [a,b] ∧ isClosed(S)) →
      (isCompact([a,b]) → isCompact(S))
    )
  } →

  setVar(𝒰: OpenCover([a,b])) →
  defineSet(G := {x ∈ ℝ | x ≥ a ∧ hasFiniteSubcover([a,x], 𝒰)}) →
  
  lemma GoodPointPropagation() {
    assert(
      ∀x,y ∈ ℝ → (x ∈ G ∧ a ≤ y ≤ x) → y ∈ G
    )
  } →

  lemma GNotEmpty() {
    assert(
      ∃δ > 0 → (a,a+δ) ⊆ G
    )
  } →

  setVar(g := sup(G)) →
  
  // Case analysis
  branch {
    case1: assert(¬isBounded(G)) →
      ∃c ∈ G → c > b →
      apply(GoodPointPropagation()) →
      assert(b ∈ G)

    case2: assert(isBounded(G)) →
      assert(g = sup(G)) →
      assert(g > b) →
      byContradiction(g ≤ b) {
        assert(∃U₀ ∈ 𝒰 → g ∈ U₀) →
        assert(∃ε > 0 → Bₑ(g) ⊆ U₀) →
        assert(∃c ∈ G → c > g-ε) →
        assert(g + ε/2 ∈ G) →
        contradiction()
      }
  } →
  
  assert(isCompact([a,b])) →
  apply(SubspaceReduction()) →
  assert(isCompact(S))
}

// Proof 2 outline also available but omitted for brevity
// Can include if needed