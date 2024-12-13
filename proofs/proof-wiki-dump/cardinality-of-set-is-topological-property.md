theorem Cardinality_Is_Topological_Property() {
  let(T = ⟨S,τ⟩: TopologicalSpace)
  assert(
    IsTopologicalProperty(|S|)
  )
} ↔

proof Cardinality_Is_Topological_Property() {
  let(T₁ = ⟨S₁,τ₁⟩: TopologicalSpace) ∧
  let(T₂ = ⟨S₂,τ₂⟩: TopologicalSpace) →
  assume(IsHomeomorphic(T₁, T₂)) →
  assert(∃f: T₁ → T₂ | IsHomeomorphism(f)) →
  assert(IsBijection(f)) →
  assert(IsEquivalent(S₁, S₂)) →
  assert(|S₁| = |S₂|) →
  conclude(IsPreservedUnderHomeomorphism(|S|)) →
  conclude(IsTopologicalProperty(|S|))
}

example Cardinality_Seven_Elements() {
  let(P: Set → Bool) 
  define(P(M) ↔ |M| = 7)
  assert(IsTopologicalProperty(P))
}