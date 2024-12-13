theorem Baire_Category_Corollary() {
  assert(
    (ℝ, d_euclidean) is_non_meager
  )
} ↔

proof Baire_Category_Corollary() {
  lemma Complete_Space() {
    assert(
      (ℝ, d_euclidean) is_complete_metric_space
    )
  } →
  
  lemma Baire_Category() {
    assert(
      ∀X: MetricSpace (
        X.is_complete → X.is_baire_space
      )
    )
  } →
  
  lemma Baire_Non_Meager() {
    assert(
      ∀X: Space (
        X.is_baire_space → X.is_non_meager
      )
    )
  } →
  
  apply(Complete_Space()) →
  apply(Baire_Category()) →
  assert((ℝ, d_euclidean).is_baire_space) →
  apply(Baire_Non_Meager()) →
  assert((ℝ, d_euclidean).is_non_meager)
} requires {
  axiom(Dependent_Choice)
}