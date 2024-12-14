theorem ComplementFSigmaIsGDelta(T: TopologicalSpace, X: Set) {
  assert(
    (T = ⟨S,τ⟩) ∧
    (X ∈ F_σ(T)) ⇒
    (S\X ∈ G_δ(T))
  )
} ↔

proof ComplementFSigmaIsGDelta() {
  assume(X ∈ F_σ(T)) →
  setVar(𝓥: Set, {𝓥 is countable set of closed sets}) →
  assert(X = ⋃𝓥) →
  
  lemma DeMorganDiffUnion() {
    assert(S\(⋃𝓥) = ⋂{S\V : V ∈ 𝓥})
  } →
  
  apply(DeMorganDiffUnion()) →
  assert(S\X = ⋂{S\V : V ∈ 𝓥}) →
  
  lemma ClosedComplement() {
    assert(
      ∀V ∈ 𝓥 ⇒
      (V is closed in T) ↔
      (S\V is open in T)
    )
  } →
  
  apply(ClosedComplement()) →
  assert(∀V ∈ 𝓥 ⇒ S\V is open in T) →
  assert(⋂{S\V : V ∈ 𝓥} is countable intersection of open sets) →
  
  lemma GDeltaDefinition() {
    assert(
      A ∈ G_δ(T) ↔
      A is countable intersection of open sets
    )
  } →
  
  apply(GDeltaDefinition()) →
  assert(S\X ∈ G_δ(T))
}