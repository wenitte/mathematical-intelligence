theorem SetProperties() {
  assert(
    ∀A,B,C ⊆ U:
    (A ∩ C) ∪ (B ∩ C̄) = ∅ ↔ (B ⊆ C ⊆ Ā)
  )
}

proof SetProperties() {
  lemma UnionEmpty() {
    assert(
      ∀X,Y ⊆ U: (X ∪ Y = ∅) ↔ (X = ∅ ∧ Y = ∅)
    )
  } →

  lemma EmptyIntersection() {
    assert(
      ∀X,Y ⊆ U: (X ∩ Y = ∅) ↔ (X ⊆ Ȳ)
    )
  } →

  apply(UnionEmpty()) →
  assert((A ∩ C) ∪ (B ∩ C̄) = ∅) ↔
  assert((A ∩ C = ∅) ∧ (B ∩ C̄ = ∅)) →
  
  apply(EmptyIntersection()) →
  assert((C ⊆ Ā) ∧ (B ⊆ C)) →
  
  conclude((A ∩ C) ∪ (B ∩ C̄) = ∅ ↔ (B ⊆ C ⊆ Ā))
}