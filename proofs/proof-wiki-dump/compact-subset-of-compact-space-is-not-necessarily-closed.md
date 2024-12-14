theorem Compact_Subset_Not_Necessarily_Closed() {
  assert(
    ∃S,τ,H(
      (S is_topological_space) ∧
      (H ⊂ S) ∧
      (H is_compact) ∧
      ¬(H is_closed)
    )
  )
}

proof Compact_Subset_Not_Necessarily_Closed() {
  setVar(S: Set | |S| > 1) →
  setVar(τ = {S, ∅}) →
  assert(τ is_indiscrete_topology_on(S)) →
  setVar(x ∈ S) →
  setVar(H = S ∖ {x}) →
  
  assert(H ⊂ S) →
  
  lemma Subspace_Compact() {
    assert(
      ∀A,τ(
        (τ is_indiscrete_topology) →
        (A ⊂ S) →
        (A is_compact)
      )
    )
  } →
  
  apply(Subspace_Compact()) →
  assert(H is_compact) →
  
  lemma Closed_Sets_Indiscrete() {
    assert(
      ∀A(
        (A is_closed_in(S,τ)) ↔
        (A = S ∨ A = ∅)
      )
    )
  } →
  
  apply(Closed_Sets_Indiscrete()) →
  assert(H ≠ S ∧ H ≠ ∅) →
  assert(¬(H is_closed_in(S,τ))) →
  
  conclude(
    H is_compact ∧ ¬(H is_closed_in(S,τ))
  )
}