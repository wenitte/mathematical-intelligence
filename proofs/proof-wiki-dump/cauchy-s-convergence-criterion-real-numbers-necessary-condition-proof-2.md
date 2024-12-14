theorem Cauchy_Convergence_Necessary() {
  assert(
    ∀{xₙ} ∈ ℝ^ℕ ∧ 
    (∃l ∈ ℝ: {xₙ} → l) ⇒
    isCauchySequence({xₙ})
  )
}

proof Cauchy_Convergence_Necessary() {
  setVar({xₙ}: ℝ^ℕ) →
  setVar(l: ℝ, {xₙ} → l) →
  setVar(ε > 0) →
  assert(ε/2 > 0) →
  
  lemma Convergence_Definition() {
    assert(
      ∃N ∈ ℕ: ∀n > N: |xₙ - l| < ε/2
    )
  } →

  apply(Convergence_Definition()) →
  setVar(m > N, n > N) →
  
  assert(|xₙ - xₘ| = |xₙ - l + l - xₘ|) →
  
  lemma Triangle_Inequality() {
    assert(
      |xₙ - l + l - xₘ| ≤ |xₙ - l| + |l - xₘ|
    )
  } →
  
  apply(Triangle_Inequality()) →
  assert(|xₙ - l| + |l - xₘ| < ε/2 + ε/2) →
  assert(ε/2 + ε/2 = ε) →
  
  conclude(
    ∀ε > 0: ∃N ∈ ℕ: ∀m,n > N: |xₙ - xₘ| < ε ⇒
    isCauchySequence({xₙ})
  )
}