theorem Closed_Real_Interval_Is_Compact() {
  assert(
    ∀I ∈ ℝ, ∃a,b ∈ ℝ where I = [a,b] →
    isCompact(I)
  )
} ↔

proof Closed_Real_Interval_Is_Compact() {
  # Topological Space Proof
  setVar(𝕌: OpenCover(I)) →
  define(G := {x ∈ ℝ : x ≥ a ∧ ∃F ⊆ 𝕌, |F| < ∞ ∧ F covers [a,x]}) →
  
  lemma Good_Points_Hereditary() {
    assert(
      ∀x,y ∈ ℝ : (x ∈ G ∧ a ≤ y ≤ x) → y ∈ G
    )
  } →

  lemma G_Nonempty() {
    setVar(U ∈ 𝕌: a ∈ U) →
    setVar(δ > 0: (a, a+δ) ⊆ U) →
    assert(G ⊇ (a, a+δ)) →
    assert(G ≠ ∅)
  } →

  lemma Supremum_Analysis() {
    setVar(g := sup(G)) →
    assert(g > a) →
    setVar(U₀ ∈ 𝕌: g ∈ U₀) →
    setVar(ε > 0: Bₑ(g) ⊆ U₀ ∧ ε < g-a) →
    assert(∃c ∈ G: c > g-ε) →
    assert(g+ε/2 ∈ G) →
    assert(g > b)
  } →

  apply(Good_Points_Hereditary()) →
  apply(G_Nonempty()) →
  apply(Supremum_Analysis()) →
  assert(b ∈ G) →
  assert(∃F ⊆ 𝕌: |F| < ∞ ∧ F covers I) →

  # Metric Space Proof
  assert(isClosed(I)) →
  assert(isBounded(I)) →
  
  # Normed Vector Space Proof
  setVar(sequence: {aₙ}_{n∈ℕ} in I) →
  assert(∀n∈ℕ: a ≤ aₙ ≤ b) →
  apply(Bolzano_Weierstrass_Theorem()) →
  assert(∃L∈I: {aₙₖ}→L) →
  
  assert(isCompact(I))
}