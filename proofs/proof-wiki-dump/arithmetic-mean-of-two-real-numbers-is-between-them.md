theorem Arithmetic_Mean_Between_Numbers() {
  assert(
    ∀a,b ∈ ℝ_{≠0} : a < b ⇒
    A(a,b) := (a + b)/2 ⇒
    (a < A(a,b) ∧ A(a,b) < b)
  )
}

proof Arithmetic_Mean_Between_Numbers() {
  setVar(a,b: ℝ_{≠0}) →
  assert(a < b) →
  defineFunc(A(a,b) := (a + b)/2) →
  
  // First inequality: a < A(a,b)
  assert(a < b) →
  apply(addition(2a)) →
  assert(2a < a + b) →
  apply(division(2)) →
  assert(a < (a + b)/2) →
  assert(a < A(a,b)) →
  
  // Second inequality: A(a,b) < b
  assert(b > a) →
  apply(addition(2b)) →
  assert(2b > a + b) →
  apply(division(2)) →
  assert(b > (a + b)/2) →
  assert(b > A(a,b)) →
  
  // Combine inequalities
  conclude(a < A(a,b) ∧ A(a,b) < b)
}