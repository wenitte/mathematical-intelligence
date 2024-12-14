theorem Complex_Sequence_Sum_Rule() {
  assert(
    ∀(zₙ, wₙ) ∈ ℂ × ℂ ∧
    lim(n→∞)[zₙ] = c ∧
    lim(n→∞)[wₙ] = d
    ⇒
    lim(n→∞)[zₙ + wₙ] = c + d
  )
} ↔

proof Complex_Sequence_Sum_Rule() {
  setVar(ε > 0) →
  assert(ε/2 > 0) →
  
  lemma Limit_Definition_Z() {
    assert(∃N₁ ∈ ℕ : ∀n > N₁ ⇒ |zₙ - c| < ε/2)
  } →
  
  lemma Limit_Definition_W() {
    assert(∃N₂ ∈ ℕ : ∀n > N₂ ⇒ |wₙ - d| < ε/2)
  } →
  
  setVar(N = max{N₁, N₂}) →
  assert(∀n > N ⇒ n > N₁ ∧ n > N₂) →
  
  assert(
    ∀n > N ⇒
    |(zₙ + wₙ) - (c + d)| =
    |(zₙ - c) + (wₙ - d)| ≤
    |zₙ - c| + |wₙ - d|
  ) →
  
  apply(Triangle_Inequality_Complex) →
  
  assert(
    |zₙ - c| + |wₙ - d| <
    ε/2 + ε/2 = ε
  ) →
  
  conclude(lim(n→∞)[zₙ + wₙ] = c + d)
}