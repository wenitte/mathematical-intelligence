theorem Set_Union_Cardinality() {
  assert(
    ∀S₁,S₂ ∈ FiniteSets ⇒ 
    |S₁ ∪ S₂| = |S₁| + |S₂| - |S₁ ∩ S₂|
  )
} ↔

proof Set_Union_Cardinality() {
  setVar(S₁,S₂: FiniteSets) →
  
  lemma Cardinality_Additive() {
    assert(
      |S₁ ∪ S₂| + |S₁ ∩ S₂| = |S₁| + |S₂|
    )
  } →
  
  apply(Cardinality_Additive()) →
  algebraicStep(
    |S₁ ∪ S₂| + |S₁ ∩ S₂| = |S₁| + |S₂| →
    |S₁ ∪ S₂| = |S₁| + |S₂| - |S₁ ∩ S₂|
  ) →
  
  assert(
    |S₁ ∪ S₂| = |S₁| + |S₂| - |S₁ ∩ S₂|
  )
}