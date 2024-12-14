theorem CauchySequence_is_Bounded() {
  assert(
    ∀R[NormedDivisionRing] ∧ 
    ∀{xₙ}[Sequence(R)] ∧
    isCauchy({xₙ}) →
    isBounded({xₙ})
  )
}

proof CauchySequence_is_Bounded() {
  setVar({xₙ}: Sequence(R)) →
  assert(
    isCauchy({xₙ}) ↔
    ∀ε ∈ ℝ₊ ∃N ∈ ℕ ∀n,m ≥ N: ‖xₙ - xₘ‖ < ε
  ) →
  
  setVar(n₁: ℕ) →
  assert(
    ∀n,m ≥ n₁: ‖xₙ - xₘ‖ < 1
  ) →
  
  lemma NormDecomposition() {
    assert(
      ∀n ≥ n₁: ‖xₙ‖ = ‖xₙ - x_{n₁} + x_{n₁}‖
    )
  } →
  
  lemma TriangleInequality() {
    assert(
      ‖xₙ - x_{n₁} + x_{n₁}‖ ≤ ‖xₙ - x_{n₁}‖ + ‖x_{n₁}‖
    )
  } →
  
  apply(NormDecomposition()) →
  apply(TriangleInequality()) →
  
  assert(
    ∀n ≥ n₁: ‖xₙ‖ ≤ 1 + ‖x_{n₁}‖
  ) →
  
  setVar(K = max{‖x₁‖, ‖x₂‖, ..., ‖x_{n₁-1}‖, 1 + ‖x_{n₁}‖}) →
  
  assert(
    (∀n < n₁: ‖xₙ‖ ≤ K) ∧
    (∀n ≥ n₁: ‖xₙ‖ ≤ K)
  ) →
  
  conclude(
    isBounded({xₙ})
  )
}