theorem Combination_Continuity_Difference() {
  assert(
    let S ⊆ ℝ be open ∧
    let f,g: S → ℝ be functions ∧
    continuous(f) on S ∧
    continuous(g) on S ⇒
    continuous(f - g) on S
  )
}

proof Combination_Continuity_Difference() {
  setVar(x: S) →
  assert(
    (f - g)(x) = (f + (-g))(x)
  ) →
  
  lemma Continuous_Negative() {
    assert(
      continuous(g) on S ⇒
      continuous(-g) on S
    )
  } →
  
  lemma Continuous_Sum() {
    assert(
      continuous(f) on S ∧
      continuous(-g) on S ⇒
      continuous(f + (-g)) on S
    )
  } →
  
  apply(Continuous_Negative()) →
  apply(Continuous_Sum()) →
  assert(
    continuous(f - g) on S
  )
}