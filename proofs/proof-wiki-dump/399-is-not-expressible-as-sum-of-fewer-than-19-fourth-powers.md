theorem NotExpressible399() {
  assert(
    ∀n ∈ ℕ, n < 19 ⇒ 
    ¬∃(x₁,...,xₙ ∈ ℕ): 399 = Σᵢ₌₁ⁿ xᵢ⁴
  )
} ↔

proof NotExpressible399() {
  lemma UpperBounds() {
    assert(5⁴ = 625 > 399) ∧
    assert(2×4⁴ = 512 > 399)
  } →
  
  lemma Constraints() {
    assert(
      ∀x ∈ ℕ: [x⁴ contributes to sum of 399] ⇒
      (x < 5 ∧ [count of 4⁴ ≤ 1])
    )
  } →
  
  lemma Efficiency() {
    assert(2⁴ < 16×1⁴)
  } →
  
  setVar(ValidDecompositions: List) →
  assign(ValidDecompositions = [
    4⁴ + 3⁴ + 3×2⁴ + 14×1⁴,
    4⁴ + 8×2⁴ + 15×1⁴,
    4×3⁴ + 4×2⁴ + 11×1⁴,
    3×3⁴ + 9×2⁴ + 12×1⁴,
    2×3⁴ + 14×2⁴ + 13×1⁴,
    1×3⁴ + 19×2⁴ + 14×1⁴,
    0×3⁴ + 24×2⁴ + 15×1⁴
  ]) →
  
  lemma MinTermCount() {
    assert(
      ∀d ∈ ValidDecompositions:
      [count of terms in d] ≥ 19
    ) ∧
    assert(
      ∃d ∈ ValidDecompositions:
      [count of terms in d] = 19
    )
  } →
  
  conclude(
    [399 requires at least 19 fourth powers]
  )
}