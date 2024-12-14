theorem Cesaro_Summation_Continuous() {
  assert(
    ∀A: (A: ℓ∞ → ℓ∞) ∧ (A is Cesàro summation operator) ⇒
    A ∈ CL(ℓ∞)
  )
} ↔

proof Cesaro_Summation_Continuous() {
  // Well-Definedness
  lemma Well_Defined() {
    setVar(x: ℓ∞) →
    assert(∀n ∈ ℕ: |xₙ| ≤ sup{|xₙ| : n ∈ ℕ} = ||x||∞) →
    assert(|Σᵢ₌₁ⁿ(xᵢ/n)| ≤ (1/n)Σᵢ₌₁ⁿ|xᵢ|) by Triangle_Inequality →
    assert((1/n)Σᵢ₌₁ⁿ|xᵢ| ≤ (1/n)Σᵢ₌₁ⁿsup{|xₙ| : n ∈ ℕ}) →
    assert((1/n)Σᵢ₌₁ⁿsup{|xₙ| : n ∈ ℕ} = (1/n)n||x||∞ = ||x||∞) →
    conclude(Ax ∈ ℓ∞)
  }

  // Linearity
  lemma Linearity() {
    setVar(x,y: ℓ∞, λ: ℂ) →
    assert(x + λy ∈ ℓ∞) by Vector_Space_Properties →
    assert(A(x + λy) = {(x₁ + λy₁), (x₁+x₂+λ(y₁+y₂))/2, ...}) →
    assert(A(x + λy) = A(x) + λA(y)) by Vector_Space_Properties →
    conclude(A is linear)
  }

  // Continuity
  lemma Continuity() {
    setVar(x: ℓ∞) →
    assert(||Ax||∞ = sup{|Σᵢ₌₁ⁿ(xᵢ/n)| : n ∈ ℕ}) →
    assert(||Ax||∞ ≤ ||x||∞) →
    conclude(A is continuous) by Continuous_Linear_Transform_Theorem
  }

  apply(Well_Defined()) →
  apply(Linearity()) →
  apply(Continuity()) →
  conclude(A ∈ CL(ℓ∞))
}