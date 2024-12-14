theorem Conditional_Entropy_Join_Sum_Cor1() {
  let(Ω, Σ, Pr: ProbabilitySpace),
  let(𝔸, ℂ: FiniteSubSigmaAlgebra(Σ)) →
  assert(
    H(𝔸 ∨ ℂ) = H(𝔸) + H(ℂ|𝔸)
  )
} ↔

proof Conditional_Entropy_Join_Sum_Cor1() {
  let(𝕀 := {∅, Ω}: TrivialSigmaAlgebra) →
  
  lemma Trivial_Entropy() {
    assert(
      ∀X ∈ FiniteSubSigmaAlgebra(Σ) →
      H(X) = H(X|𝕀)
    )
  } →
  
  lemma Join_Sum() {
    assert(
      ∀X,Y,Z ∈ FiniteSubSigmaAlgebra(Σ) →
      H(X ∨ Y|Z) = H(X|Z) + H(Y|Z ∨ X)
    )
  } →
  
  lemma Trivial_Join() {
    assert(
      ∀X ∈ FiniteSubSigmaAlgebra(Σ) →
      𝕀 ∨ X = X
    )
  } →
  
  assert(H(𝔸 ∨ ℂ) = H(𝔸 ∨ ℂ|𝕀)) by(Trivial_Entropy) →
  assert(H(𝔸 ∨ ℂ|𝕀) = H(𝔸|𝕀) + H(ℂ|𝕀 ∨ 𝔸)) by(Join_Sum) →
  assert(H(𝔸|𝕀) = H(𝔸)) by(Trivial_Entropy) →
  assert(𝕀 ∨ 𝔸 = 𝔸) by(Trivial_Join) →
  assert(H(𝔸 ∨ ℂ) = H(𝔸) + H(ℂ|𝔸))
}