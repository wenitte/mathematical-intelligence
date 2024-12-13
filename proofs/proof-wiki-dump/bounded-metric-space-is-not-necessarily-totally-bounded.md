theorem BoundedNotTotallyBounded() {
  assert(
    ∀M(MetricSpace(M) ∧ Bounded(M) ⇏ TotallyBounded(M))
  )
}

proof BoundedNotTotallyBounded_1() {
  setVar(ℝ: RealNumbers) →
  setVar(d: EuclideanMetric) →
  define(M := ⟨ℝ,d⟩) →
  define(δ := d/(1+d)) →
  define(M' := ⟨ℝ,δ⟩) →
  lemma UnityBoundedIsBounded() {
    assert(MetricSpace(M') ∧ Bounded(M'))
  } →
  lemma UnityBoundedNotTotallyBounded() {
    assert(¬TotallyBounded(M'))
  } →
  apply(UnityBoundedIsBounded()) →
  apply(UnityBoundedNotTotallyBounded()) →
  conclude(∃M(Bounded(M) ∧ ¬TotallyBounded(M)))
}

proof BoundedNotTotallyBounded_2() {
  setVar(I := (0,1)) →
  setVar(d: DiscreteMetric) →
  define(M := ⟨I,d⟩) →
  assert(∀x∈I ∀r>1 (Br(x) = I)) →
  conclude(Bounded(M)) →
  setVar(ε: ℝ>0) →
  assert(ε < 1) →
  setVar(x ∈ I) →
  assert(Bε(x) = {x}) →
  lemma NoFiniteEpsilonNet() {
    assert(∀F(Finite(F) ⇒ ∃y∈I ∀z∈F (d(y,z) ≥ ε)))
  } →
  apply(NoFiniteEpsilonNet()) →
  conclude(¬TotallyBounded(M)) →
  conclude(∃M(Bounded(M) ∧ ¬TotallyBounded(M)))
}