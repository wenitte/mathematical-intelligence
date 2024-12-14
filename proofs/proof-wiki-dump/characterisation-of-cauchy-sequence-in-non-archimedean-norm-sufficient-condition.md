theorem CauchySequenceNonArchimedean() {
  assert(
    ∀R: NormedDivisionRing ∧
    ∀norm: NonArchimedeanNorm(R) ∧
    ∀{xₙ}: Sequence(R) ∧
    (lim[n→∞] ∥xₙ₊₁ - xₙ∥ = 0) →
    isCauchySequence({xₙ})
  )
} ↔

proof CauchySequenceNonArchimedean() {
  setVar(ε > 0) →
  assert(
    ∃N ∈ ℕ: ∀n > N → ∥xₙ₊₁ - xₙ∥ < ε
  ) →
  
  let(n, m ∈ ℕ: n, m > N ∧ m = n + r) →
  
  assert(
    ∥xₘ - xₙ∥ = 
    ∥xₙ₊ᵣ - xₙ₊ᵣ₋₁ + xₙ₊ᵣ₋₁ - xₙ₊ᵣ₋₂ + ... + xₙ₊₁ - xₙ∥
  ) →
  
  lemma NonArchimedeanProperty() {
    assert(
      ∥a + b + ... + z∥ = max{∥a∥, ∥b∥, ..., ∥z∥}
      where norm isNonArchimedean
    )
  } →
  
  apply(NonArchimedeanProperty()) →
  
  assert(
    ∥xₘ - xₙ∥ = 
    max{∥xₙ₊ᵣ - xₙ₊ᵣ₋₁∥, ∥xₙ₊ᵣ₋₁ - xₙ₊ᵣ₋₂∥, ..., ∥xₙ₊₁ - xₙ∥}
  ) →
  
  assert(
    ∃s ∈ [1,r]: ∥xₘ - xₙ∥ = ∥xₙ₊ₛ - xₙ₊ₛ₋₁∥
  ) →
  
  assert(
    ∥xₘ - xₙ∥ < ε
  ) →
  
  conclude(
    isCauchySequence({xₙ})
  )
}