theorem Conditional_Entropy_Join_Inequality() {
  assume(Ω, Σ, Pr: ProbabilitySpace) →
  assume(A, C, D ⊆ Σ: FiniteSubSigmaAlgebra) →
  assert(
    A ⊆ C → H(A|D) ≤ H(C|D)
  )
} ↔

proof Conditional_Entropy_Join_Inequality() {
  setVar(A, C, D: FiniteSubSigmaAlgebra) →
  assume(A ⊆ C) →
  
  lemma Join_Identity() {
    assert(A ∨ C = C)
  } →
  
  assert(
    H(C|D) = H(A ∨ C|D)
  ) →
  
  apply(Conditional_Entropy_Join_Sum_Theorem()) →
  assert(
    H(C|D) = H(A|D) + H(C|D ∨ A)
  ) →
  
  lemma Conditional_Entropy_NonNegative() {
    assert(∀X,Y: FiniteSubSigmaAlgebra → H(X|Y) ≥ 0)
  } →
  
  apply(Conditional_Entropy_NonNegative()) →
  assert(H(C|D ∨ A) ≥ 0) →
  
  conclude(
    H(C|D) = H(A|D) + H(C|D ∨ A) ≥ H(A|D)
  )
}