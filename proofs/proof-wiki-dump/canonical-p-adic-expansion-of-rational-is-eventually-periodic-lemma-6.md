theorem Canonical_Padic_Expansion_Periodic_Lemma_6() {
  assert(
    ∀x ∈ Qₚ,
    IsEventuallyPeriodic(CanonicalExpansion(x)) →
    ∃r ∈ ℚ, ∃n ∈ ℤ, ∃y ∈ ℤₚ: (
      x = r + pⁿy ∧
      IsPeriodic(CanonicalExpansion(y))
    )
  )
} ↔

proof Canonical_Padic_Expansion_Periodic_Lemma_6() {
  setVar(x: Qₚ) →
  let(expansion = CanonicalExpansion(x)) →
  
  lemma EventuallyPeriodicProperty() {
    assert(
      ∃k,n ∈ ℤ≥0, ∀s ∈ ℤ≥0, ∀j ∈ {0,...,k-1}:
      expansion[n + j + sk] = expansion[n + j]
    )
  } →

  let(m: ℤ≥0) →
  assert(x = ∑_{i=-m}^∞ dᵢpⁱ) →

  define(r := match {
    case -m = n: 0
    case -m < n: ∑_{i=-m}^{n-1} dᵢpⁱ
  }) →

  define(y := ∑_{i=n}^∞ dᵢp^{i-n}) →
  
  assert(x = r + pⁿy) →
  assert(r ∈ ℚ) →
  
  lemma ReindexY() {
    assert(y = ∑_{i=0}^∞ d_{i+n}pⁱ) →
    assert(y ∈ ℤₚ)
  } →

  apply(EventuallyPeriodicProperty()) →
  assert(IsPeriodic(CanonicalExpansion(y)))
}