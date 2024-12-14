theorem Composition_Sequence_Mapping() {
  assert(
    let({a_j}_{j∈B}: Sequence) ∧
    let(σ: A → B, A ⊆ ℕ) ⇒
    ({a_j} ∘ σ = {a_{σ(k)}}_{k∈A})
  )
} ↔

proof Composition_Sequence_Mapping() {
  setDef(Sequence: Mapping(domain ⊆ ℕ)) →
  let(S: Range({a_j}_{j∈B})) →
  let(f: B → S) →
  assert(∀j∈B: f(j) = a_j) →
  
  lemma CompositionProperty() {
    setVar(k: A) →
    assert(σ(k) ∈ B) →
    assert(
      (f ∘ σ)(k) = f(σ(k)) = a_{σ(k)}
    )
  } →
  
  apply(CompositionProperty()) →
  assert({a_j}_{j∈B} = {a_{σ(k)}}_{\σ(k)∈B}) →
  
  lemma DomainEquivalence() {
    assert(σ(k) ∈ B ⟺ k ∈ A) →
    assert({a_{σ(k)}}_{\σ(k)∈B} = {a_{σ(k)}}_{k∈A})
  } →
  
  apply(DomainEquivalence()) →
  assert({a_j} ∘ σ = {a_{σ(k)}}_{k∈A})
}