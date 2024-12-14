theorem Loc_Star_Is_Metacategory() {
  assert(
    ∀L ∈ Loc_* → (L is a metacategory)
  )
} ↔

proof Loc_Star_Is_Metacategory() {
  // Verify metacategory axioms C1-C3
  
  // C1: Composition closure
  lemma Composition_Closure() {
    assert(
      ∀f,g ∈ Loc_*(morphisms) →
      (f ∘ g) ∈ Loc_*(morphisms)
    )
  } →
  apply(Composite_Localic_Mapping_is_Localic) →

  // C2: Identity existence
  lemma Identity_Exists() {
    setVar(L: Locale) →
    assert(
      ∃id_S: L → L where
      id_S = identity_mapping ∧
      id_S ∈ Loc_*(morphisms)
    )
  } →
  apply(Identity_Mapping_is_Localic) →
  apply(Identity_Mapping_is_Left_Identity) →
  apply(Identity_Mapping_is_Right_Identity) →

  // C3: Associativity
  lemma Associativity() {
    assert(
      ∀f,g,h ∈ Loc_*(morphisms) →
      (f ∘ g) ∘ h = f ∘ (g ∘ h)
    )
  } →
  apply(Composition_of_Mappings_is_Associative) →

  // Conclusion
  assert(
    Composition_Closure() ∧
    Identity_Exists() ∧
    Associativity() →
    Loc_* is a metacategory
  )
}