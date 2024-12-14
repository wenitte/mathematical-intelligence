theorem Closed_Ordinal_Space_is_Complete() {
  assert(
    ∀Γ (is_limit_ordinal(Γ) ∧ [0,Γ] = closed_ordinal_space(Γ)) →
    is_complete_order_space([0,Γ])
  )
}

proof Closed_Ordinal_Space_is_Complete() {
  setVar(Γ: Ordinal) →
  assume(is_limit_ordinal(Γ)) →
  setVar(H: Set) →
  
  lemma Has_Infimum() {
    assert(
      ∀H ⊆ ordinal_space() →
      ∃x (x = inf(H) ∧ x = first_element(H))
    )
  } →

  lemma Has_Supremum() {
    assert(
      ∀H ⊆ [0,Γ] →
      ∃x (x = sup(H))
    )
  } →

  apply(Has_Infimum()) →
  apply(Has_Supremum()) →
  
  assert(
    (∀H ⊆ [0,Γ] → ∃inf(H)) ∧
    (∀H ⊆ [0,Γ] → ∃sup(H))
  ) →
  
  conclude(is_complete_order_space([0,Γ]))
}