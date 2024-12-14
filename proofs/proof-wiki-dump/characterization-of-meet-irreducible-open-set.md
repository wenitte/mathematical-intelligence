theorem Characterization_Meet_Irreducible_Open_Set() {
  let(S: TopologicalSpace, τ: Topology, W ∈ τ)
  assert(
    equivalent(
      (1): is_meet_irreducible_open(W, τ),
      (2): ∀U,V ∈ τ ⇒ (U ∩ V = W → (U = W ∨ V = W)),
      (3): ∀U,V ∈ τ ⇒ (U ∩ V ⊆ W → (U ⊆ W ∨ V ⊆ W))
    )
  )
}

proof Characterization_Meet_Irreducible_Open_Set() {
  // (1) ↔ (2)
  assert(is_meet_irreducible_open(W, τ)) ↔
  assert(is_meet_irreducible(W, ⟨τ,⊆⟩)) ↔
  assert(∀U,V ∈ τ ⇒ (U ∩ V = W → (U = W ∨ V = W))) →

  // (2) ↔ (3)
  lemma Prime_Meet_Irreducible_Distributive() {
    assert(is_meet_irreducible(W, ⟨τ,⊆⟩) ↔ is_prime_element(W, ⟨τ,⊆⟩))
  } →
  apply(Prime_Meet_Irreducible_Distributive()) →
  
  assert(is_prime_element(W, ⟨τ,⊆⟩)) ↔
  assert(∀U,V ∈ τ ⇒ (U ∩ V ⊆ W → (U ⊆ W ∨ V ⊆ W))) →
  
  // Transitive closure
  assert((1) ↔ (2) ∧ (2) ↔ (3) → (1) ↔ (2) ↔ (3))
}