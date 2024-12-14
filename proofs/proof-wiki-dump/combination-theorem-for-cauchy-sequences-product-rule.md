theorem ProductCauchy() {
  assert(
    ∀R[NormedDivisionRing] ∧
    ∀(xₙ, yₙ)[Sequence(R)] ∧
    isCauchy(xₙ) ∧ isCauchy(yₙ) ⇒
    isCauchy(xₙyₙ)
  )
} ↔

proof ProductCauchy() {
  lemma BoundedSequences() {
    assert(isCauchy(xₙ) → ∃K₁[ℝ⁺]: ∀n[ℕ]: ‖xₙ‖ ≤ K₁) →
    assert(isCauchy(yₙ) → ∃K₂[ℝ⁺]: ∀n[ℕ]: ‖yₙ‖ ≤ K₂) →
    setVar(K := max{K₁,K₂}) →
    assert(∀n[ℕ]: ‖xₙ‖ ≤ K ∧ ‖yₙ‖ ≤ K)
  } →

  setVar(ε > 0) →
  setVar(ε' := ε/(2K)) →
  
  lemma CauchyConditions() {
    assert(∃N₁[ℕ]: ∀n,m > N₁: ‖xₙ - xₘ‖ < ε') →
    assert(∃N₂[ℕ]: ∀n,m > N₂: ‖yₙ - yₘ‖ < ε') →
    setVar(N := max{N₁,N₂})
  } →

  assert(∀n,m > N: 
    ‖xₙyₙ - xₘyₘ‖ 
    = ‖xₙyₙ - xₙyₘ + xₙyₘ - xₘyₘ‖ →
    ≤ ‖xₙyₙ - xₙyₘ‖ + ‖xₙyₘ - xₘyₘ‖ [by NormTriangleInequality] →
    = ‖xₙ(yₙ - yₘ)‖ + ‖(xₙ - xₘ)yₘ‖ →
    = ‖xₙ‖·‖yₙ - yₘ‖ + ‖xₙ - xₘ‖·‖yₘ‖ [by NormMultiplicativity] →
    ≤ K·ε' + ε'·K →
    = ε/2 + ε/2 →
    = ε
  ) →

  conclude(isCauchy(xₙyₙ))
}