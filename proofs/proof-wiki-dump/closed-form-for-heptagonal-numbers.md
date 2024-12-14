theorem Heptagonal_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ H_n = (n(5n - 3))/2
  )
} ↔

proof Heptagonal_Numbers_Closed_Form() {
  setVar(n: ℕ) →
  setVar(k: ℕ, k = 7) →
  
  lemma Polygonal_Numbers_Form() {
    assert(
      P(k,n) = (n/2)((k-2)n - k + 4)
    )
  } →
  
  assert(H_n = P(7,n)) →
  
  compute(
    H_n = (n/2)((7-2)n - 7 + 4)
  ) →
  
  compute(
    H_n = (n/2)(5n - 3)
  ) →
  
  conclude(
    H_n = (n(5n - 3))/2
  )
}