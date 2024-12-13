theorem BoundedSequenceConvergence() {
  assert(
    ∀{xᵢ} ∈ ℝⁿ, (
      (sequence({xᵢ}, i ∈ ℕ) ∧ bounded({xᵢ})) →
      ∃{yₖ}(subsequence({yₖ}, {xᵢ}) ∧ convergent({yₖ}))
    )
  )
} ↔

proof BoundedSequenceConvergence() {
  assert(equivalent_norms(ℝⁿ)) →
  setNorm(∥·∥₂) →
  
  lemma InductionBase() {
    assert(n = 1) →
    apply(BolzanoWeierstrass(ℝ))
  } →
  
  lemma InductionHypothesis(n: ℕ) {
    assert(
      ∀{xᵢ} ∈ ℝⁿ, (
        bounded({xᵢ}) →
        ∃{xᵢₖ}(subsequence({xᵢₖ}, {xᵢ}) ∧ convergent({xᵢₖ}))
      )
    )
  } →
  
  lemma InductionStep(n: ℕ) {
    setVar({xₙ}: sequence(ℝⁿ⁺¹)) →
    assert(bounded({xₙ})) →
    
    define(xₙ = (αₙ, βₙ), αₙ ∈ ℝⁿ, βₙ ∈ ℝ) →
    assert(∥αₙ∥₂ ≤ √(∥αₙ∥₂² + βₙ²) = ∥xₙ∥₂) →
    assert(bounded({αₙ})) →
    
    apply(InductionHypothesis(n)) →
    assert(∃{αₙₖ}(subsequence({αₙₖ}, {αₙ}) ∧ convergent({αₙₖ}))) →
    setVar(α := lim({αₙₖ})) →
    
    assert(∥βₙ∥₂ ≤ √(∥αₙ∥₂² + βₙ²) = ∥xₙ∥₂) →
    assert(bounded({βₙ})) →
    apply(BolzanoWeierstrass(ℝ)) →
    assert(∃{βₙₖ}(subsequence({βₙₖ}, {βₙ}) ∧ convergent({βₙₖ}))) →
    setVar(β := lim({βₙₖ})) →
    
    assert(lim(xₙₖ) = lim((αₙₖ, βₙₖ)) = (α, β) ∈ ℝⁿ⁺¹)
  } →
  
  apply(MathematicalInduction(InductionBase(), InductionHypothesis(), InductionStep())) →
  assert(∀n ∈ ℕ, theorem_holds(n))
}