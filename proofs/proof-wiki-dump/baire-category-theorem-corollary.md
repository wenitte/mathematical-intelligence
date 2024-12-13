theorem BaireCategoryCorollary() {
  assert(
    ℝ_metric = EuclideanMetric ⇒ 
    ¬Meager(ℝ)
  )
} ↔

proof BaireCategoryCorollary() {
  lemma RealLineComplete() {
    assert(
      CompleteMetricSpace(ℝ, EuclideanMetric)
    )
  } →
  
  lemma BaireTheorem() {
    assert(
      ∀X[CompleteMetricSpace(X) ⇒ BaireSpace(X)]
    )
  } →

  lemma BaireNonMeager() {
    assert(
      ∀X[BaireSpace(X) ⇒ ¬Meager(X)]
    )
  } →
  
  apply(RealLineComplete()) →
  assert(CompleteMetricSpace(ℝ)) →
  
  apply(BaireTheorem()) →
  assert(BaireSpace(ℝ)) →
  
  apply(BaireNonMeager()) →
  assert(¬Meager(ℝ))
}

/* Note: Depends on Axiom of Dependent Choice */
axiom AxiomDependentChoice() {
  assert(
    ∀R,x[
      (∀a ∃b[R(a,b)]) ⇒ 
      ∃f[f(0)=x ∧ ∀n∈ℕ[R(f(n),f(n+1))]]
    ]
  )
}