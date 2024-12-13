theorem Bound_For_Irrational_Difference() {
  assert(
    ∀x ∈ ℝ\ℚ ∧
    ∀{Cₙ} ∈ ConvergentSequence(x) ∧
    ∀n ≥ 1 →
    ((Cₙ < x < Cₙ₊₁) ∨ (Cₙ₊₁ < x < Cₙ)) ∧
    |x - Cₙ| < 1/(qₙqₙ₊₁)
  )
} ↔

proof Bound_For_Irrational_Difference() {
  setVar(x: ℝ\ℚ) →
  setVar({Cₙ}: ConvergentSequence(x)) →
  setVar(n: ℕ, n ≥ 1) →
  
  lemma Convergent_Alternation() {
    assert(
      ∀n ≥ 1 →
      ((Cₙ < x < Cₙ₊₁) ∨ (Cₙ₊₁ < x < Cₙ))
    )
  } →
  
  lemma Convergent_Difference() {
    assert(
      |x - Cₙ| < |Cₙ₊₁ - Cₙ|
    )
  } →
  
  lemma Convergent_Property() {
    assert(
      |Cₙ₊₁ - Cₙ| = 1/(qₙqₙ₊₁)
    )
  } →
  
  apply(Convergent_Difference()) →
  apply(Convergent_Property()) →
  assert(|x - Cₙ| < 1/(qₙqₙ₊₁))
}