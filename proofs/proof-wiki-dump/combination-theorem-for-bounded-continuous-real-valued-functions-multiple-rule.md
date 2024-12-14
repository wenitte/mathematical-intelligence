theorem Combination_Bounded_Continuous_Multiple() {
  setDef(S: TopologicalSpace) ∧
  setDef(τ: Topology(S)) ∧
  setDef(ℝ: RealNumbers) ∧
  setDef(f: Function(S → ℝ)) ∧
  setDef(λ: ℝ) ∧
  assert(
    (isBounded(f) ∧ isContinuous(f)) ∧
    ∀s ∈ S: (λf)(s) = λ(f(s))
    ⟹
    isBounded(λf) ∧ isContinuous(λf)
  )
} ↔

proof Combination_Bounded_Continuous_Multiple() {
  lemma Multiple_Rule_Bounded() {
    assert(
      isBounded(f) ∧ λ ∈ ℝ ⟹ isBounded(λf)
    )
  } →
  
  lemma Multiple_Rule_Continuous() {
    assert(
      isContinuous(f) ∧ λ ∈ ℝ ⟹ isContinuous(λf)
    )
  } →
  
  apply(Multiple_Rule_Bounded()) →
  apply(Multiple_Rule_Continuous()) →
  
  assert(
    isBounded(λf) ∧ isContinuous(λf)
  )
}