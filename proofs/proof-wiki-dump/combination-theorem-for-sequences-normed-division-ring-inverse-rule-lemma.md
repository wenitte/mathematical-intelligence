theorem InverseSequenceLimitLemma() {
  assert(
    ∀R[NormedDivisionRing] ∧
    ∀{xₙ}[Sequence(R)] ∧
    ∀{yₙ}[Subsequence({xₙ})] ∧
    (lim[n→∞] xₙ = l) ∧
    (l ≠ 0) ∧
    (∀n: yₙ ≠ 0) ⇒
    (lim[n→∞] yₙ⁻¹ = l⁻¹)
  )
} ↔

proof InverseSequenceLimitLemma() {
  apply(LimitSubsequenceTheorem()) →
  assert(lim[n→∞] yₙ = l) →
  
  setVar(ε > 0) →
  setVar(ε' = (ε·‖l‖²)/2) →
  assert(ε' > 0) →
  
  apply(SequenceConvergence()) →
  assert(∃N₁ ∈ ℕ: ∀n > N₁ ⇒ ‖yₙ - l‖ < ε') →
  
  apply(SequenceConvergesWithinHalfLimit()) →
  assert(∃N₂ ∈ ℕ: ∀n > N₂ ⇒ ‖l‖/2 < ‖yₙ‖) →
  
  setVar(N = max{N₁, N₂}) →
  assert(∀n > N ⇒ (
    ‖yₙ - l‖ < ε' ∧
    1 < (2·‖yₙ‖)/‖l‖
  )) →
  
  chainEquality(
    ‖yₙ⁻¹ - l⁻¹‖ <
    ((2·‖yₙ‖)/‖l‖)·‖yₙ⁻¹ - l⁻¹‖ =
    (2/‖l‖²)·(‖yₙ‖·‖yₙ⁻¹ - l⁻¹‖·‖l‖) =
    (2/‖l‖²)·‖yₙ(yₙ⁻¹ - l⁻¹)l‖ =
    (2/‖l‖²)·‖yₙyₙ⁻¹l - yₙl⁻¹l‖ =
    (2/‖l‖²)·‖l - yₙ‖ <
    (2/‖l‖²)·ε' =
    (2/‖l‖²)·((ε·‖l‖²)/2) =
    ε
  ) →
  
  conclude(lim[n→∞] yₙ⁻¹ = l⁻¹)
}