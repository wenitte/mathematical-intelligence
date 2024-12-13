theorem RiemannZetaContinuation() {
  assert(
    ∀s ∈ ℂ, (Re(s) > 0) → 
    ζ(s) = s/(s-1) - s∫₁^∞ {x}x^(-s-1)dx
    where
    x^(-s-1) = e^(-ln(x)(s+1)) ∧
    {x} denotes fractional_part(x)
  )
} ↔

proof RiemannZetaContinuation() {
  setVar(s: ℂ, σ + it) →
  lemma IntegralRepresentation() {
    assert(
      Re(s) > 1 → integral_form = ζ(s)
    )
  } →
  
  lemma UniformConvergence() {
    setVar(n: ℕ) →
    assert(
      |aₙ| = |∫ₙ^(n+1) s{x}x^(-s-1)dx| →
      |aₙ| ≤ |s|∫ₙ^(n+1)|{x}x^(-s-1)|dx →
      |aₙ| = |s|∫ₙ^(n+1){x}x^(-σ-1)dx →
      |aₙ| ≤ |s|∫ₙ^(n+1)x^(-σ-1)dx →
      |aₙ| = -|s|/σ[x^(-σ)]ₙ^(n+1) →
      |aₙ| = |s|/σ(1/n^σ - 1/(n+1)^σ) →
      |aₙ| = |s|/σ((n+1)^σ - n^σ)/(n^σ(n+1)^σ)
    )
  } →

  lemma MeanValueTheorem() {
    assert(
      ∃θ ∈ [n,n+1]: (n+1)^σ - n^σ = σθ^(σ-1) ∧
      (σ ≤ 1 → σθ^(σ-1) ≤ σn^(σ-1))
    )
  } →

  apply(MeanValueTheorem()) →
  assert(
    |aₙ| ≤ |s|/σ(σn^(σ-1))/(n^σ(n+1)^σ) →
    |aₙ| = |s|/((n+1)^σn) →
    |aₙ| ≤ |s|/n^(σ+1)
  ) →

  lemma CompactConvergence() {
    assert(
      ∀K ⊂ {s: Re(s) > 0}: (K compact) →
      ∃C > 0: |s| ≤ C ∀s ∈ K →
      |Σₙ₌ₘ^∞ aₙ| ≤ C·Σₙ₌ₘ^∞ 1/n^(σ+1)
    )
  } →

  apply(CompactConvergence()) →
  assert(
    series_uniformly_convergent ∧
    analytic_continuation_exists ∧
    unique_continuation_to_half_plane
  )
}