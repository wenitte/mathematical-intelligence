theorem BoundAnalyticFunctionDerivatives() {
  assert(
    ∀f: ℂ→ℂ, ∀z₀∈ℂ, ∀r∈ℝ₊, ∀t∈ℂ →
    (isAnalytic(f, Circle(z₀,r)) ∧ isAnalytic(f, Interior(Circle(z₀,r))) ∧
     |t - z₀| < r) ⇒
    ∃M∈ℝ: ∀n∈ℕ: |f⁽ⁿ⁾(t)| ≤ (M·r·n!)/(r - |t - z₀|)ⁿ⁺¹
  )
}

proof BoundAnalyticFunctionDerivatives() {
  lemma AnalyticFunctionBoundedOnCircle() {
    assert(
      ∀f: ℂ→ℂ, ∀z₀∈ℂ, ∀r∈ℝ₊ →
      isAnalytic(f, Circle(z₀,r)) ⇒ isBounded(f, Circle(z₀,r))
    )
  } →

  setVar(Γ: Circle(z₀,r)) →
  assert(isAnalytic(f, Γ) ∧ isAnalytic(f, Interior(Γ))) →
  assert(t ∈ Interior(Γ)) →
  
  apply(CauchyIntegralFormula) →
  assert(f⁽ⁿ⁾(t) = (n!/(2πi))∫_Γ f(z)/(z-t)ⁿ⁺¹ dz) →
  
  apply(AnalyticFunctionBoundedOnCircle()) →
  assert(∃M∈ℝ₊: ∀z∈Γ: |f(z)| ≤ M) →
  
  assert(0 < r - |t - z₀|) →
  assert(∀z∈Γ: r - |t - z₀| ≤ |z - t|) →
  
  applyInequality(|f⁽ⁿ⁾(t)| ≤ (n!/(2π))∫_Γ |f(z)|/|z-t|ⁿ⁺¹ |dz|) →
  applyInequality(≤ (n!/(2π))∫_Γ M/|z-t|ⁿ⁺¹ |dz|) →
  applyInequality(≤ (n!/(2π))∫_Γ M/(r - |t - z₀|)ⁿ⁺¹ |dz|) →
  applyInequality(= (n!/(2π))·(M/(r - |t - z₀|)ⁿ⁺¹)·∫_Γ |dz|) →
  applyInequality(= (n!/(2π))·(M/(r - |t - z₀|)ⁿ⁺¹)·2πr) →
  assert(= (M·r·n!)/(r - |t - z₀|)ⁿ⁺¹)
}