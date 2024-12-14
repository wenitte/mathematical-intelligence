theorem Permutation_Composition_Not_Commutative() {
  assert(
    ∀S ∃π,ρ ∈ Γ(S) ⇒ (π ∘ ρ ≠ ρ ∘ π)
  )
} ↔

proof Permutation_Composition_Not_Commutative() {
  setVar(S := {1,2,3}) →
  setVar(π := (1 2 3
               2 3 1)) →
  setVar(ρ := (1 2 3
               1 3 2)) →
               
  assert(π ∘ ρ = (1 2 3
                   3 2 1)) →
                   
  assert(ρ ∘ π = (1 2 3
                   2 1 3)) →
                   
  assert(π ∘ ρ ≠ ρ ∘ π) →
  
  lemma Counterexample_Found() {
    assert(∃S,π,ρ : π ∘ ρ ≠ ρ ∘ π)
  } →
  
  apply(Counterexample_Found()) →
  conclude(¬(∀S ∀π,ρ ∈ Γ(S) ⇒ π ∘ ρ = ρ ∘ π))
}