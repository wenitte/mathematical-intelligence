theorem Balanced_Set_Connected() {
  assert(
    ∀GF ∈ {ℝ,ℂ} ∧
    ∀X: TopologicalVectorSpace(GF) ∧
    ∀B ⊆ X where isBalanced(B)
    ⇒ isConnected(B)
  )
} ↔

proof Balanced_Set_Connected() {
  setVar(GF: {ℝ,ℂ}) →
  setVar(X: TopologicalVectorSpace(GF)) →
  setVar(B ⊆ X where isBalanced(B)) →
  
  lemma Show_Path_Connected() {
    setVar(x ∈ B) →
    define(p: [0,1] → X, t ↦ tx) →
    assert(p(0) = 0) ∧
    assert(p(1) = x) →
    assert(∀t ∈ [0,1] ⇒ tx ∈ B) by isBalanced(B) →
    
    lemma Show_Continuous() {
      define(m: [0,1] × X → X, (λ,x) ↦ λx) →
      assert(isContinuous(m)) by Restriction_Continuous_Mapping →
      assert(p = horizontalSection(m,x)) →
      assert(isContinuous(p)) by Horizontal_Section_Continuous
    } →
    
    assert(∀x ∈ B ⇒ ∃path(0,x) ∈ B) →
    assert(isPathConnected(B)) by Path_Connected_to_Point
  } →
  
  apply(Show_Path_Connected()) →
  assert(isConnected(B)) by Path_Connected_Space_Connected
}