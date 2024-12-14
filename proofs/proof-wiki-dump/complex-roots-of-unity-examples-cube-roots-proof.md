theorem Complex_Cube_Roots_Of_Unity() {
  assert(
    U₃ = {z ∈ ℂ : z³ = 1} ↔ 
    U₃ = {1, -1/2 + (i√3)/2, -1/2 - (i√3)/2}
  )
}

proof Complex_Cube_Roots_Of_Unity() {
  // Initial factorization
  assert(z³ - 1 = (z - 1)(z² + z + 1)) →
  
  // Split into cases
  cases {
    case1: {
      assert(z = 1) →
      assert(1 ∈ U₃)
    }
    case2: {
      assert(z² + z + 1 = 0) →
      apply(QuadraticFormula, {a:1, b:1, c:1}) →
      assert(
        z = (-1 ± √(1² - 4(1)(1)))/(2(1)) →
        z = -1/2 ± (i√3)/2
      )
    }
  } →

  // Define conventional notation
  setVar(ω = -1/2 + (i√3)/2) →
  setVar(ω² = -1/2 - (i√3)/2) →
  
  // Express in exponential form
  assert(
    1 = e^(0iπ/3) ∧
    ω = e^(2iπ/3) ∧
    ω² = e^(4iπ/3)
  ) →
  
  conclude(
    U₃ = {1, ω, ω²}
  )
}