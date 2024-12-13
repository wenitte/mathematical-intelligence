theorem Bessel_Negative_Integer_Order() {
  assert(
    ∀n ∈ ℤ⁺, ∀x ∈ ℝ ⇒ 
    J₍₋ₙ₎(x) = (-1)ⁿ·Jₙ(x)
  )
} ↔

proof Bessel_Negative_Integer_Order() {
  setVar(n: ℤ⁺, x: ℝ) →
  
  lemma Bessel_Integral_Rep() {
    assert(
      J₍₋ₙ₎(x) = (1/π)∫₀π cos(-nθ - x·sin(θ))dθ
    )
  } →
  
  apply(Bessel_Integral_Rep()) →
  setSubstitution(θ ↦ π - θ) →
  assert(
    J₍₋ₙ₎(x) = (1/π)∫₀π cos(-n(π - θ) - x·sin(π - θ))d(π - θ)
  ) →
  
  lemma Sine_Supplementary() {
    assert(sin(π - θ) = -sin(θ))
  } →
  
  apply(Sine_Supplementary()) →
  assert(
    J₍₋ₙ₎(x) = -(1/π)∫π₀ cos(nθ - x·sin(θ) - nπ)dθ
  ) →
  
  lemma Definite_Integral_Reversal() {
    assert(∫ᵃᵇ f(x)dx = -∫ᵇᵃ f(x)dx)
  } →
  
  apply(Definite_Integral_Reversal()) →
  assert(
    J₍₋ₙ₎(x) = (1/π)∫₀π cos(nθ - x·sin(θ) - nπ)dθ
  ) →
  
  lemma Cosine_Integer_Multiple() {
    assert(
      cos(α - nπ) = (-1)ⁿ·cos(α)
    )
  } →
  
  apply(Cosine_Integer_Multiple()) →
  assert(
    J₍₋ₙ₎(x) = (-1)ⁿ·(1/π)∫₀π cos(nθ - x·sin(θ))dθ
  ) →
  
  lemma Bessel_Integral_Rep_Positive() {
    assert(
      Jₙ(x) = (1/π)∫₀π cos(nθ - x·sin(θ))dθ
    )
  } →
  
  apply(Bessel_Integral_Rep_Positive()) →
  assert(
    J₍₋ₙ₎(x) = (-1)ⁿ·Jₙ(x)
  )
}