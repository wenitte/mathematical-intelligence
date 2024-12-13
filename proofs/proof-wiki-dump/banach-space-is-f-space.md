theorem Banach_Space_is_F_Space() {
  assert(
    ∀GF ∈ {ℝ,ℂ} ∧
    ∀X[struct(X,∥·∥): BanachSpace(GF)] ⇒
    is_F_Space(struct(X,∥·∥))
  )
} ↔

proof Banach_Space_is_F_Space() {
  setVar(GF: {ℝ,ℂ}) →
  setVar(X[struct(X,∥·∥): BanachSpace(GF)]) →
  
  lemma TopVectorSpace() {
    assert(
      BanachSpace(GF) ⇒ HausdorffTopVectorSpace()
    )
  } →

  setVar(d: metric(∥·∥)) →
  
  lemma MetricTopology() {
    assert(
      topology(struct(X,∥·∥)) = topology(struct(X,d))
    )
  } →
  
  assert(
    isBanachSpace(struct(X,∥·∥)) ⇒
    isComplete(struct(X,d))
  ) →
  
  lemma InvariantMetric() {
    assert(
      metric(∥·∥) ⇒ isInvariant(d)
    )
  } →
  
  apply(TopVectorSpace()) →
  apply(MetricTopology()) →
  apply(InvariantMetric()) →
  
  assert(
    (isComplete(struct(X,d)) ∧ isInvariant(d)) ⇒
    is_F_Space(struct(X,∥·∥))
  )
}