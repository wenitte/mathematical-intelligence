theorem Progressing_Mapping_Image_Subset() {
  assert(
    ∀M: Class, ∀g: ProgressingMapping ⇒
    (isMinimallyInductive(M, g) ∧
     ∀x,y ∈ M: x ⊂ y ⇒ g(x) ⊆ y)
  )
} ↔

proof Progressing_Mapping_Image_Subset() {
  setVar(M: Class) →
  setVar(g: ProgressingMapping) →
  assume(isMinimallyInductive(M, g)) →
  
  lemma Nest_Property() {
    assert(
      isMinimallyInductive(M, g) ⇒
      ∀x,y ∈ M: g(x) ⊆ y ∨ y ⊆ x
    )
  } →
  
  apply(Nest_Property()) →
  setVar(x,y ∈ M) →
  assume(x ⊂ y) →
  
  lemma Sandwich_Principle() {
    assert(
      (x ⊂ y ∧ (g(x) ⊆ y ∨ y ⊆ x)) ⇒
      g(x) ⊆ y
    )
  } →
  
  apply(Sandwich_Principle()) →
  conclude(g(x) ⊆ y)
}