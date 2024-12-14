theorem Cauchy_Sequence_Sum() {
  let(R: NormedDivisionRing) ∧
  let({xₙ}: CauchySequence(R)) ∧
  let({yₙ}: CauchySequence(R)) →
  assert({xₙ + yₙ}: CauchySequence(R))
} ↔

proof Cauchy_Sequence_Sum() {
  setVar(ε: ℝ, ε > 0) →
  assert(ε/2 > 0) →
  
  lemma Cauchy_X() {
    assert(∃N₁ ∈ ℕ: ∀n,m > N₁ → ‖xₙ - xₘ‖ < ε/2)
  } →
  
  lemma Cauchy_Y() {
    assert(∃N₂ ∈ ℕ: ∀n,m > N₂ → ‖yₙ - yₘ‖ < ε/2)
  } →
  
  setVar(N = max{N₁, N₂}) →
  
  assert(∀n,m > N → {
    ‖(xₙ + yₙ) - (xₘ + yₘ)‖ =
    ‖(xₙ - xₘ) + (yₙ - yₘ)‖ ≤
    ‖xₙ - xₘ‖ + ‖yₙ - yₘ‖ <
    ε/2 + ε/2 = ε
  }) →
  
  apply(NormTriangleInequality) →
  conclude({xₙ + yₙ}: CauchySequence(R))
}