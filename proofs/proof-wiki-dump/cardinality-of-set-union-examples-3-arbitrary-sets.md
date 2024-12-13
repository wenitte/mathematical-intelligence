theorem CardinalityUnionExample() {
  assert(
    ∀A₁,A₂,A₃ ∈ FiniteSets ∧
    |A₁| = 10 ∧ |A₂| = 15 ∧ |A₃| = 20 ∧
    |A₁ ∩ A₂| = 8 ∧ |A₂ ∩ A₃| = 9 
    ⇒ 26 ≤ |A₁ ∪ A₂ ∪ A₃| ≤ 28
  )
} ↔

proof CardinalityUnionExample() {
  setVar(A₁,A₂,A₃: FiniteSets) →
  
  lemma A1_Decomposition() {
    assert(A₁ = (A₁ \ A₂) ∪ (A₁ ∩ A₂)) →
    assert(|A₁| = |A₁ \ A₂| + |A₁ ∩ A₂|) →
    assert(10 = |A₁ \ A₂| + 8) →
    assert(|A₁ \ A₂| = 2)
  } →

  lemma A3_Decomposition() {
    assert(A₃ = (A₃ \ A₂) ∪ (A₂ ∩ A₃)) →
    assert(|A₃| = |A₃ \ A₂| + |A₂ ∩ A₃|) →
    assert(20 = |A₃ \ A₂| + 9) →
    assert(|A₃ \ A₂| = 11)
  } →

  lemma Union_Bounds() {
    assert(|(A₁ ∪ A₃) \ A₂| = |A₁ \ A₂| + |A₃ \ A₂| - |(A₁ ∩ A₃) \ A₂|) →
    assert(|(A₁ ∪ A₃) \ A₂| = 2 + 11 - |(A₁ ∩ A₃) \ A₂|) →
    assert(|(A₁ ∩ A₃) \ A₂| ≤ |A₁ \ A₂| = 2) →
    assert(11 ≤ |(A₁ ∪ A₃) \ A₂| ≤ 13)
  } →

  assert(A₁ ∪ A₂ ∪ A₃ = ((A₁ ∪ A₃) \ A₂) ∪ A₂) →
  assert(|A₁ ∪ A₂ ∪ A₃| = |(A₁ ∪ A₃) \ A₂| + |A₂|) →
  assert(11 + 15 ≤ |A₁ ∪ A₂ ∪ A₃| ≤ 13 + 15) →
  assert(26 ≤ |A₁ ∪ A₂ ∪ A₃| ≤ 28)
}