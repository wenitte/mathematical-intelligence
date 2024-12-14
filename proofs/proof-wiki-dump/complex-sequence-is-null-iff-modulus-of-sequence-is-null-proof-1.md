theorem Complex_Sequence_Null_iff_Modulus_Null() {
  assert(
    ∀{zₙ}_{n∈ℕ} ∈ ℂ ⇒
    (zₙ → 0 ↔ |zₙ| → 0)
  )
} ↔

proof Complex_Sequence_Null_iff_Modulus_Null() {
  setVar({zₙ}_{n∈ℕ}: ℂ) →
  
  lemma Definition_Convergent_Sequence() {
    assert(
      (zₙ → 0) ↔ (∀ε > 0 ∃N∈ℕ ∀n≥N: |zₙ| < ε)
    )
  } →
  
  lemma Modulus_Convergent_Sequence() {
    assert(
      (|zₙ| → 0) ↔ (∀ε > 0 ∃N∈ℕ ∀n≥N: ||zₙ|| < ε)
    )
  } →
  
  lemma Complex_Modulus_Real() {
    assert(
      ||zₙ|| = |zₙ|
    )
  } →
  
  apply(Definition_Convergent_Sequence()) ∧
  apply(Modulus_Convergent_Sequence()) ∧
  apply(Complex_Modulus_Real()) →
  
  assert(
    (|zₙ| → 0) ↔ (∀ε > 0 ∃N∈ℕ ∀n≥N: |zₙ| < ε)
  ) →
  
  assert(
    (zₙ → 0) ↔ (|zₙ| → 0)
  )
}