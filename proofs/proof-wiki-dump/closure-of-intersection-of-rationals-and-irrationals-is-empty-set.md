theorem Closure_Intersection_Rationals_Irrationals_Empty() {
  let(τ: topology) →
  let(ℝ: real_line) →
  let(ℚ: rational_numbers) →
  assert(
    (ℝ,τ) ∈ EuclideanTopology ∧
    (ℚ ∩ (ℝ∖ℚ))⁻ = ∅
  )
} ↔

proof Closure_Intersection_Rationals_Irrationals_Empty() {
  lemma Set_Difference_Intersection() {
    assert(
      ∀A,B ∈ Set → A ∩ (B∖A) = ∅
    )
  } →
  
  apply(Set_Difference_Intersection(), ℚ, ℝ) →
  assert(ℚ ∩ (ℝ∖ℚ) = ∅) →
  
  lemma Empty_Set_Closed() {
    assert(
      ∀X ∈ TopologicalSpace → ∅ is_closed_in X
    )
  } →
  
  apply(Empty_Set_Closed(), (ℝ,τ)) →
  
  lemma Closed_Set_Equals_Closure() {
    assert(
      ∀S ∈ Set → (S is_closed ↔ S⁻ = S)
    )
  } →
  
  apply(Closed_Set_Equals_Closure(), ∅) →
  assert(∅⁻ = ∅) →
  assert((ℚ ∩ (ℝ∖ℚ))⁻ = ∅)
}