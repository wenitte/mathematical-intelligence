theorem PellRationalApprox() {
  assert(
    ∀n ∈ ℕ: (let S = {pₖ/qₖ | k ∈ ℕ} be best rational approx to √2) ⇒
    (∃a,b ∈ ℕ: p₂ₙ₊₁/q₂ₙ₊₁ = (2a+1)/b ∧ a² + (a+1)² = b²)
  )
} ↔

proof PellRationalApprox() {
  setVar(n: ℕ) →
  
  lemma PellSquareSum() {
    assert(P₂ₙ₊₁ = Pₙ₊₁² + Pₙ²)
  } →

  apply(PellSquareSum()) →
  
  assert(P₂ₙ₊₁² = (Pₙ₊₁² + Pₙ²)²) →
  
  assert(P₂ₙ₊₁² = Pₙ₊₁⁴ + 2Pₙ₊₁²Pₙ² + Pₙ⁴) →
  
  assert(P₂ₙ₊₁² = Pₙ₊₁⁴ + 2Pₙ₊₁²Pₙ² + Pₙ⁴ + 2Pₙ₊₁²Pₙ² - 2Pₙ₊₁²Pₙ²) →
  
  assert(P₂ₙ₊₁² = Pₙ₊₁⁴ - 2Pₙ₊₁²Pₙ² + Pₙ⁴ + 4Pₙ₊₁²Pₙ²) →
  
  assert(P₂ₙ₊₁² = (Pₙ₊₁² - Pₙ²)² + (2Pₙ₊₁Pₙ)²) →
  
  conclude(∃a,b ∈ ℕ: a = Pₙ₊₁² - Pₙ² ∧ b = 2Pₙ₊₁Pₙ)
}