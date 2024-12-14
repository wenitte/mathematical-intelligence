theorem ComplementOpenIntervalAbsVal() {
  assert(
    ∀ξ,δ ∈ ℝ ∧ δ > 0 ⇒ 
    {x ∈ ℝ: |ξ - x| ≥ δ} = ℝ ∖ (ξ - δ, ξ + δ)
  )
} ↔

proof ComplementOpenIntervalAbsVal() {
  setVar(y: ℝ) →
  
  assert(
    y ∈ {x ∈ ℝ: |ξ - x| ≥ δ}
    ↔
    y ∉ {x ∈ ℝ: |ξ - x| < δ}
  ) →
  
  lemma OpenIntervalAbsVal() {
    assert(
      {x ∈ ℝ: |ξ - x| < δ} = (ξ - δ, ξ + δ)
    )
  } →
  
  apply(OpenIntervalAbsVal()) →
  
  assert(
    y ∉ {x ∈ ℝ: |ξ - x| < δ}
    ↔
    y ∉ (ξ - δ, ξ + δ)
  ) →
  
  assert(
    y ∉ (ξ - δ, ξ + δ)
    ↔
    y ∈ ℝ ∖ (ξ - δ, ξ + δ)
  ) →
  
  conclude(
    {x ∈ ℝ: |ξ - x| ≥ δ} = ℝ ∖ (ξ - δ, ξ + δ)
  )
}