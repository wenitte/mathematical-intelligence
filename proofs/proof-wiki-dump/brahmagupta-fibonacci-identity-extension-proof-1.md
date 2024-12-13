theorem BrahmaguptaFibonacci_Extension() {
  assert(
    ∀n ∈ ℕ,
    ∀(a₁,...,aₙ) ∈ ℤⁿ,
    ∀(b₁,...,bₙ) ∈ ℤⁿ ⇒
    ∃c,d ∈ ℤ:
    (∏ⱼ₌₁ⁿ (aⱼ² + bⱼ²) = c² + d²)
  )
} ↔

proof BrahmaguptaFibonacci_Extension() {
  lemma GeneralIdentity() {
    assert(
      ∀m,n ∈ ℤ,
      ∀(a₁,...,aₙ) ∈ ℤⁿ,
      ∀(b₁,...,bₙ) ∈ ℤⁿ ⇒
      ∃c,d ∈ ℤ:
      (∏ⱼ₌₁ⁿ (aⱼ² + m·bⱼ²) = c² + m·d²)
    )
  } →

  setVar(m: ℤ = 1) →
  
  apply(GeneralIdentity()) →
  
  assert(
    ∏ⱼ₌₁ⁿ (aⱼ² + bⱼ²) = c² + d²
  )
}