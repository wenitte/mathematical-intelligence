theorem Sandwich_Principle_MinInductive() {
  assert(
    ∀M: Class ∧ ∀g: ProgressingMapping ∧ MinimallyInductive(M,g) →
    (∀x,y ∈ M: x ⊆ y ⊆ g(x) → x = y ∨ y = g(x))
  )
}

proof Sandwich_Principle_MinInductive_1() {
  setVar(M: Class) →
  setVar(g: ProgressingMapping) →
  assume(MinimallyInductive(M,g)) →
  
  lemma NestProperty() {
    assert(∀x,y ∈ M: g(x) ⊆ y ∨ y ⊆ x)
  } →
  
  apply(MinInductive_Implies_Nest(M,g)) →
  apply(SandwichPrinciple()) →
  conclude()
}

proof Sandwich_Principle_MinInductive_2() {
  setVar(M: Class) →
  setVar(g: ProgressingMapping) →
  assume(MinimallyInductive(M,g)) →
  
  assert(MinimallyClosed(M,g,∅)) →
  apply(SandwichPrinciple_MinClosed()) →
  conclude()
}