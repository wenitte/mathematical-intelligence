theorem Pentagonal_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ P_n = (n(3n-1))/2
  )
} ↔

proof Pentagonal_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  setVar(k: ℕ, k = 5) →
  
  lemma Polygonal_Numbers_Formula() {
    assert(
      ∀k,n ∈ ℕ ⇒ P(k,n) = (n/2)((k-2)n - k + 4)
    )
  } →
  
  apply(Polygonal_Numbers_Formula()) →
  assert(P_n = P(5,n)) →
  assert(
    P_n = (n/2)((5-2)n - 5 + 4)
  ) →
  assert(
    P_n = (n/2)(3n - 1)
  ) →
  assert(
    P_n = (n(3n-1))/2
  )
}