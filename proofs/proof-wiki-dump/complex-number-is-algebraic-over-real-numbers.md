theorem Complex_Number_Is_Algebraic() {
  assert(
    ∀z ∈ ℂ ⇒ isAlgebraic(z, ℝ)
  )
} ↔

proof Complex_Number_Is_Algebraic() {
  setVar(z: ℂ) →
  assert(z = a + i⋅b where a,b ∈ ℝ) →
  setVar(z̄: ℂ) →
  assert(z̄ = a - i⋅b) →
  
  lemma Complex_Conjugate_Product() {
    assert(z⋅z̄ = a² + b²)
  } →
  
  lemma Complex_Conjugate_Sum() {
    assert(z + z̄ = 2a)
  } →
  
  apply(Complex_Conjugate_Product()) →
  apply(Complex_Conjugate_Sum()) →
  
  setVar(p: ℝ[X]) →
  assert(p(X) = X² - 2a⋅X + (a² + b²)) →
  assert(p(z) = 0 ∧ p(z̄) = 0) →
  assert(∃p ∈ ℝ[X] | p(z) = 0 ∧ deg(p) > 0) →
  assert(isAlgebraic(z, ℝ))
}