theorem Complex_Sequence_Null_iff_Modulus_Null() {
  assert(
    ∀{zₙ}_{n∈ℕ} ∈ ℂ ⇒ (
      lim(n→∞)(zₙ) = 0 ↔ lim(n→∞)(|zₙ|) = 0
    )
  )
} ↔

proof Complex_Sequence_Null_iff_Modulus_Null() {
  setVar({zₙ}_{n∈ℕ}: ℂ) →
  
  lemma Convergence_Definition() {
    assert(
      lim(n→∞)(zₙ) = 0 ↔
      ∀ε>0 ∃N∈ℕ ∀n≥N (|zₙ| < ε)
    )
  } →
  
  lemma Modulus_Convergence_Definition() {
    assert(
      lim(n→∞)(|zₙ|) = 0 ↔
      ∀ε>0 ∃N∈ℕ ∀n≥N (||zₙ|| < ε)
    )
  } →
  
  lemma Double_Modulus_Property() {
    assert(
      ∀z∈ℂ (||z|| = |z|)
    )
  } →
  
  apply(Double_Modulus_Property()) →
  assert(||zₙ|| = |zₙ|) →
  
  apply(Convergence_Definition(), Modulus_Convergence_Definition()) →
  assert(
    (∀ε>0 ∃N∈ℕ ∀n≥N (|zₙ| < ε)) ↔
    (∀ε>0 ∃N∈ℕ ∀n≥N (|zₙ| < ε))
  ) →
  
  conclude(
    lim(n→∞)(zₙ) = 0 ↔ lim(n→∞)(|zₙ|) = 0
  )
}