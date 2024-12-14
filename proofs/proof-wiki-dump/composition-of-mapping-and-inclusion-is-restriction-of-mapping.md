theorem Composition_Inclusion_Is_Restriction() {
  assert(
    ∀S,T: Set ∧ ∀f: S → T ∧ ∀A ⊆ S ⇒
    f ∘ iₐ = f↾A
    where(
      iₐ := inclusion_mapping(A),
      f↾A := restriction(f, A)
    )
  )
} ↔

proof Composition_Inclusion_Is_Restriction() {
  setVar(S,T: Set) →
  setVar(f: S → T) →
  setVar(A ⊆ S) →
  
  lemma Domain_Codomain() {
    assert(iₐ: A → S) ∧
    assert(f ∘ iₐ: A → T) ∧
    assert(f↾A: A → T)
  } →
  
  setVar(a ∈ A) →
  
  assert((f ∘ iₐ)(a) = f(iₐ(a))) by(def_composition) →
  assert(f(iₐ(a)) = f(a)) by(def_inclusion) →
  assert(f(a) = (f↾A)(a)) by(def_restriction) →
  
  conclude(
    ∀a ∈ A ⇒ (f ∘ iₐ)(a) = (f↾A)(a) →
    f ∘ iₐ = f↾A
  )
}