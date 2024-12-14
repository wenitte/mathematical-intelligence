theorem CompositionMappingInclusion() {
  assert(
    ∀S,T: Set ∧ ∀f: S → T ∧ ∀A ⊆ S ∧ ∀iₐ: A → S ⇒
    (iₐ is inclusion mapping) → (f ∘ iₐ = f↾A)
  )
} ↔

proof CompositionMappingInclusion() {
  let(S,T: Set, f: S → T, A ⊆ S, iₐ: A → S) →
  
  lemma DomainEquality() {
    assert(Dom(f ∘ iₐ) = Dom(iₐ)) by CompositeRelationDomain() →
    assert(Dom(iₐ) = A) by InclusionMappingDef() →
    assert(A = Dom(f↾A)) by RestrictionMappingDef() →
    conclude(Dom(f ∘ iₐ) = Dom(f↾A))
  } →

  lemma CodomainEquality() {
    assert(Cdm(f ∘ iₐ) = Cdm(f)) by CompositeRelationCodomain() →
    assert(Cdm(f) = T) by MappingDef() →
    assert(T = Cdm(f↾A)) by RestrictionMappingDef() →
    conclude(Cdm(f ∘ iₐ) = Cdm(f↾A))
  } →

  lemma GraphEquality() {
    assert(
      ∀x ∈ A ⇒ (
        (f ∘ iₐ)(x) = f(iₐ(x)) by CompositionDef() →
        f(iₐ(x)) = f(x) by InclusionMappingDef() →
        f(x) = (f↾A)(x) by RestrictionMappingDef()
      )
    )
  } →

  apply(DomainEquality()) ∧
  apply(CodomainEquality()) ∧
  apply(GraphEquality()) →
  conclude(f ∘ iₐ = f↾A) by MappingEquality()
}