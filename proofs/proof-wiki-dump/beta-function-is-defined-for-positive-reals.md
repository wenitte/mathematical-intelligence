theorem Beta_Function_Exists() {
  assert(
    ∀x,y ∈ ℝ ∧ 
    Beta(x,y) := ∫[0→1] t^(x-1)(1-t)^(y-1)dt ∧
    x,y > 0 →
    Beta(x,y) exists
  )
} ↔

proof Beta_Function_Exists() {
  setVar(t: ℝ, 0 < t < 1) →
  
  lemma Inequalities() {
    assert(
      t^(x-1)(1-t)^(y-1) < t^(x-1) ∧
      t^(x-1)(1-t)^(y-1) < (1-t)^(y-1)
    )
  } →

  lemma FirstIntegral() {
    assert(
      ∫[0→1] t^(x-1)dt = 
      [t^x/x]|[0→1] = 
      1/x - 0 = 
      1/x
    )
  } →

  lemma SecondIntegral() {
    assert(
      ∫[0→1] (1-t)^(y-1)dt = 
      -[((1-t)^y)/y]|[0→1] = 
      1/y - 0 = 
      1/y
    )
  } →

  apply(Inequalities()) →
  apply(FirstIntegral()) →
  apply(SecondIntegral()) →
  apply(ComparisonTestImproperIntegral()) →
  
  assert(
    Beta(x,y) is bounded above by min(1/x, 1/y) →
    Beta(x,y) exists
  )
}