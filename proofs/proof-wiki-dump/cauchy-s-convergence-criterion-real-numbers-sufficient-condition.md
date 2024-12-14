theorem Cauchy_Convergence_Criterion() {
  assert(
    ∀{xₙ} ∈ ℝ ⋀ isCauchySequence({xₙ}) →
    isConvergent({xₙ})
  )
} ↔

proof Cauchy_Convergence_Criterion_Proof2() {
  setVar(a: ℝ) →
  assert(
    isCauchySequence({aₙ}) → isBounded({aₙ})
  ) →
  
  lemma Bolzano_Weierstrass() {
    assert(
      isBounded({aₙ}) → ∃{aₙᵣ}: isConvergentSubsequence({aₙᵣ})
    )
  } →

  apply(Bolzano_Weierstrass()) →
  assert(∃l ∈ ℝ: aₙᵣ → l as r → ∞) →

  setVar(ε ∈ ℝ₊) →
  assert(
    ∃R ∈ ℝ: ∀r > R: |aₙᵣ - l| < ε/2 ⋀
    ∃N ∈ ℝ: ∀m,n > N: |xₘ - xₙ| ≤ ε/2
  ) →

  assert(
    ∀n > N: |aₙ - l| = |aₙ - aₙᵣ + aₙᵣ - l| ≤
    |aₙ - aₙᵣ| + |aₙᵣ - l| < ε/2 + ε/2 = ε
  ) →

  conclude(
    ∀ε > 0, ∃N ∈ ℝ: ∀n > N: |aₙ - l| < ε →
    {aₙ} → l as n → ∞
  )
}

theorem_end()