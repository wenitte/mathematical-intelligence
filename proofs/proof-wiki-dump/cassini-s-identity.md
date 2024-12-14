theorem Cassinis_Identity() {
  assert(
    ∀n ∈ ℤ ⇒ F_{n+1}F_{n-1} - F_n^2 = (-1)^n 
    where F_k is kth Fibonacci number
  )
} ↔

proof Cassinis_Identity() {
  // Base cases
  assert(F_2F_0 - F_1^2 = 1×0 - 1 = -1 = (-1)^1) →
  assert(F_3F_1 - F_2^2 = 2×1 - 1 = 1 = (-1)^2) →
  
  // Inductive step
  setVar(k: ℤ) →
  assume(F_{k+1}F_{k-1} - F_k^2 = (-1)^k) →
  
  lemma InductiveStep() {
    assert(F_{k+2}F_k - F_{k+1}^2) →
    assert((F_k + F_{k+1})F_k - F_{k+1}^2) →
    assert(F_k^2 + F_kF_{k+1} - F_{k+1}^2) →
    assert(F_k^2 + F_kF_{k+1} - F_{k+1}(F_k + F_{k-1})) →
    assert(F_k^2 + F_kF_{k+1} - F_kF_{k+1} - F_{k+1}F_{k-1}) →
    assert(F_k^2 - F_{k+1}F_{k-1}) →
    assert((-1)(F_{k+1}F_{k-1} - F_k^2)) →
    assert((-1)((-1)^k)) →
    assert((-1)^{k+1})
  } →
  
  apply(InductiveStep()) →
  apply(MathematicalInduction()) →
  assert(∀n ∈ ℤ ⇒ F_{n+1}F_{n-1} - F_n^2 = (-1)^n)
}

theorem Matrix_Proof() {
  assert(
    ∀n ∈ ℤ_{>1} ⇒ 
    [[F_{n+1}, F_n], [F_n, F_{n-1}]] = [[1,1], [1,0]]^n
  )
} ∧

proof Matrix_Proof() {
  // Take determinants of both sides
  lemma Det_LHS() {
    assert(det([[F_{n+1}, F_n], [F_n, F_{n-1}]]) = F_{n+1}F_{n-1} - F_n^2)
  } →
  
  lemma Det_RHS() {
    setVar(k: ℤ_{>0}) →
    assert(det([[1,1], [1,0]]) = -1) →
    assume(det([[1,1], [1,0]])^k = (-1)^k) →
    assert(det([[1,1], [1,0]])^{k+1} = (-1)^k × (-1) = (-1)^{k+1})
  } →
  
  apply(Det_LHS()) ∧ apply(Det_RHS()) →
  assert(F_{n+1}F_{n-1} - F_n^2 = (-1)^n)
}