theorem BrahmaguptaFibonacciExtension() {
  assert(
    ∀(a₁,...,aₙ,b₁,...,bₙ ∈ ℤ) ⇒ 
    ∃(c,d ∈ ℤ)[∏ⱼ₌₁ⁿ(aⱼ² + bⱼ²) = c² + d²]
  )
} ↔

proof BrahmaguptaFibonacciExtension() {
  setVar(j: ℕ, 1 ≤ j ≤ n) →
  assert(zⱼ = aⱼ + i·bⱼ) →
  setVar(c,d ∈ ℂ) →
  assert(c + i·d = ∏ⱼ₌₁ⁿ zⱼ) →
  
  lemma IntegerProperty() {
    assert(aⱼ,bⱼ ∈ ℤ ⇒ c,d ∈ ℤ)
  } →

  assert(c² + d² = |c + i·d|²) →
  apply(ComplexModulusDef) →
  
  assert(|c + i·d|² = |∏ⱼ₌₁ⁿ zⱼ|²) →
  apply(ProductModulusTheorem) →
  
  assert(|∏ⱼ₌₁ⁿ zⱼ|² = ∏ⱼ₌₁ⁿ |zⱼ|²) →
  assert(∏ⱼ₌₁ⁿ |zⱼ|² = ∏ⱼ₌₁ⁿ |aⱼ + i·bⱼ|²) →
  apply(ComplexModulusDef) →
  
  assert(∏ⱼ₌₁ⁿ |aⱼ + i·bⱼ|² = ∏ⱼ₌₁ⁿ(aⱼ² + bⱼ²)) →
  apply(IntegerProperty()) →
  
  conclude(∏ⱼ₌₁ⁿ(aⱼ² + bⱼ²) = c² + d² ∧ c,d ∈ ℤ)
}