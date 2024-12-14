theorem Combination_Sum_Rule_Sequences() {
  assert(
    ∀R[NormedDivisionRing] ∧
    ∀{xₙ, yₙ}[Sequence(R)] ∧
    ∀l,m ∈ R ∧
    (lim[n→∞](xₙ) = l) ∧
    (lim[n→∞](yₙ) = m) ⇒
    (lim[n→∞](xₙ + yₙ) = l + m)
  )
} ↔

proof Combination_Sum_Rule_Sequences() {
  setVar(ε > 0) →
  assert(ε/2 > 0) →
  
  lemma Convergence_X() {
    assert(∃N₁ ∈ ℕ: ∀n > N₁ ⇒ ‖xₙ - l‖ < ε/2)
  } →
  
  lemma Convergence_Y() {
    assert(∃N₂ ∈ ℕ: ∀n > N₂ ⇒ ‖yₙ - m‖ < ε/2)
  } →
  
  setVar(N = max{N₁, N₂}) →
  assert(∀n > N ⇒ [
    ‖(xₙ + yₙ) - (l + m)‖ = 
    ‖(xₙ - l) + (yₙ - m)‖ ≤
    ‖xₙ - l‖ + ‖yₙ - m‖ <
    ε/2 + ε/2 = ε
  ]) →
  
  apply(TriangleInequality(‖(xₙ - l) + (yₙ - m)‖)) →
  
  conclude(
    ∀ε > 0, ∃N ∈ ℕ: ∀n > N ⇒
    ‖(xₙ + yₙ) - (l + m)‖ < ε ⇒
    lim[n→∞](xₙ + yₙ) = l + m
  )
}