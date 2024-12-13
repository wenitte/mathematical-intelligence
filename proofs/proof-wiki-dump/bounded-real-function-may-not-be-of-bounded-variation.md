theorem NotNecessarilyBoundedVariation() {
  assert(
    ∀a,b ∈ ℝ, a < b, ∀f: [a,b] → ℝ, 
    (f is bounded) ⇏ (f is of bounded variation)
  )
} ↔

proof NotNecessarilyBoundedVariation() {
  setVar(a: ℝ = 0) ∧ setVar(b: ℝ = 1) →
  define(f: [0,1] → ℝ) {
    f(x) = case(x) {
      x ∈ ℚ: 1,
      x ∉ ℚ: 0
    }
  } →
  
  define(V_f(P,[0,1])) {
    ∀P = {x₀,x₁,...,xₙ}, 0 = x₀ < x₁ < ... < xₙ = 1,
    V_f(P,[0,1]) = Σᵢ₌₁ⁿ |f(xᵢ) - f(xᵢ₋₁)|
  } →
  
  lemma SubdivisionSequence() {
    assert(
      ∃{Pₙ} sequence of subdivisions:
      lim(n→∞) V_f(Pₙ,[0,1]) = ∞
    )
  } →
  
  construct(Pₙ) {
    ∀n ∈ ℕ:
    Pₙ = {xᵢ}₀≤ᵢ≤ₙ₊₂ where
    x₀ = 0 ∧ xₙ₊₂ = 1 ∧
    ∀i ∈ [1,n+1]: 
      (i odd → xᵢ ∈ (ℝ\ℚ) ∧ xᵢ₋₁ < xᵢ < 1) ∧
      (i even → xᵢ ∈ ℚ ∧ xᵢ₋₁ < xᵢ < 1)
  } →
  
  assert(
    ∀i ∈ [1,n+1]:
    |f(xᵢ) - f(xᵢ₋₁)| = 1
  ) →
  
  prove(
    V_f(Pₙ,[0,1]) ≥ Σᵢ₌₁ⁿ⁺¹ |f(xᵢ) - f(xᵢ₋₁)| = n + 1
  ) →
  
  conclude(
    lim(n→∞) V_f(Pₙ,[0,1]) = ∞
  )
}