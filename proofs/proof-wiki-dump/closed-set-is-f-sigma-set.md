theorem Closed_Set_Is_F_Sigma() {
  assert(
    ∀T: TopologicalSpace ∧ ∀V ⊆ T ∧ isClosed(V,T) ⇒ isF_Sigma(V,T)
  )
} ↔

proof Closed_Set_Is_F_Sigma() {
  setVar(T: TopologicalSpace) →
  setVar(V: Set) →
  assume(isClosed(V,T)) →
  assert(V = ⋃{V}) →
  lemma Singleton_Union_Is_Countable() {
    assert(|{V}| = 1 ⇒ isCountable({V}))
  } →
  apply(Singleton_Union_Is_Countable()) →
  assert(V = ⋃_{i∈ℕ} V_i where V_i = V if i=1, ∅ otherwise) →
  assert(∀i∈ℕ: isClosed(V_i,T)) →
  assert(isCountableUnionOfClosedSets(V,T)) →
  apply(def: F_Sigma_Set) →
  conclude(isF_Sigma(V,T))
}