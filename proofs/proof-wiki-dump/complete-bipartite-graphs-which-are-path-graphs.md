theorem BipartitePathGraphs() {
  assert(
    ∀G(BipartiteGraph(G) ∧ Complete(G) → (
      (G = K₀,₀ ↔ G = P₀) ∧
      ((G = K₀,₁ ∨ G = K₁,₀) ↔ G = P₁) ∧
      (G = K₁,₁ ↔ G = P₂) ∧
      ((G = K₁,₂ ∨ G = K₂,₁) ↔ G = P₃) ∧
      (∀m,n ∈ ℕ)((m,n) ∉ {(0,0),(0,1),(1,0),(1,1),(1,2),(2,1)} → Km,n ≠ Pₖ ∀k ∈ ℕ)
    ))
  )
} ↔

proof BipartitePathGraphs() {
  // First cases
  assert(EdgeCount(K₀,₀) = 0 ∧ EdgeCount(K₀,₁) = 0 ∧ EdgeCount(K₁,₀) = 0) →
  assert(P₀.isPathGraph() ∧ P₁.isPathGraph()) →
  
  // K₁,₁ case
  lemma K11_isP2() {
    assert(K₁,₁.vertices = 2 ∧ K₁,₁.edges = 1) →
    assert(K₁,₁.isIsomorphic(P₂))
  } →
  
  // K₁,₂ and K₂,₁ cases
  lemma K12_isP3() {
    assert(K₁,₂.vertices = 3 ∧ K₁,₂.edges = 2) →
    assert(K₁,₂.isIsomorphic(P₃))
  } →
  
  // Remaining cases
  lemma PathIsTree() {
    assert(∀G(PathGraph(G) → Tree(G)))
  } →
  
  lemma BipartiteTreeForm() {
    assert(∀G(Complete(G) ∧ BipartiteGraph(G) ∧ Tree(G) → 
      (∃n ∈ ℕ)(G = K₁,ₙ ∨ G = Kₙ,₁)))
  } →
  
  lemma DegreeConstraint() {
    assert(∀G(PathGraph(G) → ∀v ∈ G.vertices(degree(v) ≤ 2)))
  } →
  
  apply(PathIsTree()) →
  apply(BipartiteTreeForm()) →
  apply(DegreeConstraint()) →
  
  assert(∀n ≥ 3(K₁,ₙ.hasVertexOfDegree(n))) →
  assert(∀n ≥ 3(¬PathGraph(K₁,ₙ) ∧ ¬PathGraph(Kₙ,₁)))
}