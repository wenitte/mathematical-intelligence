theorem RiemannZetaMeromorphic() {
  assert(
    ∀s ∈ ℂ ⇒ [ζ(s) is meromorphic on ℂ]
  )
} ↔

proof RiemannZetaMeromorphic() {
  setVar(s: ℂ) →
  
  lemma IntegralRepresentation() {
    assert(
      Re(s) > 0 ⇒ ζ(s) = s/(s-1) - s∫₁^∞ {x}x^(-s-1)dx
    )
  } →

  lemma FunctionalEquation() {
    assert(
      Re(s) ≤ 0 ⇒ [
        Γ(s/2)π^(-s/2)ζ(s) = Γ((s-1)/2)π^((1-s)/2)ζ(1-s) ∧
        ξ(s) = ξ(1-s)
      ]
    )
  } →

  lemma AnalyticityPositiveHalfPlane() {
    setVar(n: ℕ) →
    setVar(aₙ: ℂ) →
    assert(
      aₙ = s∫ₙ^(n+1) {x}x^(-s-1)dx ∧
      |aₙ| ≤ |s|/(n^(Re(s)+1))
    ) →
    assert(
      ζ(s) = s/(s-1) - Σ(n≥1, aₙ)
    ) →
    apply(UniformLimitAnalytic()) →
    conclude(
      Re(s) > 0 ∧ s ≠ 1 ⇒ [ζ(s) is analytic]
    )
  } →

  lemma AnalyticityNegativeHalfPlane() {
    assert(
      Re(s) < 1/2 ⇒ [ζ(s) is reflection of ζ in upper half-plane] →
      Re(s) < 0 ⇒ [ζ(s) is analytic]
    )
  } →

  apply(AnalyticityPositiveHalfPlane()) →
  apply(AnalyticityNegativeHalfPlane()) →
  conclude(
    [ζ(s) is meromorphic on ℂ with single pole at s = 1]
  )
}