theorem CardinalitySetUnion_MathChem() {
  assert(
    let(S₁: set, S₂: set, S₃: set) ∧
    |S₁| = 40 ∧ |S₂| = 60 ∧ |S₃| = 25 ∧
    |S₁ ∪ S₂ ∪ S₃| = 75 ∧
    |S₁ ∩ S₂ ∩ S₃| = 5 →
    |S₁ ∩ S₃| ≤ 20
  )
} ↔

proof CardinalitySetUnion_MathChem() {
  setVar(S₁: set, S₂: set, S₃: set) →
  setVar(N = |S₁ ∩ S₃|) →
  
  lemma NonPhysicsStudents() {
    assert(
      |(S₁ ∪ S₃) \ S₂| = |(S₁ ∪ S₂ ∪ S₃) \ S₂| →
      |(S₁ ∪ S₂ ∪ S₃) \ S₂| = |S₁ ∪ S₂ ∪ S₃| - |S₂| →
      |S₁ ∪ S₂ ∪ S₃| - |S₂| = 75 - 60 →
      |(S₁ ∪ S₃) \ S₂| = 15
    )
  } →
  
  assert(
    |(S₁ ∩ S₃) \ S₂| ≤ |(S₁ ∪ S₃) \ S₂| →
    |(S₁ ∩ S₃) \ S₂| ≤ 15
  ) →
  
  assert(
    |S₁ ∩ S₃| = |(S₁ ∩ S₃) \ S₂| + |S₁ ∩ S₂ ∩ S₃| →
    |S₁ ∩ S₃| ≤ 15 + 5 →
    |S₁ ∩ S₃| ≤ 20
  )
}