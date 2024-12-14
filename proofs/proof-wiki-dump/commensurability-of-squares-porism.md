theorem CommensurabilitySq_Porism() {
  assert(
    ∀(a,b ∈ ℝ⁺) ⇒ (
      (CommensurableLength(a,b) → CommensurableSquare(a,b)) ∧
      ¬(CommensurableSquare(a,b) → CommensurableLength(a,b))
    )
  )
  where {
    CommensurableLength(x,y) := ∃k ∈ ℚ⁺: x = ky
    CommensurableSquare(x,y) := ∃k ∈ ℚ⁺: x² = ky²
  }
} ↔

proof CommensurabilitySq_Porism() {
  reference(CommensurabilitySq_Theorem) →
  apply(CommensurabilitySq_Theorem) →
  assert(
    ∀(a,b ∈ ℝ⁺): CommensurableLength(a,b) → CommensurableSquare(a,b)
  ) ∧
  assert(
    ∃(a,b ∈ ℝ⁺): CommensurableSquare(a,b) ∧ ¬CommensurableLength(a,b)
  )
}