theorem Category_Pointed_Sets_is_Category() {
  assert(
    ∀Set_* : Category ∧
    (Set_* = CategoryOf(PointedSets)) →
    isMetaCategory(Set_*)
  )
} ↔

proof Category_Pointed_Sets_is_Category() {
  assert(checkAxioms(C1, C2, C3)) →
  
  // Composition check
  setVar(f: Morphism(⟨A,a⟩ → ⟨B,b⟩)) ∧
  setVar(g: Morphism(⟨B,b⟩ → ⟨C,c⟩)) →
  
  assert(
    (g ∘ f)(a) = g(f(a)) = g(b) = c
  ) →
  assert(isPointedMapping(g ∘ f, ⟨A,a⟩ → ⟨C,c⟩)) →

  lemma Composition_Associative() {
    assert(
      ∀f,g,h: Morphism →
      (h ∘ (g ∘ f)) = ((h ∘ g) ∘ f)
    )
  } →
  apply(Composition_Associative()) →

  // Identity check
  setVar(A: Object, a: Element(A)) →
  assert(
    ∃id_⟨A,a⟩: Morphism(⟨A,a⟩ → ⟨A,a⟩) ∧
    id_⟨A,a⟩(a) = a
  ) →
  
  lemma Identity_Properties() {
    assert(
      ∀f: Morphism →
      (id ∘ f = f) ∧ (f ∘ id = f)
    )
  } →
  apply(Identity_Properties()) →
  
  assert(isMetaCategory(Set_*))
}