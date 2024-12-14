theorem Complex_Sequence_Null_Power_Equivalent() {
  assert(
    ∀{zₙ} ∈ ℂℕ, ∀k ∈ ℕ ⇒ 
    (lim[n→∞]zₙ = 0 ↔ lim[n→∞]zₙᵏ = 0)
  )
} ↔

proof Complex_Sequence_Null_Power_Equivalent() {
  // Necessary Condition (→)
  assume(lim[n→∞]zₙ = 0) →
  setVar(ε > 0) →
  ∃N ∈ ℕ: ∀n ≥ N ⇒ |zₙ| < ε^(1/k) →
  assert(|zₙ|ᵏ < ε) →
  apply(Power_Complex_Modulus_Theorem()) →
  assert(|zₙᵏ| < ε) →
  conclude(lim[n→∞]zₙᵏ = 0) →

  // Sufficient Condition (←)
  assume(lim[n→∞]zₙᵏ = 0) →
  setVar(ε > 0) →
  ∃N ∈ ℕ: ∀n ≥ N ⇒ |zₙᵏ| < εᵏ →
  apply(Power_Complex_Modulus_Theorem()) →
  assert(|zₙ|ᵏ < εᵏ) →
  assert(|zₙ| < ε) →
  conclude(lim[n→∞]zₙ = 0) →
  
  // Final Conclusion
  assert(lim[n→∞]zₙ = 0 ↔ lim[n→∞]zₙᵏ = 0)
}