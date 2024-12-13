theorem AutoregressiveLinearFilter() {
  assert(
    ∀S: StochasticProcess(equispaced) ∧
    ∀t ∈ ℤ ∧
    ∀z_t ∈ S(t) ∧
    ∀μ ∈ ℝ ∧
    ∀ã_t ∈ IndependentShocks ∧
    let(z̃_t = z_t - μ) ∧
    let(M: AutoregressiveModel(order: p)) ∧
    let(eq1: z̃_t = Σ(i=1 to p)[φ_i·z̃_(t-i)] + a_t) ⇒
    isSpecialCase(M, LinearFilterModel)
  )
} ↔

proof AutoregressiveLinearFilter() {
  setVar(t: ℤ) →
  
  lemma SubstitutionStep() {
    assert(
      z̃_(t-1) = Σ(i=1 to p)[φ_i·z̃_(t-i-1)] + a_(t-1)
    )
  } →
  
  lemma RecursiveSubstitution() {
    assert(
      ∀k ∈ ℕ ⇒
      z̃_(t-k) = Σ(i=1 to p)[φ_i·z̃_(t-k-i)] + a_(t-k)
    )
  } →
  
  apply(RecursiveSubstitution()) →
  
  assert(φ(B)·z̃_t = a_t) →
  
  lemma InverseOperator() {
    assert(
      ∃ψ(B): OperatorSeries ⇒
      (z̃_t = ψ(B)·a_t) ∧
      (ψ(B) = φ⁻¹(B))
    )
  } →
  
  apply(InverseOperator()) →
  
  assert(
    z̃_t = ψ(B)·a_t ↔ 
    isLinearFilterModel(M)
  )
}