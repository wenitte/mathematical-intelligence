theorem CauchySequence_is_Bounded() {
  assert(
    ∀R: NormedDivisionRing ∧
    ∀{xₙ}: Sequence(R) →
    (isCauchy({xₙ}) → isBounded({xₙ}))
  )
}

proof CauchySequence_is_Bounded_1() {
  setVar({xₙ}: Sequence(R)) →
  assert(
    ∀ε ∈ ℝ₊ ∃N ∈ ℕ ∀n,m ≥ N: ‖xₙ - xₘ‖ < ε
  ) →
  setVar(n₁: ℕ | ∀n,m ≥ n₁: ‖xₙ - xₘ‖ < 1) →
  
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
  
  assert(
    ∀n ≥ n₁: ‖xₙ‖ ≤ 1 + ‖x_{n₁}‖
  ) →
  
  setVar(K = max{‖x₁‖, ‖x₂‖, ..., ‖x_{n₁-1}‖, 1 + ‖x_{n₁}‖}) →
  
  assert(
    (∀n < n₁: ‖xₙ‖ ≤ K) ∧
    (∀n ≥ n₁: ‖xₙ‖ ≤ K)
  ) →
  
  conclude(isBounded({xₙ}))
}

proof CauchySequence_is_Bounded_2() {
  setVar(d: MetricFromNorm(‖·‖)) →
  setVar({xₙ}: Sequence(R)) →
  assert(isCauchy({xₙ}, ‖·‖) → isCauchy({xₙ}, d)) →
  apply(CauchySequence_is_Bounded_in_MetricSpace()) →
  apply(Sequence_Bounded_iff_Metric_Bounded()) →
  conclude(isBounded({xₙ}))
}

proof CauchySequence_is_Bounded_3() {
  setVar({xₙ}: Sequence(R)) →
  apply(NormSequence_of_Cauchy_has_Limit()) →
  apply(Convergent_Real_Sequence_is_Bounded()) →
  assert(
    ∃M ∈ ℝ₊ ∀n ∈ ℕ: ‖xₙ‖ ≤ M
  ) →
  conclude(isBounded({xₙ}))
}