theorem Boundedness_Not_Topological() {
  assert(
    ∀M₁ M₂[
      (M₁ = ⟨A₁,d₁⟩ ∧ M₂ = ⟨A₂,d₂⟩) ∧
      MetricSpace(M₁) ∧ MetricSpace(M₂) ∧
      Homeomorphic(M₁,M₂) ⇏
      (Bounded(M₁) ↔ Bounded(M₂))
    ]
  )
}

proof Boundedness_Not_Topological() {
  // Construct counterexample
  setVar(M₁: MetricSpace) →
  define(M₁ = ⟨(0,1), d_euclidean⟩) →
  
  setVar(M₂: MetricSpace) →
  define(M₂ = ⟨ℝ, d_euclidean⟩) →

  // Prove M₁ is bounded
  assert(∃b ∈ ℝ[b = 1]) →
  assert(∀x ∈ (0,1)[d_euclidean(0,x) < 1]) →
  conclude(Bounded(M₁)) →

  // Prove M₂ is unbounded
  assert(∀b ∈ ℝ ∃x ∈ ℝ[d_euclidean(0,x) > b]) →
  conclude(¬Bounded(M₂)) →

  // Apply homeomorphism result
  lemma Open_Interval_Real_Line_Homeomorphic() {
    assert(Homeomorphic(⟨(0,1), d_euclidean⟩, ⟨ℝ, d_euclidean⟩))
  } →
  
  apply(Open_Interval_Real_Line_Homeomorphic()) →
  
  // Conclude theorem
  assert(Homeomorphic(M₁,M₂) ∧ Bounded(M₁) ∧ ¬Bounded(M₂)) →
  conclude(∃M₁,M₂[Homeomorphic(M₁,M₂) ∧ (Bounded(M₁) ↮ Bounded(M₂))])
}