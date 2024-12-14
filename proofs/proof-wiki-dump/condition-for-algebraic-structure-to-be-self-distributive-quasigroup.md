theorem SelfDistributiveQuasigroup() {
  assert(
    ∀S ∀⊙ [
      (S,⊙) is_self_distributive_quasigroup ↔
      ∀a∈S [(λₐ is_automorphism_of (S,⊙)) ∧ (ρₐ is_automorphism_of (S,⊙))]
    ]
  )
}

proof SelfDistributiveQuasigroup() {
  // Sufficient direction
  lemma Sufficient() {
    assume(is_self_distributive_quasigroup(S,⊙)) →
    assert(∀a∈S [is_permutation(λₐ,S) ∧ is_permutation(ρₐ,S)]) →
    
    // Prove morphism property for λₐ
    assert(∀x,y∈S [
      λₐ(x) ⊙ λₐ(y) =
      (a ⊙ x) ⊙ (a ⊙ y) =    // by def of λₐ
      a ⊙ (x ⊙ y) =          // by self-distributivity
      λₐ(x ⊙ y)              // by def of λₐ
    ]) →

    // Prove morphism property for ρₐ 
    assert(∀x,y∈S [
      ρₐ(x) ⊙ ρₐ(y) =
      (x ⊙ a) ⊙ (y ⊙ a) =    // by def of ρₐ
      (x ⊙ y) ⊙ a =          // by self-distributivity
      ρₐ(x ⊙ y)              // by def of ρₐ
    ]) →
    
    conclude(∀a∈S [is_automorphism(λₐ,S,⊙) ∧ is_automorphism(ρₐ,S,⊙)])
  }

  // Necessary direction
  lemma Necessary() {
    assume(∀a∈S [is_automorphism(λₐ,S,⊙) ∧ is_automorphism(ρₐ,S,⊙)]) →
    assert(is_quasigroup(S,⊙)) →  // from permutation property
    
    // Prove left self-distributivity
    assert(∀x,y,z∈S [
      x ⊙ (y ⊙ z) =
      λₓ(y ⊙ z) =             // by def of λₓ
      λₓ(y) ⊙ λₓ(z) =         // as λₓ is homomorphism
      (x ⊙ y) ⊙ (x ⊙ z)       // by def of λₓ
    ]) →

    // Prove right self-distributivity
    assert(∀x,y,z∈S [
      (x ⊙ y) ⊙ z =
      ρᵧ(x ⊙ y) =             // by def of ρᵧ
      ρᵧ(x) ⊙ ρᵧ(y) =         // as ρᵧ is homomorphism
      (x ⊙ z) ⊙ (y ⊙ z)       // by def of ρᵧ
    ]) →
    
    conclude(is_self_distributive_quasigroup(S,⊙))
  }

  apply(Sufficient()) →
  apply(Necessary()) →
  conclude(theorem_statement)
}