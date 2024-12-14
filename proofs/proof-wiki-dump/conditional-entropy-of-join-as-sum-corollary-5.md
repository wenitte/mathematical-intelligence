theorem Conditional_Entropy_Join_Sum() {
  let Ω: ProbabilitySpace,
  let Σ: σ-algebra,
  let Pr: Measure,
  let 𝔸,ℂ: FiniteSubσAlgebra ⊆ Σ
  assert(
    H(𝔸 ∨ ℂ) ≤ H(𝔸) + H(ℂ)
  )
} ↔

proof Conditional_Entropy_Join_Sum() {
  setVar(𝔑 := {∅,Ω}: TrivialσAlgebra) →
  
  assert(H(𝔸 ∨ ℂ) = H(𝔸 ∨ ℂ|𝔑)) →
  lemma Conditional_Entropy_Trivial() {
    assert(∀X:σAlgebra → H(X|𝔑) = H(X))
  } →
  
  assert(H(𝔸 ∨ ℂ|𝔑) ≤ H(𝔸|𝔑) + H(ℂ|𝔑)) →
  lemma Join_Sum_Corollary4() {
    assert(∀X,Y,Z:σAlgebra → H(X ∨ Y|Z) ≤ H(X|Z) + H(Y|Z))
  } →
  
  assert(H(𝔸|𝔑) + H(ℂ|𝔑) = H(𝔸) + H(ℂ)) →
  apply(Conditional_Entropy_Trivial()) →
  
  conclude(H(𝔸 ∨ ℂ) ≤ H(𝔸) + H(ℂ))
}