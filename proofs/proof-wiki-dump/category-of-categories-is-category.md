theorem Category_Of_Categories_Is_Metacategory() {
  assert(
    ∀C ∈ Cat → 
    isMetacategory(Cat)
  )
} ↔

proof Category_Of_Categories_Is_Metacategory() {
  assert(checkAxioms(C1, C2, C3)) →
  
  lemma Composition_Closure() {
    assert(
      ∀F,G ∈ Functors → 
      (F ∘ G) ∈ Functors
    )
  } →

  lemma Identity_Existence() {
    assert(
      ∀C ∈ SmallCategories →
      ∃id_C: (id_C ∈ Functors ∧ 
              isIdentityMorphism(id_C, C))
    )
  } →

  lemma Associativity() {
    assert(
      ∀F,G,H ∈ Functors →
      ((F ∘ G) ∘ H) = (F ∘ (G ∘ H))
    )
  } →

  apply(Composition_Closure()) →
  apply(Identity_Existence()) →
  apply(Associativity()) →

  assert(
    satisfiesMetacategoryAxioms(Cat) →
    isMetacategory(Cat)
  )
}