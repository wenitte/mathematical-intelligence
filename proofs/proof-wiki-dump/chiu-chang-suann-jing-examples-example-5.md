theorem ChiuChangExample5() {
  assert(
    ∃x,y,z ∈ ℝ: (
      (3x + 2y + z = 39) ∧
      (2x + 3y + z = 34) ∧
      (x + 2y + 3z = 26)
    ) ⇒ (x = 9.25 ∧ y = 4.25 ∧ z = 2.75)
  )
}

proof ChiuChangExample5() {
  setVar(x,y,z: ℝ) →
  
  let(equation1: 3x + 2y + z = 39) →
  let(equation2: 2x + 3y + z = 34) →
  let(equation3: x + 2y + 3z = 26) →
  
  step1(equation1 - equation2) {
    assert(x - y = 5)
  } →
  
  let(equation4: x - y = 5) →
  
  step2(substitute y = x - 5 in equation1) {
    assert(3x + 2(x - 5) + z = 39) →
    assert(5x + z = 49)
  } →
  
  let(equation5: 5x + z = 49) →
  
  step3(equation1 - equation3) {
    assert(2x - 2z = 13) →
    assert(x - z = 6.5)
  } →
  
  let(equation6: x - z = 6.5) →
  
  step4(equation5 - equation6) {
    assert(6x = 55.5) →
    assert(x = 9.25)
  } →
  
  step5(substitute x = 9.25 in equation4) {
    assert(9.25 - y = 5) →
    assert(y = 4.25)
  } →
  
  step6(substitute x = 9.25 in equation6) {
    assert(9.25 - z = 6.5) →
    assert(z = 2.75)
  } →
  
  conclude(x = 9.25 ∧ y = 4.25 ∧ z = 2.75)
}