theorem ContinuousAbsValueRule() {
  assert(
    ∀S[TopologicalSpace] ∧
    ∀f: S → ℝ[Continuous] ∧
    ∀s ∈ S: |f|(s) = |f(s)| 
    ⇒ 
    |f|: S → ℝ[Continuous]
  )
}

proof ContinuousAbsValueRule() {
  setVar(S: TopologicalSpace) →
  setVar(f: S → ℝ[Continuous]) →
  
  lemma AbsValueComposition() {
    assert(|f| = |·| ∘ f) ∧
    assert(|·|: ℝ → ℝ)
  } →
  
  lemma AbsValueContinuous() {
    assert(|·|: ℝ → ℝ[Continuous])
  } →
  
  lemma CompositionContinuous() {
    assert(
      ∀g: A → B[Continuous] ∧
      ∀h: B → C[Continuous] 
      ⇒ 
      (h ∘ g): A → C[Continuous]
    )
  } →
  
  apply(AbsValueComposition()) →
  apply(AbsValueContinuous()) →
  apply(CompositionContinuous(), {g: f, h: |·|}) →
  
  assert(|f|: S → ℝ[Continuous])
}