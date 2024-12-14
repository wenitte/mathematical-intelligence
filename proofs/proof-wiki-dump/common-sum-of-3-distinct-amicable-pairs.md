theorem CommonSum_AmicablePairs() {
  assert(
    ∃n ∈ ℤ [n = 64795852800] ∧
    ∃(a₁,b₁,a₂,b₂,a₃,b₃ ∈ ℤ) [
      (a₁ = 29912035725 ∧ b₁ = 34883817075) ∧
      (a₂ = 31695652275 ∧ b₂ = 33100200525) ∧
      (a₃ = 32129958525 ∧ b₃ = 32665894275) ∧
      isAmicablePair(a₁,b₁) ∧ isAmicablePair(a₂,b₂) ∧ isAmicablePair(a₃,b₃) ∧
      isOdd(a₁) ∧ isOdd(b₁) ∧ isOdd(a₂) ∧ isOdd(b₂) ∧ isOdd(a₃) ∧ isOdd(b₃) ∧
      n = a₁ + b₁ = a₂ + b₂ = a₃ + b₃
    ]
  )
} ↔

proof CommonSum_AmicablePairs() {
  setVar(n: ℤ, n = 64795852800) →
  
  lemma FirstPair() {
    assert(
      σ₁(29912035725) = σ₁(34883817075) = 64795852800 ∧
      64795852800 = 29912035725 + 34883817075
    )
  } →
  
  lemma SecondPair() {
    assert(
      σ₁(31695652275) = σ₁(33100200525) = 64795852800 ∧
      64795852800 = 31695652275 + 33100200525
    )
  } →
  
  lemma ThirdPair() {
    assert(
      σ₁(32129958525) = σ₁(32665894275) = 64795852800 ∧
      64795852800 = 32129958525 + 32665894275
    )
  } →
  
  apply(FirstPair()) ∧ apply(SecondPair()) ∧ apply(ThirdPair()) →
  assert(
    ∀x ∈ {a₁,b₁,a₂,b₂,a₃,b₃} [x mod 2 = 1]
  )
}