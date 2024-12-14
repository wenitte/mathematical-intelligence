theorem CauchySequenceIsBounded(V: NormedVectorSpace) {
  assert(
    ∀{xₙ} ∈ V | isCauchySequence({xₙ}) → isBoundedSequence({xₙ})
  )
} ↔

proof CauchySequenceIsBounded() {
  setVar({xₙ}: Sequence(V)) →
  assume(isCauchySequence({xₙ})) →
  assert(∀ε ∈ ℝ₊ ∃N ∈ ℕ ∀n,m ≥ N: ‖xₙ - xₘ‖ < ε) →
  
  letVar(N: ℕ | ∀n,m ≥ N: ‖xₙ - xₘ‖ < 1) →
  setVar(m = N + 1) →
  
  lemma NormDecomposition() {
    assert(
      ∀n ≥ N: ‖xₙ‖ = ‖xₙ - x_{N+1} + x_{N+1}‖
    )
  } →
  
  lemma TriangleInequality() {
    assert(
      ‖xₙ - x_{N+1} + x_{N+1}‖ ≤ ‖xₙ - x_{N+1}‖ + ‖x_{N+1}‖
    )
  } →
  
  lemma BoundApplication() {
    assert(
      ∀n ≥ N: ‖xₙ - x_{N+1}‖ < 1 →
      ‖xₙ‖ ≤ 1 + ‖x_{N+1}‖
    )
  } →
  
  letVar(M = max{‖x₁‖, ‖x₂‖, ..., ‖xₙ‖, 1 + ‖x_{N+1}‖}) →
  
  assert(∀n ∈ ℕ: ‖xₙ‖ ≤ M) ∧
  assert(
    (∀n < N: ‖xₙ‖ ≤ M) ∧
    (∀n ≥ N: ‖xₙ‖ ≤ 1 + ‖x_{N+1}‖ ≤ M)
  ) →
  
  conclude(isBoundedSequence({xₙ}))
}