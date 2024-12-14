theorem Conditional_Entropy_Join_Inequality() {
  assert(
    ∀(Ω,Σ,Pr: ProbabilitySpace) ∧
    ∀(A,C: FiniteSubσAlgebra ⊆ Σ) ∧
    (A ⊆ C) ⇒
    H(A) ≤ H(C)
  )
} ↔

proof Conditional_Entropy_Join_Inequality() {
  setVar(Ω,Σ,Pr: ProbabilitySpace) →
  setVar(A,C: FiniteSubσAlgebra ⊆ Σ) →
  assume(A ⊆ C) →
  
  letVar(N = {∅,Ω}: TrivialσAlgebra) →
  
  assert(H(A) = H(A|N)) →
  {
    apply(Conditional_Entropy_Trivial_Algebra_Identity())
  } →
  
  assert(H(A|N) ≤ H(C|N)) →
  {
    apply(Conditional_Entropy_Join_Sum_Corollary2())
  } →
  
  assert(H(C|N) = H(C)) →
  {
    apply(Conditional_Entropy_Trivial_Algebra_Identity())
  } →
  
  conclude(H(A) ≤ H(C))
}