theorem Conditional_Entropy_Decreases_Corollary() {
  given(
    Ω,Σ,Pr: ProbabilitySpace,
    A,D: FiniteSubSigmaAlgebra ⊆ Σ,
    H: EntropyFunction,
    H_cond: ConditionalEntropyFunction
  )
  assert(
    H(A) ≥ H_cond(A|D)
  )
} ↔

proof Conditional_Entropy_Decreases_Corollary() {
  setVar(N := {∅,Ω}: TrivialSigmaAlgebra) →
  
  assert(H(A) = H_cond(A|N)) →
  
  lemma Entropy_Trivial_Sigma() {
    assert(
      ∀X: SubSigmaAlgebra ⇒ 
      H_cond(X|N) = H(X)
    )
  } →
  
  lemma Conditional_Entropy_Decreases() {
    assert(
      ∀X,Y,Z: SubSigmaAlgebra ⇒
      (Y ⊆ Z) →
      H_cond(X|Y) ≥ H_cond(X|Z)
    )
  } →
  
  assert(N ⊆ D) →
  apply(Conditional_Entropy_Decreases()) →
  assert(H_cond(A|N) ≥ H_cond(A|D)) →
  
  conclude(
    H(A) = H_cond(A|N) ≥ H_cond(A|D)
  )
}