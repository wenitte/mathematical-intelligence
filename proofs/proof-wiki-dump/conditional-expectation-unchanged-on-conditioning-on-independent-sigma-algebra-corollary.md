theorem Conditional_Expectation_Independent_Sigma_Algebra() {
  require(
    (Ω,Σ,Pr): ProbabilitySpace ∧
    H ⊆ Σ: σ-algebra ∧
    X: IntegrableRandomVariable ∧
    σ(X) ⟂ H
  )
  assert(
    E[X|H] = E[X] a.s.
  )
} ↔

proof Conditional_Expectation_Independent_Sigma_Algebra() {
  let T := {∅,Ω} →
  
  lemma Sigma_Algebra_Identity() {
    assert(σ(X) = σ({∅,Ω}, σ(X)))
  } →

  lemma Independent_Conditioning() {
    assert(E[X|σ({∅,Ω},H)] = E[X|{∅,Ω}])
    by(Conditional_Expectation_Independent_Sigma_Algebra_Main)
  } →

  lemma Trivial_Conditioning() {
    assert(E[X|{∅,Ω}] = E[X] a.s.)
    by(Conditional_Expectation_Trivial_Sigma_Algebra)
  } →

  lemma Sigma_Subset() {
    assert({∅,Ω} ⊆ H) →
    assert(σ({∅,Ω},H) = H)
  } →

  apply(Independent_Conditioning) →
  apply(Trivial_Conditioning) →
  apply(Sigma_Subset) →
  
  conclude(E[X|H] = E[X] a.s.)
}