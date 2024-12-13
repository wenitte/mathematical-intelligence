theorem Students_Physics_Chemistry() {
  assert(
    ∃S₁,S₂,S₃ ⊆ U ∧
    |U| = 75 ∧
    |S₁| = 40 ∧
    |S₂| = 60 ∧
    |S₃| = 25 ∧
    S₁ ∪ S₂ ∪ S₃ = U ⇒
    |S₂ ∩ S₃| ≥ 10
  )
} ↔

proof Students_Physics_Chemistry() {
  setVar(S₁,S₂,S₃: Set) →
  setVar(U: Set) →
  setVar(N: ℕ) →
  
  assert(N = |S₂ ∩ S₃|) →
  
  lemma Set_Union_Cardinality() {
    assert(
      |S₂ ∪ S₃| = |S₂| + |S₃| - |S₂ ∩ S₃|
    )
  } →
  
  assert(|S₂ ∪ S₃| ≤ |U|) →
  apply(Set_Union_Cardinality()) →
  
  assert(75 ≤ 60 + 25 - N) →
  assert(75 ≤ 85 - N) →
  assert(-N ≥ -10) →
  assert(N ≥ 10) →
  
  conclude(|S₂ ∩ S₃| ≥ 10)
}