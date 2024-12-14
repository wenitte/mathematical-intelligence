theorem Cauchy_Sequence_PAdicNorm() {
  assert(
    ∀p ∈ P, ∀{xₙ} ∈ ℤ ∧
    (∀n ∈ ℕ: xₙ₊₁ ≡ xₙ mod pⁿ) ⇒
    isCauchySequence({xₙ}, (ℚ,∥·∥_p))
  )
} ↔

proof Cauchy_Sequence_PAdicNorm() {
  setVar(p: P) →
  setVar({xₙ}: ℤ^ℕ) →
  
  lemma Divisibility() {
    assert(∀n ∈ ℕ: pⁿ | (xₙ₊₁ - xₙ)) ↔
    assert(∀n ∈ ℕ: ∥xₙ₊₁ - xₙ∥_p ≤ 1/pⁿ)
  } →

  lemma PowerLimit() {
    assert(lim_(n→∞) 1/pⁿ = 0)
  } →

  apply(Divisibility()) →
  apply(PowerLimit()) →
  apply(SqueezeTheorem()) →
  assert(lim_(n→∞) ∥xₙ₊₁ - xₙ∥_p = 0) →

  lemma NonArchimedean() {
    assert(isNonArchimedeanNorm(∥·∥_p))
  } →

  apply(NonArchimedean()) →
  apply(CauchySequence_NonArchimedeanNorm()) →
  assert(isCauchySequence({xₙ}, (ℚ,∥·∥_p)))
}