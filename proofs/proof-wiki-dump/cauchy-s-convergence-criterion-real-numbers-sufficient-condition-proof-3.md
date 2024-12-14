theorem CauchyConvergenceCriterion() {
  assert(
    ∀{xₙ} ∈ ℝ ∧ isCauchySequence({xₙ}) → 
    isConvergent({xₙ})
  )
} ↔

proof CauchyConvergenceCriterion() {
  setVar({aₙ}: CauchySequence(ℝ)) →
  
  assert(
    ∀ε>0 ∃N∈ℕ: ∀m,n≥N → |aₙ - aₘ| < ε
  ) →

  defineSequence({εᵢ}_{i∈ℕ}) {
    assert(ε₀ = 1) ∧
    assert(∀i∈ℕ: εᵢ₊₁ < εᵢ) ∧
    assert(lim[i→∞](εᵢ) = 0)
  } →

  defineSequence({Nᵢ}_{i∈ℕ}) {
    assert(∀i∈ℕ: ∀m,n≥Nᵢ → |aₙ - aₘ| < εᵢ) ∧
    assert(∀i∈ℕ: Nᵢ₊₁ ≥ Nᵢ)
  } →

  defineSequence({uᵢ}_{i∈ℕ}) {
    assert(u₀ = aN₀ + ε₀) ∧
    assert(∀i∈ℕ: uᵢ₊₁ = min{uᵢ, aNᵢ₊₁ + εᵢ₊₁})
  } →

  lemma UpperBoundSequence() {
    assert(∀i∈ℕ: ∀n≥Nᵢ → aₙ ≤ uᵢ)
  } →

  lemma ConvergenceU() {
    assert(isMonotonicDecreasing({uᵢ}) ∧ isBounded({uᵢ})) →
    assert(isConvergent({uᵢ}))
  } →

  defineSequence({lᵢ}_{i∈ℕ}) {
    assert(l₀ = aN₀ - ε₀) ∧
    assert(∀i∈ℕ: lᵢ₊₁ = max{lᵢ, aNᵢ₊₁ - εᵢ₊₁})
  } →

  lemma LowerBoundSequence() {
    assert(∀i∈ℕ: ∀n≥Nᵢ → lᵢ ≤ aₙ)
  } →

  lemma LimitsEqual() {
    assert(∀i∈ℕ: uᵢ₊₁ - lᵢ₊₁ ≤ 2εᵢ₊₁) →
    assert(lim[i→∞](uᵢ) = lim[i→∞](lᵢ))
  } →

  setVar(a = lim[i→∞](uᵢ)) →
  
  assert(
    ∀ε>0 ∃j∈ℕ: ∀n≥Nⱼ → |aₙ - a| < ε
  ) →
  
  conclude(isConvergent({aₙ}))
}