theorem EulerPhiArithmeticSequences() {
  assert(
    ∃S₁,S₂,S₃: Sequence ∧
    S₁ = (72,78,84,90) ∧
    S₂ = (216,222,228,234) ∧
    S₃ = (76326,76332,76338,76344) ∧
    ∀s ∈ {S₁,S₂,S₃} ⇒ isArithmeticSequence(s) ∧
    ∀x ∈ S₁ ⇒ φ(x) = 24 ∧
    ∀x ∈ S₂ ⇒ φ(x) = 72 ∧
    ∀x ∈ S₃ ⇒ φ(x) = 25440
  )
} ↔

proof EulerPhiArithmeticSequences() {
  // Prove S₁ is arithmetic
  assert(78-72 = 6) →
  assert(84-78 = 6) →
  assert(90-84 = 6) →
  
  // Prove φ values for S₁
  assert(φ(72) = 24) →
  assert(φ(78) = 24) →
  assert(φ(84) = 24) →
  assert(φ(90) = 24) →

  // Prove S₂ is arithmetic
  assert(222-216 = 6) →
  assert(228-222 = 6) →
  assert(234-228 = 6) →

  // Prove φ values for S₂
  assert(φ(216) = 72) →
  assert(φ(222) = 72) →
  assert(φ(228) = 72) →
  assert(φ(234) = 72) →

  // Prove S₃ is arithmetic
  assert(76332-76326 = 6) →
  assert(76338-76332 = 6) →
  assert(76344-76338 = 6) →

  // Prove φ values for S₃ 
  assert(φ(76326) = 25440) →
  assert(φ(76332) = 25440) →
  assert(φ(76338) = 25440) →
  assert(φ(76344) = 25440)
}

lemma ArithmeticSequence() {
  assert(
    ∀s: Sequence ⇒
    isArithmeticSequence(s) ↔
    ∃d ∈ ℤ: ∀i ∈ [1..length(s)-1] ⇒ 
    s[i+1] - s[i] = d
  )
}