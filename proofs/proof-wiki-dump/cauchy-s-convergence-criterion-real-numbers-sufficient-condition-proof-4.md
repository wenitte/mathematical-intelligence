theorem CauchyConvergenceCriterion() {
  assert(
    ∀{xₙ} ∈ ℝ ∧ isCauchySequence({xₙ}) ⇒ isConvergent({xₙ})
  )
} ↔

proof CauchyConvergenceCriterion() {
  setVar({aₙ}: ℝ, isCauchySequence({aₙ})) →
  
  lemma BoundedCauchy() {
    assert(isCauchySequence({aₙ}) ⇒ isBounded({aₙ}))
  } →
  apply(BoundedCauchy()) →
  
  construct({bₙ}: subsequence({aₙ})) {
    setVar(m ∈ ℕ) →
    define(Sₘ = {aₙ: n ≥ m}) →
    assert(∀m: bₘ = sup(Sₘ))
  } →
  
  assert(∀m: Sₘ₊₁ ⊆ Sₘ) →
  assert(∀m: sup(Sₘ₊₁) ≤ sup(Sₘ)) →
  assert(isDecreasing({bₘ})) →
  assert(∀m: bₘ ≥ aₘ) →
  
  lemma MonotoneConvergence() {
    assert(isDecreasing({bₘ}) ∧ isBoundedBelow({bₘ}) ⇒ isConvergent({bₘ}))
  } →
  apply(MonotoneConvergence()) →
  
  setVar(l = lim({bₘ})) →
  setVar(ε ∈ ℝ₊) →
  
  assert(∃N₁ ∈ ℕ: ∀m,n ≥ N₁ ⇒ |aₘ - aₙ| < ε) →
  assert(∃N₂ ∈ ℕ: ∀m ≥ N₂ ⇒ |l - bₙ| < ε) →
  
  setVar(N = max{N₁, N₂}) →
  assert(∃M ≥ N: bₙ - ε < aₘ ≤ bₙ) →
  
  assert(∀n ≥ N: |aₙ - l| = |aₙ - aₘ + aₘ - bₙ + bₙ - l|) →
  apply(TriangleInequality()) →
  assert(|aₙ - l| ≤ |aₙ - aₘ| + |aₘ - bₙ| + |bₙ - l| < 3ε) →
  
  lemma ConvergenceByError() {
    assert(∃k ∈ ℝ₊: |aₙ - l| < kε ⇒ lim({aₙ}) = l)
  } →
  apply(ConvergenceByError()) →
  
  conclude(isConvergent({aₙ}))
}