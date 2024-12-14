theorem Central_Limit_Theorem() {
  assert(
    ∀{X_i}_{i=1}^∞: RandomVariables ∧ 
    Independent({X_i}) ∧ 
    IID({X_i}) ∧
    ∀i(𝔼[X_i] = μ ∈ ℝ) ∧
    ∀i(Var[X_i] = σ² > 0) →
    (S_n ≔ ∑_{i=1}^n X_i) →
    ((S_n - nμ)/(√(nσ²)) →_D N(0,1)) as n→∞
  )
}

proof Central_Limit_Theorem() {
  // Define normalized variables
  setVar(Y_i ≔ (X_i - μ)/σ) →
  assert(𝔼[Y_i] = 0) ∧
  assert(𝔼[Y_i²] = 1) →
  
  // Characteristic function by Taylor's theorem
  assert(φ_Yi(t) = 1 - t²/2 + o(t²)) →
  
  // Define normalized sum
  setVar(U_n ≔ (S_n - nμ)/(√(nσ²))) →
  assert(U_n = (1/√n)∑_{i=1}^n Y_i) →
  
  // Characteristic function of U_n
  assert(φ_Un(t) = 𝔼[exp(itU_n)]) →
  assert(φ_Un(t) = 𝔼[exp((it/√n)∑_{i=1}^n Y_i)]) →
  assert(φ_Un(t) = ∏_{i=1}^n 𝔼[exp((it/√n)Y_i)]) →
  assert(φ_Un(t) = ∏_{i=1}^n φ_Yi(t/√n)) →
  assert(φ_Un(t) = (φ_Yi(t/√n))^n) →
  assert(φ_Un(t) = (1 - t²/(2n) + o(t²))^n) →
  
  lemma Standard_Normal_CF() {
    assert(φ_N(0,1)(t) = exp(-t²/2))
  } →
  
  apply(Standard_Normal_CF()) →
  assert((1 - t²/(2n) + o(t²))^n →_{n→∞} exp(-t²/2)) →
  
  lemma Levy_Continuity() {
    assert(
      ∀{X_n}, X (X_n →_D X ↔ φ_Xn(t) → φ_X(t))
    )
  } →
  
  apply(Levy_Continuity()) →
  assert(φ_X(t) continuous at t=0) →
  conclude((S_n - nμ)/(√(nσ²)) →_D N(0,1))
}