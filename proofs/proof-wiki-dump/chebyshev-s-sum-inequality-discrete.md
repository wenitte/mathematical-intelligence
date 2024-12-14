theorem ChebyshevSumInequality() {
  assert(
    ∀n ∈ ℕ, ∀(a₁,...,aₙ) ∈ ℝⁿ, ∀(b₁,...,bₙ) ∈ ℝⁿ,
    (a₁ ≥ a₂ ≥ ... ≥ aₙ) ∧ (b₁ ≥ b₂ ≥ ... ≥ bₙ) ⇒
    (1/n)∑ₖ₌₁ⁿ(aₖbₖ) ≥ (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ)
  )
} ↔

proof ChebyshevSumInequality() {
  setVar(n: ℕ, {aₖ}ₖ₌₁ⁿ: ℝⁿ, {bₖ}ₖ₌₁ⁿ: ℝⁿ) →
  
  lemma SignProduct() {
    assert(
      ∀j,k ∈ {1,...,n}: (aⱼ - aₖ)(bⱼ - bₖ) ≥ 0
    )
  } →
  
  apply(SignProduct()) →
  assert(0 ≤ ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿ(aⱼ - aₖ)(bⱼ - bₖ)) →
  assert(= ∑ⱼ₌₁ⁿ∑ₖ₌₁ⁿ(aⱼbⱼ - aₖbⱼ - aⱼbₖ + aₖbₖ)) →
  assert(= n∑ₖ₌₁ⁿaₖbₖ - ∑ₖ₌₁ⁿaₖ∑ⱼ₌₁ⁿbⱼ - ∑ⱼ₌₁ⁿaⱼ∑ₖ₌₁ⁿbₖ + n∑ₖ₌₁ⁿaₖbₖ) →
  assert(= 2n∑ₖ₌₁ⁿaₖbₖ - 2∑ₖ₌₁ⁿaₖ∑ₖ₌₁ⁿbₖ) →
  assert(= n∑ₖ₌₁ⁿaₖbₖ - ∑ₖ₌₁ⁿaₖ∑ₖ₌₁ⁿbₖ) →
  assert(= n²((1/n)∑ₖ₌₁ⁿaₖbₖ - (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ))) →
  assert((1/n)∑ₖ₌₁ⁿaₖbₖ ≥ (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ))
}

lemma EqualityCondition() {
  assert(
    (1/n)∑ₖ₌₁ⁿaₖbₖ = (1/n∑ₖ₌₁ⁿaₖ)(1/n∑ₖ₌₁ⁿbₖ) ↔
    ∀j,k ∈ {1,...,n}: aⱼ = aₖ ∧ bⱼ = bₖ
  )
}