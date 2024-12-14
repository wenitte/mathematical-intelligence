theorem ChebyshevSumInequality() {
  assert(
    ∀n ∈ ℕ⁺, ∀(a₁,...,aₙ) ∈ ℝⁿ, ∀(b₁,...,bₙ) ∈ ℝⁿ,
    (∀i,j ∈ {1,...,n}: i < j → aᵢ ≥ aⱼ) ∧
    (∀i,j ∈ {1,...,n}: i < j → bᵢ ≥ bⱼ) →
    (1/n)∑ₖ₌₁ⁿ(aₖbₖ) ≥ (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ)
  )
}

proof ChebyshevSumInequality() {
  setVar(n: ℕ⁺) →
  setVar((a₁,...,aₙ): ℝⁿ) →
  setVar((b₁,...,bₙ): ℝⁿ) →
  
  lemma NonNegativeProducts() {
    assert(
      ∀j,k ∈ {1,...,n}: (aⱼ - aₖ)(bⱼ - bₖ) ≥ 0
    )
  } →

  assert(0 ≤ ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿ(aⱼ - aₖ)(bⱼ - bₖ)) →
  assert(= ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿ(aⱼbⱼ - aₖbⱼ - aⱼbₖ + aₖbₖ)) →
  assert(= ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿaⱼbⱼ - ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿaₖbⱼ - ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿaⱼbₖ + ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿaₖbₖ) →
  assert(= n∑ⱼ₌₁ⁿaⱼbⱼ - (∑ₖ₌₁ⁿaₖ)(∑ⱼ₌₁ⁿbⱼ) - (∑ⱼ₌₁ⁿaⱼ)(∑ₖ₌₁ⁿbₖ) + n∑ₖ₌₁ⁿaₖbₖ) →
  assert(= 2n∑ₖ₌₁ⁿaₖbₖ - 2(∑ₖ₌₁ⁿaₖ)(∑ₖ₌₁ⁿbₖ)) →
  assert(= n∑ₖ₌₁ⁿaₖbₖ - (∑ₖ₌₁ⁿaₖ)(∑ₖ₌₁ⁿbₖ)) →
  assert(= n²[(1/n)∑ₖ₌₁ⁿaₖbₖ - (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ)]) →
  
  conclude((1/n)∑ₖ₌₁ⁿaₖbₖ ≥ (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ))
}