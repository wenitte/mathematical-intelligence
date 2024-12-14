theorem Conditional_Entropy_Join_Sum_Corollary() {
  require(
    ProbabilitySpace(Ω, Σ, Pr) ∧
    FiniteSubSigmaAlgebras(A, C, D ⊆ Σ)
  )
  assert(
    H(A ∨ C | D) ≤ H(A | D) + H(C | D)
  )
} ↔

proof Conditional_Entropy_Join_Sum_Corollary() {
  lemma Join_Sum_Theorem() {
    assert(
      H(A ∨ C | D) = H(A | D) + H(C | A ∨ D)
    )
  } →
  
  lemma Conditional_Entropy_Decreases() {
    require(D ⊆ A ∨ D) →
    assert(
      H(C | A ∨ D) ≤ H(C | D)
    )
  } →
  
  apply(Join_Sum_Theorem()) →
  assert(H(A ∨ C | D) = H(A | D) + H(C | A ∨ D)) →
  apply(Conditional_Entropy_Decreases()) →
  assert(H(A | D) + H(C | A ∨ D) ≤ H(A | D) + H(C | D)) →
  conclude(H(A ∨ C | D) ≤ H(A | D) + H(C | D))
}