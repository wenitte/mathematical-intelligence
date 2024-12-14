theorem Centered_Hexagonal_Numbers() {
  assert(
    ∀n ∈ ℕ ⇒ (Cₙ = 3n(n-1) + 1)
    where Cₙ := nth_centered_hexagonal_number
  )
} ↔

proof Centered_Hexagonal_Numbers() {
  setVar(n: ℕ) →
  
  lemma Definition_Centered_Hex() {
    assert(Cₙ = 1 + ∑_{k=1}^{n-1} 6k)
  } →

  assert(Cₙ = 1 + 6∑_{k=1}^{n-1} k) →

  lemma Triangular_Numbers() {
    assert(∑_{k=1}^{n-1} k = (n(n-1))/2)
  } →

  apply(Triangular_Numbers()) →
  assert(Cₙ = 1 + 6((n(n-1))/2)) →
  assert(Cₙ = 1 + 3n(n-1)) →
  assert(Cₙ = 3n(n-1) + 1)
}