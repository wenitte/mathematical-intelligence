theorem ContinuousCombination_TopologicalRing() {
  let S: TopologicalSpace(τ_S);
  let R: TopologicalRing(+, *, τ_R);
  let λ ∈ R;
  let f: ContinuousMapping(S → R);
  
  define λ*f: Mapping(S → R) {
    ∀x ∈ S: (λ*f)(x) = λ * f(x)
  };
  
  define f*λ: Mapping(S → R) {
    ∀x ∈ S: (f*λ)(x) = f(x) * λ
  };
  
  assert(
    (λ*f: ContinuousMapping(S → R)) ∧
    (f*λ: ContinuousMapping(S → R))
  )
} ↔

proof ContinuousCombination_TopologicalRing() {
  assert(R: TopologicalRing(+, *, τ_R)) →
  lemma TopologicalRing_Property() {
    assert(R: TopologicalSemigroup(*, τ_R))
  } →
  apply(TopologicalRing_Property()) →
  
  theorem_ref MultipleRule_TopologicalSemigroup() {
    assert(
      ∀g: ContinuousMapping(S → R) ∧ ∀a ∈ R →
      (a*g: ContinuousMapping(S → R)) ∧
      (g*a: ContinuousMapping(S → R))
    )
  } →
  
  apply(MultipleRule_TopologicalSemigroup(), {g ↦ f, a ↦ λ}) →
  conclude((λ*f: ContinuousMapping(S → R)) ∧ (f*λ: ContinuousMapping(S → R)))
}