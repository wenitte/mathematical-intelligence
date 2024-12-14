theorem OrdSet_Is_Category() {
  assert(
    ∀X (X ∈ OrdSet ⇒ MetaCategory(OrdSet))
  )
} ↔

proof OrdSet_Is_Category() {
  lemma C1_Composition() {
    assert(
      ∀f,g (f,g ∈ Mor(OrdSet) ∧ IsIncreasing(f) ∧ IsIncreasing(g)) →
      IsIncreasing(g ∘ f)
    )
  } →

  lemma C2_Identity() {
    assert(
      ∀X ∈ OrdSet (
        ∃idₓ (idₓ = id_X ∧ IsIncreasing(idₓ)) ∧
        ∀f ∈ Mor(OrdSet) (
          idₓ ∘ f = f ∧
          f ∘ idₓ = f
        )
      )
    )
  } →

  lemma C3_Associativity() {
    assert(
      ∀f,g,h ∈ Mor(OrdSet) (
        (h ∘ g) ∘ f = h ∘ (g ∘ f)
      )
    )
  } →

  apply(C1_Composition()) →
  apply(C2_Identity()) →
  apply(C3_Associativity()) →
  
  assert(
    MetaCategory(OrdSet)
  )
}