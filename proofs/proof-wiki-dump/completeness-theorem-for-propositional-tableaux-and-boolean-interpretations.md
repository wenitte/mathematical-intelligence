theorem Tableau_Completeness() {
  assert(
    ∀A:WFF ⇒ (⊨_BI A → ⊢_PT A)
  )
} ↔

proof Tableau_Completeness() {
  lemma Extended_Completeness() {
    assert(
      ∀H:WFF_Set, ∀A:WFF ⇒ (H ⊨_BI A → H ⊢_PT A)
    )
  } →
  
  let H = ∅ →
  apply(Extended_Completeness()) →
  
  assert(
    ∅ ⊨_BI A → ∅ ⊢_PT A
  ) →
  
  assert(
    ⊨_BI A → ⊢_PT A
  )
}

relatedTheorem Tableau_Soundness() {
  assert(
    ∀A:WFF ⇒ (⊢_PT A → ⊨_BI A)
  )
}