theorem Additive_Inverse_Continuous_Functions() {
  let(S: TopologicalSpace, τ: Topology) →
  let(ℝ: RealLine) →
  let(C(S,ℝ): ContinuousFunctionRing) →
  let(f: C(S,ℝ)) →
  assert(
    ∀f ∈ C(S,ℝ) ⇒ 
    (∃(-f) ∈ C(S,ℝ) ∧
    (∀s ∈ S ⇒ (-f)(s) = -(f(s))) ∧
    (-f) is_additive_inverse_of f)
  )
} ↔

proof Additive_Inverse_Continuous_Functions() {
  define(C(S,ℝ) := {g | g: S → ℝ ∧ g is_continuous}) →
  
  lemma Ring_Properties() {
    assert(C(S,ℝ) is_ring_with(+,*)) →
    assert(∀g ∈ C(S,ℝ) ⇒ g is_continuous_mapping)
  } →
  
  apply(Ring_Properties()) →
  
  lemma Continuous_Mappings_Inverse() {
    assert(∀f ∈ C(S,ℝ) ⇒ 
      ∃(-f)(∀s ∈ S ⇒ (-f)(s) = -(f(s))))
  } →
  
  apply(Continuous_Mappings_Inverse()) →
  
  assert((-f) + f = 0_C(S,ℝ)) →
  assert(f + (-f) = 0_C(S,ℝ)) →
  conclude((-f) is_additive_inverse_of f)
}