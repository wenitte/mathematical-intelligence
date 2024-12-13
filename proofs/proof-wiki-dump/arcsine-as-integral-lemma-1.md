theorem Arcsine_Integral_Lemma() {
  let(sinₐ: ℝ → ℝ) ∧
  let(arcsinₐ: ℝ → ℝ) ∧
  assert(
    ∀x ∈ ℝ ⇒ arcsinₐ(x) = ∫₀ˣ (1/√(1-t²))dt
  )
}

proof Arcsine_Integral_Lemma() {
  setVar(θ: ℝ) →
  let(x = sinₐ(θ)) →
  assert(θ = arcsinₐ(x)) →
  
  lemma Differential_Substitution() {
    assert(dx = cosₐ(θ)dθ) →
    apply(Derivative_Of_Sine())
  } →

  lemma Integration_Steps() {
    assert(∫(1/√(1-x²))dx) →
    assert(= ∫(cosₐ(θ)dθ/√(1-sinₐ²(θ)))) →
    apply(Integration_By_Substitution()) →
    
    assert(= ∫(cosₐ(θ)dθ/√(cosₐ²(θ)))) →
    apply(Sum_Of_Squares_Identity(sinₐ²(θ) + cosₐ²(θ) = 1)) →
    
    assert(= ∫dθ) →
    assert(= θ + C)
  } →

  apply(Integration_Steps()) →
  assert(θ + C = arcsinₐ(x) + C) →
  
  lemma Definite_Integral() {
    assert(∫₀ˣ (1/√(1-t²))dt = arcsinₐ(x)) →
    apply(Fundamental_Theorem_Calculus_Part2())
  } →
  
  apply(Definite_Integral())
}