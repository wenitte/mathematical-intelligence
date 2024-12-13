theorem AdditiveRealsSubgroupComplex() {
  assert(
    (ℝ,+) ⊂ (ℂ,+)
  )
} ↔

proof AdditiveRealsSubgroupComplex() {
  lemma TwoStepSubgroupTest() {
    assert(
      ∀G,H[G ⊂ H ↔ (
        (∀x,y ∈ G → x + y ∈ G) ∧
        (∀x ∈ G → -x ∈ G)
      )]
    )
  } →
  
  setVar(x,y: ℂ) →
  assert(x = x₁ + 0i ∧ y = y₁ + 0i) →
  assert(x,y ∈ ℝ) →
  
  let_closure: {
    assert(x + y = (x₁ + y₁) + (0 + 0)i) →
    assert(x + y ∈ ℝ)
  } →
  
  let_inverse: {
    assert(-x = -x₁ + 0i) →
    assert(-x ∈ ℝ)
  } →
  
  apply(TwoStepSubgroupTest()) →
  assert((ℝ,+) ⊂ (ℂ,+))
}