theorem ContinuousProductRule() {
  let(S: TopologicalSpace, τ_S: Topology) →
  let(R: NormedDivisionRing, +: Operation, *: Operation, ∥·∥: Norm) →
  let(τ_R: Topology, induced_by: ∥·∥) →
  let(f: ContinuousMapping(S → R)) →
  let(g: ContinuousMapping(S → R)) →
  let(f*g: Mapping(S → R)) →
  assert(
    ∀x ∈ S: (f*g)(x) = f(x) * g(x)
  ) →
  assert(
    f*g: ContinuousMapping(S,τ_S → R,τ_R)
  )
} ↔

proof ContinuousProductRule() {
  lemma NormedRingContinuous() {
    assert(
      (R,+,*,τ_R) is TopologicalDivisionRing
    )
  } →
  
  lemma ProductRuleContinuous() {
    requires(
      (R,+,*,τ_R) is TopologicalDivisionRing ∧
      f,g are ContinuousMapping(S → R)
    ) →
    assert(
      f*g is ContinuousMapping(S,τ_S → R,τ_R)
    )
  } →
  
  apply(NormedRingContinuous()) →
  apply(ProductRuleContinuous()) →
  conclude(
    f*g: ContinuousMapping(S,τ_S → R,τ_R)
  )
}