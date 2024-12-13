theorem Additive_Inverse_Bounded_Continuous() {
  let(S: TopologicalSpace, τ: Topology) →
  let(ℝ: RealNumberLine) →
  let(C*: BoundedContinuousFunctions(S, ℝ)) →
  let(f: C*) →
  assert(
    ∀s ∈ S ⇒ (-f)(s) = -(f(s)) ↔ 
    IsAdditiveInverse(f, -f, C*)
  )
}

proof Additive_Inverse_Bounded_Continuous() {
  let(C: ContinuousFunctions(S, ℝ)) →
  
  lemma Subring() {
    assert(IsSubring(C*, C))
  } →
  
  lemma ContinuousInverse() {
    assert(
      ∀s ∈ S ⇒ (-f)(s) = -(f(s)) ↔ 
      IsAdditiveInverse(f, -f, C)
    )
  } →
  
  lemma SubgroupInverse() {
    assert(
      IsSubring(C*, C) ∧
      IsAdditiveInverse(f, -f, C) →
      IsAdditiveInverse(f, -f, C*)
    )
  } →
  
  apply(Subring()) →
  apply(ContinuousInverse()) →
  apply(SubgroupInverse()) →
  assert(IsAdditiveInverse(f, -f, C*))
}