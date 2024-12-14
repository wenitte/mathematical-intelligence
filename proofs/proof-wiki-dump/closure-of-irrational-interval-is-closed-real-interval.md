theorem Closure_Irrational_Interval_Is_Closed_Real_Interval() {
  assert(
    ∀(τ_d: Topology) ∧ 
    ∀(a,b: ℝ | a < b) ∧ 
    ∀(𝕀: Interval(ℝ)) →
    closure(𝕀 ∩ (ℝ∖ℚ)) = [a,b]
  )
} ↔

proof Closure_Irrational_Interval_Is_Closed_Real_Interval() {
  setVar(𝕀: OpenInterval(ℝ)) →
  
  lemma Real_Interval_Closure() {
    assert(closure(𝕀) = [a,b])
  } →

  lemma Irrational_Closure() {
    assert(closure(ℝ∖ℚ) = ℝ)
  } →

  lemma Intersection_Closure() {
    assert(
      ∀(A,B: Set) →
      closure(A ∩ B) ⊆ closure(A) ∩ closure(B)
    )
  } →

  apply(Intersection_Closure()) →
  assert(closure(𝕀 ∩ (ℝ∖ℚ)) ⊆ closure(𝕀) ∩ closure(ℝ∖ℚ)) →
  
  apply(Real_Interval_Closure(), Irrational_Closure()) →
  assert(closure(𝕀) ∩ closure(ℝ∖ℚ) = [a,b] ∩ ℝ = [a,b]) →
  assert(closure(𝕀 ∩ (ℝ∖ℚ)) ⊆ [a,b]) →

  lemma Irrationals_Dense() {
    assert(∀(x,y: ℝ | x < y) → [x,y] ⊆ closure(ℝ∖ℚ))
  } →

  apply(Irrationals_Dense()) →
  assert([a,b] ⊆ closure(𝕀 ∩ (ℝ∖ℚ))) →
  
  conclude(closure(𝕀 ∩ (ℝ∖ℚ)) = [a,b])
}