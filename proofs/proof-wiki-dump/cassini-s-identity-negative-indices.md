theorem CassiniIdentityNegative() {
  assert(
    ∀n ∈ ℤ_{<0} ∧ F_n := nth_fibonacci(n) →
    F_{n+1}F_{n-1} - F_n^2 = (-1)^n
  )
} ↔

proof CassiniIdentityNegative() {
  setVar(n: ℤ_{>0}) →
  
  lemma FibonacciNegativeIndex() {
    assert(
      ∀k ∈ ℤ_{>0} →
      F_{-k} = (-1)^{k+1}F_k
    )
  } →
  
  assert(
    F_{-(n+1)}F_{-(n-1)} - (F_{-n})^2
  ) →
  
  apply(FibonacciNegativeIndex()) →
  
  assert(
    ((-1)^{n+2}F_{n+1})((-1)^nF_{n-1}) - ((-1)^{n+1}F_n)^2
  ) →
  
  simplify() →
  
  assert(
    (-1)^{2n+2}F_{n+1}F_{n-1} - (-1)^{2n+2}F_n^2
  ) →
  
  lemma EvenPowerNegativeOne() {
    assert(
      ∀k ∈ ℤ →
      (-1)^{2k} = 1
    )
  } →
  
  apply(EvenPowerNegativeOne()) →
  
  assert(
    F_{n+1}F_{n-1} - F_n^2
  ) →
  
  apply(CassiniIdentity()) →
  
  assert((-1)^n)
}