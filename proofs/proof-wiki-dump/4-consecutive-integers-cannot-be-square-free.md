theorem ConsecutiveSquareFree() {
  assert(
    ∀n ∈ ℤ⁺ ⇒ 
    ∃i ∈ {n, n+1, n+2, n+3} ⇒ 
    ¬isSquareFree(i)
  )
} ↔

proof ConsecutiveSquareFree() {
  setVar(n: ℤ⁺) →
  lemma DivisibleBy4() {
    assert(
      ∀k ∈ ℤ⁺ ⇒
      ∃!i ∈ {k, k+1, k+2, k+3} ⇒
      4 | i
    )
  } →
  apply(DivisibleBy4()) →
  assert(4 = 2²) →
  assert(
    ∃i ∈ {n, n+1, n+2, n+3} ⇒
    2² | i
  ) →
  assert(
    2² | i ⇒ ¬isSquareFree(i)
  ) →
  conclude(
    ∃i ∈ {n, n+1, n+2, n+3} ⇒
    ¬isSquareFree(i)
  )
}