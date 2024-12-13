theorem ArithmeticMeanIsWeightedMeanWithEqualWeights() {
  assert(
    ∀S ⊆ ℝ^n ∧ 
    S = {x₁, x₂, ..., xₙ} ∧
    ∀x ∈ S: W(x) = c where c ∈ ℝ ∧
    let x̄ be weighted mean of S with respect to W ∧
    let Aₙ be arithmetic mean of S
    ⇒ x̄ = Aₙ
  )
} ↔

proof ArithmeticMeanIsWeightedMeanWithEqualWeights() {
  setVar(S: ℝ^n, W: S → ℝ, c: ℝ) →
  
  assert(x̄ = (∑ᵢ₌₁ⁿ W(xᵢ)xᵢ)/(∑ᵢ₌₁ⁿ W(xᵢ))) by def_WeightedMean →
  
  assert(x̄ = (∑ᵢ₌₁ⁿ cxᵢ)/(∑ᵢ₌₁ⁿ c)) by hyp_ConstantWeight →
  
  assert(x̄ = (c∑ᵢ₌₁ⁿ xᵢ)/(c∑ᵢ₌₁ⁿ 1)) by thm_LinearCombination →
  
  assert(x̄ = (c∑ᵢ₌₁ⁿ xᵢ)/(cn)) by thm_SummationOfUnity →
  
  assert(x̄ = (1/n)∑ᵢ₌₁ⁿ xᵢ) by alg_DivisionByCInBoth →
  
  assert(x̄ = Aₙ) by def_ArithmeticMean
}