theorem BrahmaguptaFibonacciIdentity() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒ 
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
} ↔

proof BrahmaguptaFibonacciIdentity() {
  setVar(a,b,c,d: ℝ) →
  
  lemma LagrangeIdentity() {
    assert(
      ∀n ∈ ℕ, ∀ak,bk ∈ ℝ ⇒
      (∑ₖ₌₁ⁿ ak²)(∑ₖ₌₁ⁿ bk²) - (∑ₖ₌₁ⁿ akbk)² = 
      ∑ᵢ₌₁ⁿ⁻¹ ∑ⱼ₌ᵢ₊₁ⁿ (aibj - ajbi)²
    )
  } →

  apply(LagrangeIdentity(), n=2) →
  assert(
    (a₁² + a₂²)(b₁² + b₂²) - (a₁b₁ + a₂b₂)² = 
    (a₁b₂ - a₂b₁)²
  ) →

  substitute(a₁→a, a₂→b, b₁→c, b₂→d) →
  assert(
    (a² + b²)(c² + d²) - (ac + bd)² = 
    (ad - bc)²
  ) →

  algebraicRearrange() →
  assert(
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
}