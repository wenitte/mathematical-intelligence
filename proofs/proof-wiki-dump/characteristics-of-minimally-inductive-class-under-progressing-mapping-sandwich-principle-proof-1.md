theorem Sandwich_Principle_For_Minimally_Inductive() {
  assert(
    ∀M[
      MinimallyInductive(M, g) ∧ ProgressingMapping(g) →
      ∀x,y ∈ M[
        (x ⊆ y ∧ y ⊆ g(x)) → (x = y ∨ y = g(x))
      ]
    ]
  )
} ↔

proof Sandwich_Principle_For_Minimally_Inductive() {
  setVar(M: Class, g: Mapping) →
  assume(MinimallyInductive(M, g) ∧ ProgressingMapping(g)) →
  
  lemma Nest_Property() {
    assert(
      ∀x,y ∈ M[
        g(x) ⊆ y ∨ y ⊆ x
      ]
    )
  } →
  
  apply(MinimallyInductiveInducesNest(M, g)) →
  apply(Nest_Property()) →
  apply(SandwichPrinciple(M)) →
  
  conclude(
    ∀x,y ∈ M[
      (x ⊆ y ∧ y ⊆ g(x)) → (x = y ∨ y = g(x))
    ]
  )
}