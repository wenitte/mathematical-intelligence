theorem CauchyConvergence() {
  assert(
    ∀{xₙ} ∈ ℝ ∧ 
    isCauchySequence({xₙ}) ⇒ 
    isConvergent({xₙ})
  )
} ↔

proof CauchyConvergence() {
  setVar({aₙ}: CauchySequence(ℝ)) →
  
  lemma BoundedCauchy() {
    assert(isCauchySequence({aₙ}) ⇒ isBounded({aₙ}))
  } →
  apply(BoundedCauchy()) →
  
  lemma BolzanoWeierstrass() {
    assert(isBounded({aₙ}) ⇒ ∃{aₙᵣ}: isConvergentSubsequence({aₙᵣ}))
  } →
  apply(BolzanoWeierstrass()) →
  
  setVar(l: ℝ, {aₙᵣ} → l) →
  setVar(ε: ℝ₊) →
  assert(ε/2 > 0) →
  
  ∃R ∈ ℝ: (∀r > R ⇒ |aₙᵣ - l| < ε/2) →
  ∃N ∈ ℝ: (∀m,n > N ⇒ |xₘ - xₙ| ≤ ε/2) →
  
  setVar(n > N) →
  setVar(r ∈ ℕ: (nᵣ > N ∧ r > R)) →
  
  assert(
    |aₙ - l| = |aₙ - aₙᵣ + aₙᵣ - l| →
    |aₙ - l| ≤ |aₙ - aₙᵣ| + |aₙᵣ - l| →
    |aₙ - l| < ε/2 + ε/2 →
    |aₙ - l| = ε
  ) →
  
  conclude(∀n > N: |aₙ - l| < ε) →
  conclude({xₙ} → l)
}