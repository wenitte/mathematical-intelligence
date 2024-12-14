theorem Triangular_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ T_n = ∑(i=1 to n)(i) = (n(n+1))/2
  )
} ↔

proof Triangular_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  assert(T_n = ∑(i=1 to n)(i)) →
  assert(T_n = n + (n-1) + (n-2) + ... + 2 + 1) →
  assert(T_n = n + (n-1) + (n-2) + ... + (n-(n-2)) + (n-(n-1))) →
  
  lemma Extract_N_Terms() {
    assert(
      T_n = n×n + (-1 + -2 + ... + -(n-2) + -(n-1))
    )
  } →
  apply(Extract_N_Terms()) →
  
  assert(T_n = n² - (1 + 2 + ... + (n-1))) →
  assert(T_n = n² - T_(n-1))  // Equation (1) →
  
  lemma Recursive_Definition() {
    assert(T_n = n + T_(n-1))  // Equation (2)
  } →
  apply(Recursive_Definition()) →
  
  assert(
    Equation(1) + Equation(2) →
    2T_n = n² + n
  ) →
  
  assert(T_n = (n(n+1))/2) →
  conclude()
}