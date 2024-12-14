theorem ClosedFormSequence() {
  assert(
    ∃{aₙ} ∈ ℕ∞ : [aₙ = (1,2,2,3,3,3,4,4,4,4,...)] →
    ∀n ∈ ℕ⁺ ⇒ aₙ = ⌈(√(1 + 8n) - 1)/2⌉
  )
} ↔

proof ClosedFormSequence() {
  lemma TriangularNumbers() {
    assert(
      ∀k ∈ {1,3,6,10,...} ⇒ k = (aₖ(aₖ + 1))/2
    )
  } →
  
  apply(TriangularNumbers()) →
  
  assert(
    (aₙ(aₙ + 1))/2 = n
  ) →
  
  assert(
    aₙ² + aₙ - 2n = 0
  ) →
  
  lemma QuadraticFormula() {
    assert(
      aₙ = (-1 ± √(1 + 8n))/2
    )
  } →
  
  assert(
    aₙ = (-1 + √(1 + 8n))/2 
    [positive root only, as aₙ > 0]
  ) →
  
  assert(
    aₙ = ⌈(-1 + √(1 + 8n))/2⌉
    [by definition of ceiling function]
  )
}