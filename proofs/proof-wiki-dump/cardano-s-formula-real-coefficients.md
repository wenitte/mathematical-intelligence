theorem Cardanos_Formula_Real_Coefficients() {
  assert(
    ∀a,b,c,d ∈ ℝ, a ≠ 0 ⇒
    let P := ax³ + bx² + cx + d = 0 ∧
    let Q := (3ac - b²)/(9a²) ∧
    let R := (9abc - 27a²d - 2b³)/(54a³) ∧
    let D := Q³ + R² ⇒
    (D > 0 → ∃!x₁ ∈ ℝ ∧ ∃x₂,x₃ ∈ ℂ: x₂ = conj(x₃)) ∧
    (D = 0 → ∀x₁,x₂,x₃ ∈ ℝ ∧ ∃i,j: xᵢ = xⱼ) ∧
    (D < 0 → ∀x₁,x₂,x₃ ∈ ℝ ∧ x₁ ≠ x₂ ≠ x₃)
  )
}

proof Cardanos_Formula_Real_Coefficients() {
  setVar(S := ∛(R + √(Q³ + R²))) →
  setVar(T := ∛(R - √(Q³ + R²))) →
  
  lemma Zero_Discriminant() {
    assert(D = 0 ⇒ 
      S = T = ∛R ∧
      x₁ = 2∛R - b/(3a) ∧
      x₂ = x₃ = -∛R - b/(3a)
    )
  } →

  lemma Positive_Discriminant() {
    assert(D > 0 ⇒
      S,T ∈ ℝ ∧ S ≠ T ∧
      x₁ = S + T - b/(3a) ∧
      x₂ = -(S+T)/2 - b/(3a) + (i√3/2)(S-T) ∧
      x₃ = -(S+T)/2 - b/(3a) - (i√3/2)(S-T)
    )
  } →

  lemma Negative_Discriminant() {
    assert(D < 0 ⇒
      ∃E > 0: √D = ±iE ∧
      let p + iq := ∛(R + iE) ⇒
      x₁ = 2p - b/(3a) ∧
      x₂ = -p - √3q - b/(3a) ∧
      x₃ = -p + √3q - b/(3a)
    )
  } →

  apply(Zero_Discriminant()) ∧
  apply(Positive_Discriminant()) ∧
  apply(Negative_Discriminant()) →
  assert(conclusion)
}