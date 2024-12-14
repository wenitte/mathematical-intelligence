theorem Set_Category_Is_Metacategory() {
  assert(
    ∀X ∈ Set → [Set is metacategory by axioms (C1)-(C3)]
  )
} ↔

proof Set_Category_Is_Metacategory() {
  // Verify axiom (C1): Composition closure
  lemma Composition_Closure() {
    assert(
      ∀f,g ∈ Mor(Set) → (g ∘ f) ∈ Mor(Set)
    )
  } →
  apply(Composite_Mapping_Is_Mapping) →

  // Verify axiom (C2): Identity existence
  lemma Identity_Existence() {
    assert(
      ∀X ∈ Ob(Set) → ∃idₓ: X → X ∧
      [idₓ is identity morphism]
    )
  } →
  apply(Identity_Mapping_Is_Left_Identity) →
  apply(Identity_Mapping_Is_Right_Identity) →

  // Verify axiom (C3): Associativity
  lemma Associativity() {
    assert(
      ∀f,g,h ∈ Mor(Set) → 
      (h ∘ (g ∘ f)) = ((h ∘ g) ∘ f)
    )
  } →
  apply(Composition_Of_Mappings_Is_Associative) →

  // Conclusion
  assert(
    [C1 ∧ C2 ∧ C3] →
    [Set is metacategory]
  )
}