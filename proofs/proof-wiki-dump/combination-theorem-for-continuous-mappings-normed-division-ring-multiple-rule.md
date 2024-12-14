theorem ContinuousCombinationNormedRing() {
  let(S: TopologicalSpace, τ_S: Topology) →
  let(R: NormedDivisionRing, +: Operation, *: Operation, ∥·∥: Norm) →
  let(τ_R: Topology) →
  assert(τ_R = InducedTopology(∥·∥)) ∧
  let(λ: R) ∧
  let(f: ContinuousMapping(S → R)) →
  let(λ*f: Mapping(S → R)) ∧
  let(f*λ: Mapping(S → R)) →
  assert(
    ∀x ∈ S: (λ*f)(x) = λ * f(x) ∧
    ∀x ∈ S: (f*λ)(x) = f(x) * λ
  ) →
  assert(
    IsContinuous(λ*f: S → R) ∧
    IsContinuous(f*λ: S → R)
  )
} ↔

proof ContinuousCombinationNormedRing() {
  lemma NormedRingContinuity() {
    assert(IsTopologicalDivisionRing(R, +, *, τ_R))
  } →
  apply(NormedRingContinuity()) →
  lemma MultipleRuleContinuity() {
    assert(
      ∀λ ∈ R, ∀f: ContinuousMapping(S → R) →
      IsContinuous(λ*f) ∧ IsContinuous(f*λ)
    )
  } →
  apply(MultipleRuleContinuity()) →
  assert(
    IsContinuous(λ*f: S → R) ∧
    IsContinuous(f*λ: S → R)
  )
}