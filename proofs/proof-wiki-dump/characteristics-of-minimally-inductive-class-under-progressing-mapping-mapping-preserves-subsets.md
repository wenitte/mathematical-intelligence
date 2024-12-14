theorem Mapping_Preserves_Subsets() {
  assert(
    ∀M: Class, ∀g: ProgressingMapping ⇒
    (MinimallyInductive(M, g) ∧
     ∀x,y ∈ M: (x ⊆ y → g(x) ⊆ g(y)))
  )
} ↔

proof Mapping_Preserves_Subsets() {
  setVar(M: Class, g: ProgressingMapping) →
  assume(MinimallyInductive(M, g)) →
  
  lemma NestProperty() {
    assert(
      ∀x,y ∈ M: (g(x) ⊆ y ∨ y ⊆ x)
    )
  } →
  
  apply(MinimallyInductiveInducesNest(M, g)) →
  
  setVar(x: Element(M), y: Element(M)) →
  assume(x ⊆ y) →
  
  apply(SandwichPrinciple_Corollary2(
    condition: (∀a,b ∈ M: g(a) ⊆ b ∨ b ⊆ a),
    subset: x ⊆ y
  )) →
  
  assert(g(x) ⊆ g(y))
}