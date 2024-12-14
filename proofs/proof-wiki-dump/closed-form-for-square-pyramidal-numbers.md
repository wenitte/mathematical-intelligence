theorem Square_Pyramidal_Numbers() {
  assert(
    ∀n ∈ ℕ ⇒ Sₙ = (n(n+1)(2n+1))/6
  )
  where(
    Sₙ = "nth square pyramidal number"
  )
} ↔

proof Square_Pyramidal_Numbers() {
  setVar(n: ℕ) →
  assert(
    Sₙ = ∑(k=1 to n)[k²]
  ) →
  lemma Sum_Of_Squares() {
    assert(
      ∀n ∈ ℕ ⇒ ∑(k=1 to n)[k²] = (n(n+1)(2n+1))/6
    )
  } →
  apply(Sum_Of_Squares()) →
  assert(
    Sₙ = (n(n+1)(2n+1))/6
  )
}