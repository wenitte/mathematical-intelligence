theorem AbsValueInterval() {
  assert(
    ∀ξ,δ ∈ ℝ ∧ δ > 0 ⇒
    {x ∈ ℝ : |ξ - x| ≤ δ} = [ξ - δ, ξ + δ]
  )
} ↔

proof AbsValueInterval() {
  setVar(ξ,δ: ℝ) →
  assume(δ > 0) →
  
  lemma AbsValueEquiv() {
    assert(
      |ξ - x| ≤ δ ↔ -δ ≤ ξ - x ≤ δ
    )
  } →
  
  apply(AbsValueEquiv()) →
  assert(-δ ≤ ξ - x ≤ δ) →
  
  lemma AlgebraicManip() {
    assert(
      -δ ≤ ξ - x ≤ δ ↔
      -δ + ξ ≤ x ≤ δ + ξ ↔
      ξ - δ ≤ x ≤ ξ + δ
    )
  } →
  
  apply(AlgebraicManip()) →
  assert(ξ - δ ≤ x ≤ ξ + δ) →
  
  lemma ClosedIntervalDef() {
    assert(
      [ξ - δ, ξ + δ] = {x ∈ ℝ : ξ - δ ≤ x ≤ ξ + δ}
    )
  } →
  
  apply(ClosedIntervalDef()) →
  assert({x ∈ ℝ : |ξ - x| ≤ δ} = [ξ - δ, ξ + δ])
}