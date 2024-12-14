theorem ChiuChangProblem4() {
  assert(
    (5x + 2y = 10 ∧ 2x + 5y = 8) →
    ∃x,y ∈ ℝ: (x = 1 11/21 ∧ y = 20/21)
  )
}

proof ChiuChangProblem4() {
  setVar(x: ℝ) →
  setVar(y: ℝ) →
  
  let(equation1: 5x + 2y = 10) →
  let(equation2: 2x + 5y = 8) →
  
  step1: {
    multiply(equation1, 2) →
    assert(10x + 4y = 20)
  } →
  
  step2: {
    multiply(equation2, 5) →
    assert(10x + 25y = 40)
  } →
  
  step3: {
    subtract(step2, step1) →
    assert(21y = 20) →
    assert(y = 20/21)
  } →
  
  step4: {
    substitute(equation2, y = 20/21) →
    assert(2x + 5(20/21) = 8) →
    assert(2x = 8 - 100/21) →
    assert(x = 4 - 50/21) →
    assert(x = 1 11/21)
  } →
  
  conclude(x = 1 11/21 ∧ y = 20/21)
}