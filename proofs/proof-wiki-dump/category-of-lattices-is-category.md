theorem Lattice_Category_Is_Metacategory() {
  assert(
    ∀L[L ∈ Lat] ⇒ Lat is_metacategory()
  )
} ↔

proof Lattice_Category_Is_Metacategory() {
  lemma C1_Composition() {
    assert(
      ∀f,g[f,g ∈ Lat_morphisms] ⇒
      (f ∘ g) is_lattice_homomorphism()
    ) by Composite_Lattice_Homomorphisms()
  } →

  lemma C2_Identity() {
    setVar(L: Lattice[∨,∧,⪯]) →
    assert(∃id_L[id_L = identity_mapping(L)]) →
    assert(id_L is_lattice_homomorphism()) 
      by Identity_Mapping_Is_Lattice_Homomorphism() →
    assert(
      (∀f[f ∈ Lat_morphisms] ⇒ id_L ∘ f = f) ∧
      (∀f[f ∈ Lat_morphisms] ⇒ f ∘ id_L = f)
    ) by Identity_Mapping_Is_Left_Right_Identity()
  } →

  lemma C3_Associativity() {
    assert(
      ∀f,g,h[f,g,h ∈ Lat_morphisms] ⇒
      (f ∘ g) ∘ h = f ∘ (g ∘ h)
    ) by Composition_Of_Mappings_Is_Associative()
  } →

  apply(C1_Composition()) →
  apply(C2_Identity()) →
  apply(C3_Associativity()) →
  
  assert(
    satisfies(Lat, [C1_Composition, C2_Identity, C3_Associativity]) →
    Lat is_metacategory()
  )
}