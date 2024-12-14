theorem Closed_Bounded_Subset_Real_Numbers_Compact() {
  assert(
    ∀S ⊆ ℝ ∧ Closed(S) ∧ Bounded(S) ⇒ Compact(S)
  )
} ↔

proof Closed_Bounded_Subset_Real_Numbers_Compact() {
  setVar(S: ℝ) →
  assert(∃a,b ∈ ℝ: S ⊆ [a,b]) →
  
  lemma Reduction_To_Interval() {
    assert(Compact([a,b]) ⇒ Compact(S)) →
    apply(Closed_Subspace_Of_Compact_Is_Compact())
  } →

  setVar(𝒰: OpenCover([a,b])) →
  define(G := {x ∈ ℝ: x ≥ a ∧ ∃FiniteSubcover(𝒰, [a,x])}) →
  
  lemma Good_Points_Inheritance() {
    assert(∀x,y ∈ ℝ: (x ∈ G ∧ a ≤ y ≤ x) ⇒ y ∈ G)
  } →
  
  lemma G_Nonempty() {
    assert(∃δ > 0: (a,a+δ) ⊆ G) →
    setVar(U ∈ 𝒰: a ∈ U) →
    apply(Open_Set_Contains_Neighborhood())
  } →
  
  case G_Unbounded_Above() {
    assert(¬∃M: ∀x ∈ G: x ≤ M) →
    assert(∃c ∈ G: c > b) →
    apply(Good_Points_Inheritance()) →
    conclude(b ∈ G)
  } ∨
  
  case G_Bounded_Above() {
    setVar(g := sup(G)) →
    
    subcase g_Greater_Than_b() {
      assert(g > b) →
      assert(∃c ∈ G: c > b) →
      apply(Good_Points_Inheritance()) →
      conclude(b ∈ G)
    } →
    
    subcase g_LessEqual_b() {
      assume(g ≤ b) →
      setVar(U₀ ∈ 𝒰: g ∈ U₀) →
      setVar(ε > 0: Bₑ(g) ⊆ U₀ ∧ ε < g-a) →
      setVar(c ∈ G: c > g-ε) →
      assert(∃{U₁,...,Uᵣ} ⊆ 𝒰: Covers([a,c])) →
      assert({U₀,U₁,...,Uᵣ} Covers([a,g+ε/2])) →
      conclude(g+ε/2 ∈ G) →
      contradiction()
    }
  } →
  
  conclude(Compact(S))
}