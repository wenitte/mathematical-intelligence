theorem CauchySequenceEventuallyBoundedAwayFromNonLimit() {
  let(R: NormedDivisionRing, ‖·‖: Norm) →
  let({xₙ}: Sequence(R)) →
  let(l: R) →
  assert(isCauchy({xₙ}) ∧ ¬convergesTo({xₙ}, l)) →
  assert(
    ∃K ∈ ℕ, ∃C ∈ ℝ₊: ∀n > K: C < ‖xₙ - l‖
  )
} ↔

proof CauchySequenceEventuallyBoundedAwayFromNonLimit() {
  lemma NonConvergence() {
    assert(¬convergesTo({xₙ}, l)) →
    assert(∃ε ∈ ℝ₊: ∀n ∈ ℕ: ∃m ≥ n: ‖xₘ - l‖ ≥ ε)
  } →

  lemma CauchyProperty() {
    assert(isCauchy({xₙ})) →
    assert(∃K ∈ ℕ: ∀n,m ≥ K: ‖xₙ - xₘ‖ < ε/2)
  } →

  apply(NonConvergence(), CauchyProperty()) →
  setVar(M: ℕ, M ≥ K) →
  assert(‖xₘ - l‖ ≥ ε) →

  forall(n > K) {
    assert(ε ≤ ‖xₘ - l‖) →
    assert(‖xₘ - l‖ = ‖xₘ - xₙ + xₙ - l‖) →
    apply(TriangleInequality()) →
    assert(‖xₘ - xₙ + xₙ - l‖ ≤ ‖xₘ - xₙ‖ + ‖xₙ - l‖) →
    assert(‖xₘ - xₙ‖ + ‖xₙ - l‖ < ε/2 + ‖xₙ - l‖) →
    assert(ε/2 < ‖xₙ - l‖)
  } →

  setVar(C = ε/2) →
  assert(∃K ∈ ℕ, ∃C ∈ ℝ₊: ∀n > K: C < ‖xₙ - l‖)
}