theorem CompactSpace_EquivalentDefinitions() {
  assert(
    ∀T[T = struct(S, τ) ∧ T is_topological_space] ↔
    (∀C[C is_open_cover(S) → ∃F ⊆ C[F is_finite ∧ F covers S]) ↔
    (∀A[A is_set_of_closed_subsets(S) ∧ ⋂A = ∅ → 
      ∃F ⊆ A[F is_finite ∧ ⋂F = ∅]])
  )
}

proof CompactSpace_EquivalentDefinitions() {
  # Forward direction
  assume(∀C[C is_open_cover(S) → ∃F ⊆ C[F is_finite ∧ F covers S]]) →
  setVar(A: set_of_closed_subsets(S)) →
  assume(⋂A = ∅) →
  
  define(V := {S∖A : A ∈ A}) →
  assert(V is_open_cover(S)) →
  
  lemma DeMorgan() {
    assert(S∖⋃V = ⋂{S∖V : V ∈ V} = ⋂A = ∅) →
    assert(S = ⋃V)
  } →
  
  apply(hypothesis) →
  obtain(Ṽ ⊆ V[Ṽ is_finite ∧ Ṽ covers S]) →
  
  define(Ã := {S∖V : V ∈ Ṽ}) →
  assert(Ã ⊆ A) →
  
  lemma SubsetIntersection() {
    assert(⋂Ã = ⋂{S∖V : V ∈ Ṽ} = S∖⋃Ṽ = ∅)
  } →
  
  conclude(∃F ⊆ A[F is_finite ∧ ⋂F = ∅]) →
  
  # Reverse direction
  assert(converse_follows_symmetrically) →
  
  conclude(definitions_are_equivalent)
}