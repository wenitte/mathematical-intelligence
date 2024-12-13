theorem SetUnion_StudentSubjects() {
  assert(
    ∀S₁,S₂,S₃ ⊆ U ∧
    |S₁| = 40 ∧ |S₂| = 60 ∧ |S₃| = 25 ∧
    |S₁ ∪ S₂ ∪ S₃| = 75 
    ⇒ |S₁ ∩ S₂| ≥ 25
  )
} ↔

proof SetUnion_StudentSubjects() {
  setVar(S₁: set, S₂: set, S₃: set) →
  setVar(U: set) # Universal set of all students →
  assert(S₁,S₂,S₃ ⊆ U) →
  
  letVar(N = |S₁ ∩ S₂|) →
  
  assert(|S₁| = 40) →
  assert(|S₂| = 60) →
  assert(|S₃| = 25) →
  assert(|S₁ ∪ S₂ ∪ S₃| = 75) →
  
  lemma SetUnionCardinality() {
    assert(|S₁ ∪ S₂| = |S₁| + |S₂| - |S₁ ∩ S₂|)
  } →
  
  apply(SetUnionCardinality()) →
  assert(|S₁ ∪ S₂| ≤ 75) →
  assert(|S₁| + |S₂| - N ≤ 75) →
  assert(40 + 60 - N ≤ 75) →
  assert(100 - N ≤ 75) →
  assert(-N ≤ -25) →
  assert(N ≥ 25)
}