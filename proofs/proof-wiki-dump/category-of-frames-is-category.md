theorem Frame_Category_Is_Metacategory() {
  assert(
    ∀F(F = Frm) → (isMetaCategory(F))
  )
} ↔

proof Frame_Category_Is_Metacategory() {
  // Verify metacategory axioms C1-C3
  lemma CompositionClosure() {
    assert(
      ∀f,g(isFrameHomomorphism(f) ∧ isFrameHomomorphism(g)) →
      isFrameHomomorphism(compose(f,g))
    )
  } →

  lemma IdentityExists() {
    setVar(L: Frame) →
    setVar(S: Set) →
    assert(L = struct(S, ⪯)) →
    assert(∃id_S(id_S = identityMapping(S))) →
    assert(isFrameHomomorphism(id_S)) →
    assert(
      isLeftIdentity(id_S) ∧ isRightIdentity(id_S)
    )
  } →

  lemma AssociativityHolds() {
    assert(
      ∀f,g,h(isFrameHomomorphism(f) ∧ isFrameHomomorphism(g) ∧ isFrameHomomorphism(h)) →
      compose(compose(f,g),h) = compose(f,compose(g,h))
    )
  } →

  apply(CompositionClosure()) →
  apply(IdentityExists()) →
  apply(AssociativityHolds()) →
  
  assert(
    satisfiesMetaCategoryAxioms(Frm) →
    isMetaCategory(Frm)
  )
}