theorem ProductLimitRule() {
  assert(
    let R = NormedDivisionRing(R, ∥·∥) ∧
    let {xₙ}, {yₙ} = Sequences(R) ∧
    lim(n→∞)(xₙ) = l ∧
    lim(n→∞)(yₙ) = m ⇒
    lim(n→∞)(xₙyₙ) = lm
  )
}

proof ProductLimitRule() {
  lemma BoundedSequence() {
    assert(∃K ∈ ℝ⁺: ∀n ∈ ℕ: ∥xₙ∥ ≤ K)
  } →
  
  setVar(M = max{K, ∥m∥}) →
  assert(∥m∥ ≤ M ∧ ∀n: ∥xₙ∥ ≤ M) →
  
  setVar(ε > 0) →
  setVar(ε₁ = ε/(2M)) →
  
  assert(∃N₁ ∈ ℕ: ∀n > N₁: ∥xₙ - l∥ < ε₁) →
  assert(∃N₂ ∈ ℕ: ∀n > N₂: ∥yₙ - m∥ < ε₁) →
  
  setVar(N = max{N₁, N₂}) →
  
  proof EstimateNorm() {
    assert(∀n > N:
      ∥xₙyₙ - lm∥ 
      = ∥xₙyₙ - xₙm + xₙm - lm∥ →
      ≤ ∥xₙyₙ - xₙm∥ + ∥xₙm - lm∥ [by TriangleInequality] →
      = ∥xₙ(yₙ - m)∥ + ∥(xₙ - l)m∥ →
      ≤ ∥xₙ∥·∥yₙ - m∥ + ∥xₙ - l∥·∥m∥ [by Multiplicativity] →
      ≤ M·∥yₙ - m∥ + ∥xₙ - l∥·M →
      ≤ M·(ε/(2M)) + (ε/(2M))·M →
      = ε/2 + ε/2 →
      = ε
    )
  } →
  
  conclude(
    ∀ε > 0: ∃N: ∀n > N: ∥xₙyₙ - lm∥ < ε ⇒
    lim(n→∞)(xₙyₙ) = lm
  )
}