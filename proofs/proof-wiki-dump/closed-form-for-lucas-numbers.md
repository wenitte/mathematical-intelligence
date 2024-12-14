theorem Lucas_Numbers_Closed_Form() {
  assert(
    ∀n ∈ ℕ ⇒ Ln = φⁿ + (1 - φ)ⁿ = ((1 + √5)/2)ⁿ + ((1 - √5)/2)ⁿ
    ∧ φ̂ = 1 - φ = -1/φ ⇒ Ln = φⁿ + φ̂ⁿ
  )
} ↔

proof Lucas_Numbers_Closed_Form() {
  define(P(n): Ln = φⁿ + φ̂ⁿ) →
  
  # Base cases
  assert(P(0): φ⁰ + φ̂⁰ = 1 + 1 = 2 = L₀) →
  assert(P(1): φ¹ + (1 - φ)¹ = φ + 1 - φ = 1 = L₁) →
  
  # Induction step
  lemma Golden_Mean_Properties() {
    assert(
      φ² = ((1 + √5)/2)² = (6 + 2√5)/4 = (3 + √5)/2 = 1 + φ
      ∧ φ̂² = ((1 - √5)/2)² = (6 - 2√5)/4 = (3 - √5)/2 = 1 + φ̂
    )
  } →
  
  setVar(k: ℕ) →
  assume(∀j ∈ [0..k+1]: Lⱼ = φʲ + φ̂ʲ) →
  
  assert(
    φᵏ⁺² + φ̂ᵏ⁺² 
    = (1 + φ)φᵏ + (1 + φ̂)φ̂ᵏ
    = (φᵏ + φ̂ᵏ) + (φᵏ⁺¹ + φ̂ᵏ⁺¹)
    = Lₖ + Lₖ₊₁ 
    = Lₖ₊₂
  ) →
  
  applyInduction(Second_Principle) →
  conclude(∀n ∈ ℕ: Ln = φⁿ + φ̂ⁿ)
}