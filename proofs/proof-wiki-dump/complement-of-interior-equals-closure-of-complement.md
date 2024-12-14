theorem ComplementInteriorClosureEquality() {
  let(T: TopologicalSpace) →
  let(H: Subset(T)) →
  let(τ: Topology(T)) →
  assert(
    (∀H ⊆ T) ⇒ 
    (complement(interior(H)) = closure(complement(H))) ∧
    (interior(complement(H)) = complement(closure(H)))
  )
} ↔

proof ComplementInteriorClosureEquality() {
  let(K: Set) →
  define(K = {K ∈ τ: K ⊆ H}) →
  
  // First equality
  assert(complement(interior(H)) = complement(⋃{K: K ∈ K})) →
  apply(InteriorDefinition()) →
  
  assert(complement(⋃{K: K ∈ K}) = ⋂{complement(K): K ∈ K}) →
  apply(DeMorgansLaws()) →
  
  lemma ClosedSetEquivalence() {
    assert(
      (K ∈ τ is open) ↔ (complement(K) is closed) ∧
      (complement(K) ⊇ complement(H))
    )
  } →
  
  let(K': Set) →
  define(K' = {K' ⊆ T: complement(H) ⊆ K', K' is closed}) →
  
  assert(K ∈ K ↔ complement(K) ∈ K') →
  assert(⋂{K': K' ∈ K'} = closure(complement(H))) →
  apply(ClosureDefinition()) →
  
  // Second equality
  assert(interior(H) = complement(complement(interior(H)))) →
  apply(RelativeComplementProperty()) →
  
  assert(interior(complement(H)) = complement(closure(H))) →
  apply(FirstEqualityResult())
}