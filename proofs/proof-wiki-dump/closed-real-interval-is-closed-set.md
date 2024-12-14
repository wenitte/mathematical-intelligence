theorem Closed_Real_Interval_Is_Closed_Set() {
  let(ℝ: EuclideanSpace)
  let(a,b: ℝ)
  assert(
    [a,b] ⊂ ℝ → [a,b] is_closed_set_in ℝ
  )
} ↔

proof Closed_Real_Interval_Is_Closed_Set() {
  setDef([a,b]) {
    assert([a,b] = {x ∈ ℝ: x ≥ a ∧ x ≤ b})
  } →
  
  setComplement() {
    assert(ℝ ∖ [a,b] = ℝ ∖ {x ∈ ℝ: x ≥ a ∧ x ≤ b})
  } →
  
  applyDeMorgan() {
    assert(ℝ ∖ [a,b] = {x ∈ ℝ: x < a ∨ x > b})
  } →
  
  applyOpenIntervalDef() {
    assert(ℝ ∖ [a,b] = (-∞,a) ∪ (b,∞))
  } →
  
  lemma OpenIntervalsAreOpen() {
    assert((-∞,a) is_open_in ℝ)
    assert((b,∞) is_open_in ℝ)
  } →
  
  lemma UnionOfOpenIsOpen() {
    assert(
      A is_open_in ℝ ∧ B is_open_in ℝ → A ∪ B is_open_in ℝ
    )
  } →
  
  apply(OpenIntervalsAreOpen()) →
  apply(UnionOfOpenIsOpen()) →
  
  conclude() {
    assert(ℝ ∖ [a,b] is_open_in ℝ) →
    assert([a,b] is_closed_set_in ℝ)
  }
}