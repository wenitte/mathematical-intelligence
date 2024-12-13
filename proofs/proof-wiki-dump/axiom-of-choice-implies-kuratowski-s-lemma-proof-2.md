theorem Kuratowski_from_Choice() {
  assert(
    AxiomOfChoice ⇒ KuratowskiLemma
  )
  where {
    KuratowskiLemma := ∀S[
      (S is_set_of_sets ∧
       S is_closed_under_chain_unions) ⇒
      ∀x ∈ S ∃m ∈ S(
        x ⊆ m ∧ 
        ∀y ∈ S(m ⊆ y → m = y)
      )
    ]
  }
} ↔

proof Kuratowski_from_Choice() {
  assume(AxiomOfChoice) →
  
  lemma Choice_Function_Exists() {
    assert(∃f[
      f is_choice_function_for S
    ])
  } →
  
  lemma Closed_Set_Chain_Union() {
    assert(
      (S is_closed_under_chain_unions ∧
       ∃f[f is_choice_function_for S]) ⇒
      S is_of_type_M
    )
  } →
  
  apply(Choice_Function_Exists()) →
  apply(Closed_Set_Chain_Union()) →
  
  assert(
    S is_of_type_M ⇒
    ∀x ∈ S ∃m ∈ S(
      x ⊆ m ∧ 
      ∀y ∈ S(m ⊆ y → m = y)
    )
  ) →
  
  conclude(KuratowskiLemma)
}