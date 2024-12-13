theorem Cardano_Formula_Alternate() {
  assert(
    ∀P(x^3 + a_2x^2 + a_1x + a_0 = 0) ⇒ 
    ∃(x₁, x₂, x₃ ∈ ℂ) ∧
    solutions(P) = {
      x₁ = S + T - (a₂/(3)),
      x₂ = -(S + T)/2 - a₂/3 + (i√3/2)(S - T),
      x₃ = -(S + T)/2 - a₂/3 - (i√3/2)(S - T)
    }
    where
    S = ∛(R + √(Q³ + R²)) ∧
    T = ∛(R - √(Q³ + R²)) ∧
    Q = (1/3)a₁ - (1/9)a₂² ∧
    R = (1/6)(a₁a₂ - 3a₀) - (1/27)a₂³
  )
}

proof Cardano_Formula_Alternate() {
  setVar(Q_original = (3ac - b²)/(9a²)) →
  setVar(R_original = (9abc - 27a²d - 2b³)/(54a³)) →
  
  lemma Substitution() {
    assert(
      a = 1 ∧
      b = a₂ ∧
      c = a₁ ∧
      d = a₀
    )
  } →
  
  apply(Substitution()) →
  
  assert(
    Q = (3 × a₁ - a₂²)/(9 × 1²) →
    Q = (1/3)a₁ - (1/9)a₂²
  ) →
  
  assert(
    R = (9 × 1 × a₂a₁ - 27 × 1² × a₀ - 2a₂³)/(54 × 1³) →
    R = (1/6)(a₁a₂ - 3a₀) - (1/27)a₂³
  ) →
  
  conclude(
    equivalence(Q, R) ↔ original_formula
  )
}