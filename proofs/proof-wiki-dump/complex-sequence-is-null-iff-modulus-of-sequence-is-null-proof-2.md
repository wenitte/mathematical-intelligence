theorem Complex_Sequence_Null_Modulus() {
  assert(
    ∀{zₙ} ∈ ℂℕ ⇒ (
      (lim[n→∞] zₙ = 0) ↔ (lim[n→∞] |zₙ| = 0)
    )
  )
}

proof Complex_Sequence_Null_Modulus() {
  setVar(zₙ: ℂℕ) →
  
  lemma Modulus_Identity() {
    assert(|zₙ - 0| = |zₙ| = ||zₙ| - 0| = |zₙ - 0|)
  } →

  assert(
    lim[n→∞] zₙ = 0 ↔
    (∀ε ∈ ℝ₊)(∃N ∈ ℝ)(∀n > N ⇒ |zₙ - 0| < ε)
  ) by(def_complex_convergence) →

  apply(Modulus_Identity()) →

  assert(
    (∀ε ∈ ℝ₊)(∃N ∈ ℝ)(∀n > N ⇒ |zₙ - 0| < ε) ↔
    (∀ε ∈ ℝ₊)(∃N ∈ ℝ)(∀n > N ⇒ ||zₙ| - 0| < ε)
  ) →

  assert(
    (∀ε ∈ ℝ₊)(∃N ∈ ℝ)(∀n > N ⇒ ||zₙ| - 0| < ε) ↔
    lim[n→∞] |zₙ| = 0
  ) by(def_complex_convergence) 
}