theorem AbsoluteConvergentGeneralizedSumConverges() {
  assert(
    ∀V: BanachSpace ∧
    ∀norm: V → ℝ ∧
    ∀d: V × V → ℝ ∧
    ∀{vi}i∈I ⊆ V ∧
    (d = InducedMetric(norm)) ∧
    (∑{‖vi‖: i ∈ I} converges) →
    (∑{vi: i ∈ I} converges)
  )
} ↔

proof AbsoluteConvergentGeneralizedSumConverges() {
  lemma CandidateConstruction() {
    setVar(n: ℕ) →
    construct(Fn ⊆ I: finite) →
    assert(∀G: finite, Fn ⊆ G ⊆ I →
      ∑i∈G ‖vi‖ > ∑{‖vi‖: i ∈ I} - 2^(-n)) →
    define(vn = ∑i∈Fn vi)
  } →

  lemma CauchySequence() {
    setVar(ε > 0) →
    ∃N ∈ ℕ: 2^(-N) < ε →
    assert(∀m,n ≥ N →
      d(vm,vn) = ‖∑i∈Fm\Fn vi‖ ≤ ∑i∈Fm\Fn ‖vi‖ < 2^(-n) < ε) →
    conclude({vn}n∈ℕ is Cauchy)
  } →

  lemma LimitExists() {
    apply(BanachSpaceComplete()) →
    ∃v ∈ V: limn→∞ vn = v
  } →

  lemma ConvergenceVerification() {
    setVar(ε > 0) →
    ∃N ∈ ℕ: (∀n ≥ N: d(vn,v) < ε/2) ∧ (2^(-N) < ε/2) →
    assert(∀G: finite, FN ⊆ G ⊆ I →
      d(∑i∈G vi, v) ≤ ‖∑i∈G\FN vi‖ + ε/2 < ε) →
    conclude(∑{vi: i ∈ I} = v)
  } →

  apply(CandidateConstruction()) →
  apply(CauchySequence()) →
  apply(LimitExists()) →
  apply(ConvergenceVerification()) →
  conclude(∑{vi: i ∈ I} converges)
}