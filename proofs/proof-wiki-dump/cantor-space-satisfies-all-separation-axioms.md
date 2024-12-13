theorem Cantor_Space_Separation_Axioms() {
  let(T := ⟨C,τ_d⟩) →
  assert(
    IsMetricSubspace(C, ℝ) ∧ IsCantor(T) ⇒ SatisfiesAllSeparationAxioms(T)
  )
}

proof Cantor_Space_Separation_Axioms() {
  let(T := ⟨C,τ_d⟩) →
  assert(IsMetricSubspace(C, ℝ)) →
  lemma MetricSpace_Implies_Separation() {
    assert(
      ∀X[IsMetricSpace(X) ⇒ SatisfiesAllSeparationAxioms(X)]
    )
  } →
  assert(IsMetricSpace(T)) →
  apply(MetricSpace_Implies_Separation()) →
  assert(SatisfiesAllSeparationAxioms(T))
}