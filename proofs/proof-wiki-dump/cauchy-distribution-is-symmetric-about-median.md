theorem Cauchy_Distribution_Symmetry() {
  assert(
    ∀X: ContinuousRandomVariable ∧
    ∀λ ∈ ℝ_{>0} ∧
    ∀γ ∈ ℝ ∧
    (fₓ(x) = 1/(πλ(1 + ((x-γ)/λ)²))) ⇒
    isSymmetric(X, γ)
  )
} ↔

proof Cauchy_Distribution_Symmetry() {
  setVar(X: ContinuousRandomVariable) →
  setVar(λ: ℝ_{>0}) →
  setVar(γ: ℝ) →
  
  assert(fₓ(2γ-x) = 1/(πλ(1 + ((2γ-x-γ)/λ)²))) →
  
  assert(
    1/(πλ(1 + ((2γ-x-γ)/λ)²)) = 
    1/(πλ(1 + ((γ-x)/λ)²))
  ) →
  
  assert(
    1/(πλ(1 + ((γ-x)/λ)²)) = 
    1/(πλ(1 + ((x-γ)/λ)²))
  ) →
  
  assert(
    1/(πλ(1 + ((x-γ)/λ)²)) = fₓ(x)
  ) →
  
  conclude(
    fₓ(2γ-x) = fₓ(x) ⇒ isSymmetric(X, γ)
  )
}