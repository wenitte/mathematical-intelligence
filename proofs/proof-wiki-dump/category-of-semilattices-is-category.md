theorem SLat_Is_Metacategory() {
  assert(
    ∀ SLat [Category of semilattices] ⇒
    IsMetaCategory(SLat)
  )
} ↔

proof SLat_Is_Metacategory() {
  // Verify metacategory axioms C1-C3
  
  // C1: Composition closure
  lemma CompositionClosure() {
    assert(
      ∀f,g ∈ SLatHomomorphisms ⇒
      IsHomomorphism(f ∘ g)
    )
  } →
  apply(CompositeHomomorphismTheorem) →
  
  // C2: Identity existence
  lemma IdentityExists() {
    setVar(S: Semilattice) →
    assert(
      ∃id_S: S → S [
        IsHomomorphism(id_S) ∧
        ∀x ∈ S: id_S(x) = x
      ]
    )
  } →
  apply(IdentityMappingIsHomomorphism) →
  apply(IdentityMappingIsLeftIdentity) →
  apply(IdentityMappingIsRightIdentity) →

  // C3: Associativity
  lemma AssociativityHolds() {
    assert(
      ∀f,g,h ∈ SLatHomomorphisms ⇒
      (f ∘ g) ∘ h = f ∘ (g ∘ h)
    )
  } →
  apply(CompositionIsAssociative) →

  // Conclusion
  assert(
    CompositionClosure() ∧
    IdentityExists() ∧
    AssociativityHolds() ⇒
    IsMetaCategory(SLat)
  )
}