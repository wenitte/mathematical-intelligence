theorem Arcsine_Integral() {
  assert(
    ∀x ∈ [-1,1] ⇒ arcsin(x) = ∫[0→x] (1/√(1-t²))dt
  )
} ↔

proof Arcsine_Integral() {
  lemma AnalyticSine() {
    setVar(sinₐ: ℝ→ℝ, analytic_sine) →
    setVar(arcsinₐ: ℝ→ℝ, analytic_arcsine) →
    assert(
      arcsinₐ(x) = ∫[0→x] (1/√(1-t²))dt
    )
  } →

  lemma GeometricSine() {
    setVar(sinᵧ: ℝ→ℝ, geometric_sine) →
    setVar(arcsinᵧ: ℝ→ℝ, geometric_arcsine) →
    assert(
      arcsinᵧ(x) = ∫[0→x] (1/√(1-t²))dt
    )
  } →

  apply(AnalyticSine()) →
  apply(GeometricSine()) →
  assert(
    arcsin(x) = arcsinₐ(x) ∧
    arcsinₐ(x) = arcsinᵧ(x) ∧
    arcsinᵧ(x) = ∫[0→x] (1/√(1-t²))dt
  ) →
  conclude(
    arcsin(x) = ∫[0→x] (1/√(1-t²))dt
  )
}