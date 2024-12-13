theorem Cantor_Space_NonMeager() {
  let(T = ⟨C,τ_d⟩) →
  assert(
    (T is_Cantor_Space) →
    (T is_nonmeager_in_itself)
  )
} ↔

proof Cantor_Space_NonMeager() {
  let(T = ⟨C,τ_d⟩) →
  assert(T is_Cantor_Space) →
  
  lemma Cantor_Complete() {
    assert(T is_complete_metric_space)
  } →
  
  lemma Baire_Category() {
    assert(
      ∀X(X is_complete_metric_space → X is_Baire_space)
    )
  } →
  
  lemma Baire_NonMeager() {
    assert(
      ∀X(X is_Baire_space → X is_nonmeager_in_itself)
    )
  } →
  
  apply(Cantor_Complete()) ∧
  apply(Baire_Category()) →
  assert(T is_Baire_space) →
  apply(Baire_NonMeager()) →
  assert(T is_nonmeager_in_itself)
}