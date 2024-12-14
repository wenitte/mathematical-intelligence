theorem CharacteristicFunctionDisjointUnionCorollary() {
  setVar(X: Set) ∧
  setVar(D_n: Set, n ∈ [1..N]) ∧
  assert(∀i,j ∈ [1..N], i≠j ⇒ D_i ∩ D_j = ∅) ∧
  define(D := ⋃_{n=1}^N D_n) ⇒
  assert(χ_D = ∑_{n=1}^N χ_{D_n})
}

proof CharacteristicFunctionDisjointUnionCorollary() {
  // Extend sequence definition
  define(D_i := ∅, ∀i ≥ N+1) →
  
  lemma DisjointExtension() {
    assert(∀i≥N+1, ∀j∈ℕ ⇒ D_i ∩ D_j = ∅)
  } →
  
  // New infinite sequence is pairwise disjoint
  assert(∀i,j∈ℕ, i≠j ⇒ D_i ∩ D_j = ∅) →
  
  // Express union as infinite union
  assert(D = ⋃_{n=1}^∞ D_n) →
  
  // Apply infinite disjoint union theorem
  apply(CharacteristicFunctionDisjointUnion()) →
  assert(χ_D = ∑_{n=1}^∞ χ_{D_n}) →
  
  // Split sum
  assert(∑_{n=1}^∞ χ_{D_n} = ∑_{n=1}^N χ_{D_n} + ∑_{n=N+1}^∞ χ_{D_n}) →
  
  // Empty set characteristic function is zero
  lemma EmptySetChar() {
    assert(χ_∅ = 0)
  } →
  
  // Apply to second sum
  assert(∑_{n=1}^∞ χ_{D_n} = ∑_{n=1}^N χ_{D_n} + ∑_{n=N+1}^∞ 0) →
  
  // Sum of zeros is zero
  assert(∑_{n=1}^∞ χ_{D_n} = ∑_{n=1}^N χ_{D_n})
}