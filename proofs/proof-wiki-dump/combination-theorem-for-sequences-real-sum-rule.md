theorem Sequence_Sum_Rule() {
  assert(
    ∀{xₙ}, {yₙ} ∈ ℝ^ℕ →
    (limₙ→∞ xₙ = l ∧ limₙ→∞ yₙ = m) →
    limₙ→∞(xₙ + yₙ) = l + m
  )
}

proof Sequence_Sum_Rule() {
  setVar(ε > 0) →
  assert(ε/2 > 0) →
  
  lemma Limit_Definition_X() {
    assert(
      ∃N₁ ∈ ℕ → ∀n > N₁ →
      |xₙ - l| < ε/2
    )
  } →
  
  lemma Limit_Definition_Y() {
    assert(
      ∃N₂ ∈ ℕ → ∀n > N₂ →
      |yₙ - m| < ε/2
    )
  } →
  
  setVar(N = max{N₁, N₂}) →
  assert(n > N → n > N₁ ∧ n > N₂) →
  
  assert(
    ∀n > N →
    |(xₙ + yₙ) - (l + m)| =
    |(xₙ - l) + (yₙ - m)| ≤
    |xₙ - l| + |yₙ - m| <
    ε/2 + ε/2 = ε
  ) →
  
  apply(Triangle_Inequality) →
  apply(Limit_Definition) →
  
  conclude(
    limₙ→∞(xₙ + yₙ) = l + m
  )
}