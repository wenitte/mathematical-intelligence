theorem Sandwich_Principle_Minimal_Inductive() {
  setVars(
    M: Class,
    g: ProgressingMapping,
    x: Element,
    y: Element
  ) →
  assume(
    isMinimallyInductive(M, g) ∧
    x ∈ M ∧
    y ∈ M
  ) →
  assert(
    (x ⊆ y ⊆ g(x)) → (x = y ∨ y = g(x))
  )
} ↔

proof Sandwich_Principle_Minimal_Inductive() {
  lemma MinimallyInductiveImpliesMinimallyClosed() {
    assert(
      isMinimallyInductive(M, g) → 
      isMinimallyClosed(M, g, ∅)
    )
  } →
  
  apply(MinimallyInductiveImpliesMinimallyClosed()) →
  
  lemma SandwichPrincipleForMinimallyClosed() {
    assert(
      isMinimallyClosed(M, g, ∅) →
      ∀x,y ∈ M: (x ⊆ y ⊆ g(x) → (x = y ∨ y = g(x)))
    )
  } →
  
  apply(SandwichPrincipleForMinimallyClosed()) →
  conclude()
}