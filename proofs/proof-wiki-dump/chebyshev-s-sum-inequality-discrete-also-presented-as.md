theorem ChebyshevSumInequality() {
  assert(
    ∀n ∈ ℕ⁺, 
    ∀(a₁,...,aₙ) ∈ ℝⁿ, 
    ∀(b₁,...,bₙ) ∈ ℝⁿ,
    (∀i ∈ {1,...,n-1}: aᵢ ≥ aᵢ₊₁ ∧ bᵢ ≥ bᵢ₊₁) ⇒
    n∑ₖ₌₁ⁿ(aₖbₖ) ≥ (∑ₖ₌₁ⁿaₖ)(∑ₖ₌₁ⁿbₖ)
  )
}

proof ChebyshevSumInequality() {
  setVar(n: ℕ⁺) →
  setVar(a₁,...,aₙ: ℝ) →
  setVar(b₁,...,bₙ: ℝ) →
  
  lemma SignProduct() {
    assert(
      ∀j,k ∈ {1,...,n}: 
      (aⱼ - aₖ)(bⱼ - bₖ) ≥ 0
    )
  } →

  assert(0 ≤ ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿ(aⱼ - aₖ)(bⱼ - bₖ)) →
  assert(= ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿ(aⱼbⱼ - aₖbⱼ - aⱼbₖ + aₖbₖ)) →
  assert(= n∑ⱼ₌₁ⁿaⱼbⱼ - ∑ₖ₌₁ⁿaₖ∑ⱼ₌₁ⁿbⱼ - ∑ⱼ₌₁ⁿaⱼ∑ₖ₌₁ⁿbₖ + n∑ₖ₌₁ⁿaₖbₖ) →
  assert(= 2n∑ₖ₌₁ⁿaₖbₖ - 2(∑ₖ₌₁ⁿaₖ)(∑ₖ₌₁ⁿbₖ)) →
  assert(= n∑ₖ₌₁ⁿaₖbₖ - (∑ₖ₌₁ⁿaₖ)(∑ₖ₌₁ⁿbₖ)) by div(2) →
  
  conclude(n∑ₖ₌₁ⁿaₖbₖ ≥ (∑ₖ₌₁ⁿaₖ)(∑ₖ₌₁ⁿbₖ))
}