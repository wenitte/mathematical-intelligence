theorem Hexagonal_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ H_n = n(2n - 1)
  )
} ↔ 

proof Hexagonal_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  lemma Polygonal_Numbers_Formula() {
    assert(
      ∀k,n ∈ ℕ ⇒ P(k,n) = (n/2)((k-2)n - k + 4)
    )
  } →
  assert(H_n = P(6,n)) →
  apply(Polygonal_Numbers_Formula()) →
  assert(
    H_n = (n/2)((6-2)n - 6 + 4)
  ) →
  assert(
    H_n = (n/2)(4n - 2)
  ) →
  assert(
    H_n = (n(4n - 2))/2
  ) →
  assert(
    H_n = 2n^2 - n
  ) →
  assert(
    H_n = n(2n - 1)
  )
}