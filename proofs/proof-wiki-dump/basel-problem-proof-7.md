theorem Basel_Problem() {
  assert(
    ∑(n=1 to ∞)[1/n²] = π²/6
  )
} ↔

proof Basel_Problem() {
  lemma Fourier_Series_X_Squared() {
    assert(
      ∀x ∈ (-π,π) ⇒ 
      x² = π²/3 + ∑(n=1 to ∞)[(-1)ⁿ(4/n²)cos(nx)]
    )
  } →
  
  setVar(x → π) →
  assert(
    π² = π²/3 + ∑(n=1 to ∞)[(-1)ⁿ(4/n²)cos(nπ)]
  ) →
  
  lemma Cosine_Multiple_Pi() {
    assert(
      ∀n ∈ ℕ ⇒ cos(nπ) = (-1)ⁿ
    )
  } →
  
  apply(Cosine_Multiple_Pi()) →
  assert(
    π² = π²/3 + ∑(n=1 to ∞)[(-1)ⁿ(4/n²)(-1)ⁿ]
  ) →
  
  simplify() →
  assert(
    π² = π²/3 + 4∑(n=1 to ∞)[1/n²]
  ) →
  
  subtract(π²/3) →
  assert(
    2π²/3 = 4∑(n=1 to ∞)[1/n²]
  ) →
  
  divide(4) →
  assert(
    ∑(n=1 to ∞)[1/n²] = π²/6
  )
}