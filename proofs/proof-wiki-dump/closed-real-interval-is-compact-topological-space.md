theorem ClosedIntervalCompact() {
  assert(
    ∀I ∈ ℝ | I = [a,b] → isCompact(I)
  )
} ↔

proof ClosedIntervalCompact() {
  setVar(I: [a,b]) →
  setVar(𝒰: OpenCover(I)) →
  
  define(G := {x ∈ ℝ | x ≥ a ∧ ∃F ⊂ 𝒰 | F finite ∧ F covers [a,x]}) →
  
  lemma GoodPointsInheritance() {
    assert(∀x,y ∈ ℝ | (x ∈ G ∧ a ≤ y ≤ x) → y ∈ G)
  } →
  
  lemma GNotEmpty() {
    setVar(U ∈ 𝒰 | a ∈ U) →
    setVar(δ > 0 | (a, a+δ) ⊆ U) →
    assert((a, a+δ) ⊆ G)
  } →
  
  case GUnboundedAbove() {
    assume(¬∃M | ∀x ∈ G: x ≤ M) →
    setVar(c ∈ G | c > b) →
    apply(GoodPointsInheritance()) →
    assert(b ∈ G)
  } →
  
  case GBoundedAbove() {
    setVar(g := sup(G)) →
    
    case g > b {
      setVar(c ∈ G | c > b) →
      apply(GoodPointsInheritance()) →
      assert(b ∈ G)
    } →
    
    case g ≤ b {
      apply(GNotEmpty()) →
      assert(g > a) →
      setVar(U₀ ∈ 𝒰 | g ∈ U₀) →
      setVar(ε > 0 | Bₑ(g) ⊆ U₀ ∧ ε < g-a) →
      setVar(c ∈ G | c > g-ε) →
      setVar({U₁,...,Uᵣ} ⊂ 𝒰 | covers([a,c])) →
      assert([a,g+ε/2] covered by {U₀,U₁,...,Uᵣ}) →
      assert(g+ε/2 ∈ G) →
      assert(contradiction with g = sup(G))
    }
  } →
  
  assert(b ∈ G) →
  assert(∀𝒰: OpenCover(I) → ∃F ⊂ 𝒰 | F finite ∧ F covers I) →
  assert(isCompact(I))
}