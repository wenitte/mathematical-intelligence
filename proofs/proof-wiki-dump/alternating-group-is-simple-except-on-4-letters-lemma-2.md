theorem AlternatingGroupPermutation() {
  assert(
    ∀n ≥ 5 ∧
    α ∈ A_n ∧ 
    α = (1,2)(3,4) ∧
    β = (3,4,5) →
    β^(-1)α^(-1)βα = β
  )
} ↔

proof AlternatingGroupPermutation() {
  setVar(n: ℕ, n ≥ 5) →
  setVar(α: A_n, α = (1,2)(3,4)) →
  setVar(β: A_n, β = (3,4,5)) →
  
  lemma CycleExpansion() {
    assert(
      β^(-1) = (3,5,4) ∧
      β^(-1)α^(-1)βα = (3,5,4)(1,2)(3,4)(3,4,5)(1,2)(3,4)
    )
  } →
  
  lemma CycleComposition1() {
    assert(
      (3,5,4)(1,2)(3,4)(3,4,5)(1,2)(3,4) = 
      (3,5,4)(1,2)(3,4)(1,2)(3,5)
    )
  } →
  
  lemma CycleComposition2() {
    assert(
      (3,5,4)(1,2)(3,4)(1,2)(3,5) = 
      (3,5,4)(3,5,4)
    )
  } →
  
  lemma CycleInversion() {
    assert(
      (3,5,4)(3,5,4) = (3,4,5)
    )
  } →
  
  apply(CycleExpansion()) →
  apply(CycleComposition1()) →
  apply(CycleComposition2()) →
  apply(CycleInversion()) →
  
  assert(β^(-1)α^(-1)βα = β)
}