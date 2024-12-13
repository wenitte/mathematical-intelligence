theorem AM_HM_Inequality() {
  assert(
    ∀x₁,...,xₙ ∈ ℝ₊ ∧
    Aₙ = (1/n)∑ₖ₌₁ⁿ xₖ ∧
    (1/Hₙ) = (1/n)∑ₖ₌₁ⁿ (1/xₖ) ⇒
    Aₙ ≥ Hₙ
  )
} ↔

proof AM_HM_Inequality() {
  setVar(x₁,...,xₙ: ℝ₊) →
  assert(∀k ∈ [1,n]: xₖ > 0) →
  
  lemma SquareRepresentation() {
    assert(∀k ∈ [1,n]: ∃yₖ ∈ ℝ: xₖ = yₖ²)
  } →
  
  apply(SquareRepresentation()) →
  assert(Aₙ = (1/n)∑ₖ₌₁ⁿ yₖ²) →
  assert(1/Hₙ = (1/n)∑ₖ₌₁ⁿ (1/yₖ²)) →
  
  setExpr(Aₙ/Hₙ = ((1/n)∑ₖ₌₁ⁿ yₖ²)((1/n)∑ₖ₌₁ⁿ (1/yₖ²))) →
  
  lemma CauchyInequality() {
    assert(
      ∀aₖ,bₖ ∈ ℝ ⇒
      (∑ₖ₌₁ⁿ aₖ²)(∑ₖ₌₁ⁿ bₖ²) ≥ (∑ₖ₌₁ⁿ aₖbₖ)²
    )
  } →
  
  apply(CauchyInequality(aₖ=yₖ, bₖ=1/yₖ)) →
  assert(Aₙ/Hₙ ≥ (1/n²)(∑ₖ₌₁ⁿ (yₖ/yₖ))²) →
  assert(Aₙ/Hₙ ≥ (1/n²)(n)² = 1) →
  
  lemma MultiplicationOrder() {
    assert(∀a,b ∈ ℝ₊: a/b ≥ 1 ⇒ a ≥ b)
  } →
  
  apply(MultiplicationOrder()) →
  assert(Aₙ ≥ Hₙ)
}