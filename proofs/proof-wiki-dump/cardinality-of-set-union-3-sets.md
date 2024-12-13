theorem Set_Union_Cardinality_Three() {
  assert(
    ∀S₁,S₂,S₃ ∈ FiniteSets ⇒
    |S₁ ∪ S₂ ∪ S₃| = |S₁| + |S₂| + |S₃| - |S₁ ∩ S₂| - |S₁ ∩ S₃| - |S₂ ∩ S₃| + |S₁ ∩ S₂ ∩ S₃|
  )
} ↔

proof Set_Union_Cardinality_Three() {
  setVar(S₁,S₂,S₃: FiniteSet) →
  apply(General_Set_Union_Cardinality_Principle()) →
  assert(conclusion: |S₁ ∪ S₂ ∪ S₃| = |S₁| + |S₂| + |S₃| - |S₁ ∩ S₂| - |S₁ ∩ S₃| - |S₂ ∩ S₃| + |S₁ ∩ S₂ ∩ S₃|)
}