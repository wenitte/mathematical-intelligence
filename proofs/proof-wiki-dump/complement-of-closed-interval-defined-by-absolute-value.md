theorem Complement_Closed_Interval_Absolute_Value() {
  let(ξ: ℝ, δ: ℝ) →
  assume(δ > 0) →
  assert(
    {x ∈ ℝ: |ξ - x| > δ} = ℝ ∖ [ξ - δ, ξ + δ]
  )
} ↔

proof Complement_Closed_Interval_Absolute_Value() {
  let(y: ℝ) →
  assert(
    y ∈ {x ∈ ℝ: |ξ - x| > δ}
    ↔
    y ∉ {x ∈ ℝ: |ξ - x| ≤ δ}
  ) →
  
  lemma Closed_Interval_Absolute_Value() {
    assert(
      {x ∈ ℝ: |ξ - x| ≤ δ} = [ξ - δ, ξ + δ]
    )
  } →
  
  apply(Closed_Interval_Absolute_Value()) →
  assert(
    y ∉ {x ∈ ℝ: |ξ - x| ≤ δ}
    ↔
    y ∉ [ξ - δ, ξ + δ]
  ) →
  
  apply(SetDifference_Definition()) →
  assert(
    y ∉ [ξ - δ, ξ + δ]
    ↔
    y ∈ ℝ ∖ [ξ - δ, ξ + δ]
  )
}