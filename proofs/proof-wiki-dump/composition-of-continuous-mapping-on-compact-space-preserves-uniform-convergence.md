theorem UniformConvergenceComposition() {
  assert(
    let(X: MetricSpace, Y: MetricSpace, Z: MetricSpace) ∧
    isCompact(X) ∧
    ∀φ: (Y → Z) | isContinuous(φ) ∧
    ∀n ∈ ℕ, ∀fn: (X → Y) | isContinuous(fn) ∧
    ∃f: (X → Y) | isUniformlyConvergent(seq(fn), f) →
    isUniformlyConvergent(seq(φ ∘ fn), φ ∘ f)
  )
}

proof UniformConvergenceComposition() {
  byContradiction() {
    assume(¬isUniformlyConvergent(seq(φ ∘ fn), φ ∘ f)) →
    assert(
      ∃ε > 0, ∀n ∈ ℕ, ∃Nn ≥ n, ∃xn ∈ X |
      dZ(φ(fNn(xn)), φ(f(xn))) ≥ ε
    ) →
    
    lemma CompactIsSequentiallyCompact() {
      assert(isCompact(X) → isSequentiallyCompact(X))
    } →
    
    apply(CompactIsSequentiallyCompact()) →
    assert(
      ∃x' ∈ X, ∃(xnm: subsequence(xn)) |
      lim(m→∞, xnm) = x'
    ) →
    
    calc() {
      ε ≤ lim(m→∞, dZ(φ(fNnm(xnm)), φ(f(xnm)))) →
      = dZ(lim(m→∞, φ(fNnm(xnm)), lim(m→∞, φ(f(xnm)))) |
        by(MetricContinuity) →
      = dZ(φ(f(x')), lim(m→∞, φ(f(xnm)))) |
        by(UniformConvergenceOnConvergentSequence) →
      = dZ(φ(f(x')), φ(f(x'))) |
        by(CompositeContinuity) →
      = 0
    } →
    
    assert(contradiction(ε > 0 ∧ ε ≤ 0))
  }
}