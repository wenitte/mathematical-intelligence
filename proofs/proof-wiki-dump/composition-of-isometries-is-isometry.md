theorem Composition_of_Isometries() {
  let(X₁: MetricSpace, d₁: Metric) →
  let(X₂: MetricSpace, d₂: Metric) →
  let(X₃: MetricSpace, d₃: Metric) →
  let(φ: Isometry(X₁→X₂)) →
  let(ψ: Isometry(X₂→X₃)) →
  assert(
    ∀x,y ∈ X₁ ⇒ (ψ∘φ: X₁→X₃) is Isometry
  )
} ↔

proof Composition_of_Isometries() {
  define(Isometry(f) := DistancePreserving(f) ∧ Bijective(f)) →
  
  lemma Distance_Preserving_Composition() {
    assert(
      DistancePreserving(φ) ∧ DistancePreserving(ψ) ⇒
      DistancePreserving(ψ∘φ)
    )
  } →
  
  lemma Bijection_Composition() {
    assert(
      Bijective(φ) ∧ Bijective(ψ) ⇒
      Bijective(ψ∘φ)
    )
  } →
  
  apply(Distance_Preserving_Composition()) →
  apply(Bijection_Composition()) →
  
  conclude(
    DistancePreserving(ψ∘φ) ∧ Bijective(ψ∘φ) ⇒
    Isometry(ψ∘φ)
  )
}