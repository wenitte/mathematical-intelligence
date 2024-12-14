theorem Complex_Cube_Roots() {
  assert(
    U₃ = {z ∈ ℂ : z³ = 1} ↔ {1, ω, ω̄}
    where ω = -1/2 + (i√3)/2
  )
} ↔

proof Complex_Cube_Roots() {
  setVar(z: ℂ) →
  
  lemma Factorization() {
    assert(z³ - 1 = (z - 1)(z² + z + 1))
  } →

  apply(Factorization()) →
  assert(z = 1 ∨ z² + z + 1 = 0) →

  branch z² + z + 1 = 0 {
    apply(QuadraticFormula(a=1, b=1, c=1)) →
    assert(
      z = (-1 ± √(1² - 4(1)(1)))/(2(1)) →
      z = -1/2 ± (i√3)/2
    )
  } →

  combine_branches() →
  assert(
    U₃ = {1, -1/2 + (i√3)/2, -1/2 - (i√3)/2} →
    U₃ = {1, ω, ω̄}
  )
}

lemma QuadraticFormula(a: ℝ, b: ℝ, c: ℝ) {
  assert(
    ax² + bx + c = 0 →
    x = (-b ± √(b² - 4ac))/(2a)
  )
}