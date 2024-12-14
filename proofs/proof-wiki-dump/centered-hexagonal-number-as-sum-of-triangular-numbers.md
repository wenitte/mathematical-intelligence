theorem Centered_Hexagonal_Number() {
  assert(
    ∀n ∈ ℕ ⇒ C_n = 6T_{n-1} + 1
    where(
      C_n := "nth centered hexagonal number",
      T_{n-1} := "(n-1)th triangular number"
    )
  )
} ↔

proof Centered_Hexagonal_Number() {
  setVar(n: ℕ) →
  
  lemma Hexagonal_Closed_Form() {
    assert(C_n = 3n(n-1) + 1)
  } →
  
  lemma Triangular_Closed_Form() {
    assert(T_{n-1} = ((n-1)n)/2)
  } →
  
  apply(Hexagonal_Closed_Form()) →
  assert(C_n = 3n(n-1) + 1) →
  
  apply(Triangular_Closed_Form()) →
  assert(
    C_n = 6((n-1)n)/2 + 1
  ) →
  
  assert(
    C_n = 6T_{n-1} + 1
  )
}