theorem CauchyMeanTheorem() {
  let(n: ℕ) →
  let(x₁,...,xₙ: ℝ⁺) →
  let(Aₙ = (1/n)∑ᵢ₌₁ⁿxᵢ) →
  let(Gₙ = (∏ᵢ₌₁ⁿxᵢ)^(1/n)) →
  assert(
    Aₙ ≥ Gₙ ∧
    (Aₙ = Gₙ ↔ ∀i,j ∈ {1,...,n}: xᵢ = xⱼ)
  )
}

proof CauchyMeanTheorem() {
  setVar(p: ℝ) →
  let(Mₚ(x₁,...,xₙ) = ((1/n)∑ᵢ₌₁ⁿxᵢᵖ)^(1/p)) →
  
  lemma HolderMeanRelations() {
    assert(
      M₀(x₁,...,xₙ) = Gₙ ∧
      M₁(x₁,...,xₙ) = Aₙ
    )
  } →

  lemma HolderMeanInequality() {
    assert(
      ∀p,q ∈ ℝ: p < q →
      (Mₚ(x₁,...,xₙ) ≤ Mq(x₁,...,xₙ) ∧
      (Mₚ(x₁,...,xₙ) = Mq(x₁,...,xₙ) ↔ ∀i,j: xᵢ = xⱼ))
    )
  } →

  apply(HolderMeanRelations()) →
  apply(HolderMeanInequality(), p=0, q=1) →
  
  assert(
    M₀(x₁,...,xₙ) ≤ M₁(x₁,...,xₙ) ↔
    Gₙ ≤ Aₙ ∧
    (Gₙ = Aₙ ↔ ∀i,j: xᵢ = xⱼ)
  )
}