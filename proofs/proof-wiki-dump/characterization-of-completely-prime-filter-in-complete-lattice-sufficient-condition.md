theorem Completely_Prime_Filter_Characterization() {
  assert(
    ∀L[CompleteLattice(L)] ∧
    ∀F ⊆ L[
      (∀A ⊆ L[⋁A ∈ F ↔ ∃a ∈ A(a ∈ F)]) ∧
      (∀A ⊆ L[Finite(A) → (⋀A ∈ F ↔ ∀a ∈ A(a ∈ F))])
    ] →
    CompletelyPrimeFilter(F, L)
  )
} ↔

proof Completely_Prime_Filter_Characterization() {
  setVar(L: CompleteLattice) →
  setVar(F: Set) →
  
  lemma Proper_Subset() {
    assert(⋁∅ = ⊥) →
    assert(∀x ∈ F(x ∉ ∅)) →
    assert(⋁∅ ∉ F) →
    conclude(F ≠ L)
  } →

  lemma Non_Empty() {
    assert(⋀∅ = ⊤) →
    assert(∀x ∈ ∅(x ∈ F)) →
    assert(⋀∅ ∈ F) →
    conclude(F ≠ ∅)
  } →

  lemma Down_Directed() {
    assert(∀x,y ∈ F[
      x ∧ y ∈ F ∧
      (x ∧ y ⪯ x) ∧ 
      (x ∧ y ⪯ y)
    ])
  } →

  lemma Upper_Section() {
    assert(∀x ∈ F[
      ∀y ∈ L(x ⪯ y → 
        ((x ∨ y = y) →
        y ∈ F))
    ])
  } →

  lemma Completely_Prime() {
    assert(∀A ⊆ L[
      ⋁A ∈ F →
      ∃a ∈ A(a ∈ F) →
      A ∩ F ≠ ∅
    ])
  } →

  apply(Proper_Subset()) →
  apply(Non_Empty()) →
  apply(Down_Directed()) →
  apply(Upper_Section()) →
  apply(Completely_Prime()) →
  conclude(CompletelyPrimeFilter(F, L))
}