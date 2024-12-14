theorem Closure_Open_1Ball_Discrete() {
  let(M = (A,d): DiscreteMetricSpace) ∧
  let(x ∈ A) ∧
  let(B₁(x): OpenBall) →
  assert(
    cl(B₁(x)) = {x} ∧
    {y ∈ A: d(x,y) ≤ 1} = A
  )
}

proof Closure_Open_1Ball_Discrete() {
  define(d(x,y) = {
    0 if x = y
    1 if x ≠ y
  }) →
  
  assert(∀(x,y) ∈ A: d(x,y) ≤ 1) →
  conclude({y ∈ A: d(x,y) ≤ 1} = A) →
  
  lemma OpenBall_Identity() {
    assert(B₁(x) = {x})
  } →
  
  let(y ∈ A: y ≠ x) →
  
  define(cl(B₁(x)) = (B₁(x))ⁱ ∪ (B₁(x))') →
  
  lemma Points_Are_Isolated() {
    assert((B₁(x))ⁱ = B₁(x))
  } →
  
  lemma No_Limit_Points() {
    assert((B₁(x))' = ∅)
  } →
  
  apply(Points_Are_Isolated()) →
  apply(No_Limit_Points()) →
  assert(cl(B₁(x)) = B₁(x) ∪ ∅) →
  apply(EmptySet_Union_Identity()) →
  assert(cl(B₁(x)) = B₁(x)) →
  apply(OpenBall_Identity()) →
  conclude(cl(B₁(x)) = {x})
}