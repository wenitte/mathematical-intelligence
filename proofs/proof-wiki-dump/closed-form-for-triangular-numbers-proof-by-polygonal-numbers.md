theorem Triangular_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ T_n = ∑_{i=1}^n i = (n(n+1))/2
  )
} ↔

proof Triangular_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  assert(T_n = P(3,n)) →  // Triangular numbers are 3-gonal numbers
  
  lemma Polygonal_Numbers_Form() {
    assert(
      ∀k,n ∈ ℕ ⇒ P(k,n) = (n/2)((k-2)n - k + 4)
    )
  } →
  
  apply(Polygonal_Numbers_Form()) →
  substitute(k := 3) →
  assert(
    T_n = (n/2)((3-2)n - 3 + 4)
  ) →
  
  simplify() →
  assert(
    T_n = (n/2)(n - 3 + 4)
  ) →
  
  simplify() →
  assert(
    T_n = (n/2)(n + 1)
  ) →
  
  assert(
    T_n = (n(n+1))/2
  )
}