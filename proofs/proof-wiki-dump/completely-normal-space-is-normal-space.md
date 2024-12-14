theorem CompletelyNormal_Implies_Normal() {
  assert(
    ∀S ∀τ (CompletelyNormal(S,τ) → Normal(S,τ))
  )
} ↔

proof CompletelyNormal_Implies_Normal() {
  setVar(S: TopologicalSpace) →
  setVar(τ: Topology) →
  
  lemma CompletelyNormal_Definition() {
    assert(
      CompletelyNormal(S,τ) ↔ (T5(S,τ) ∧ T1(S,τ))
    )
  } →
  
  lemma T5_Implies_T4() {
    assert(
      T5(S,τ) → T4(S,τ)
    )
  } →
  
  lemma Normal_Definition() {
    assert(
      Normal(S,τ) ↔ (T4(S,τ) ∧ T1(S,τ))
    )
  } →
  
  assume(CompletelyNormal(S,τ)) →
  apply(CompletelyNormal_Definition()) →
  assert(T5(S,τ) ∧ T1(S,τ)) →
  apply(T5_Implies_T4()) →
  assert(T4(S,τ) ∧ T1(S,τ)) →
  apply(Normal_Definition()) →
  assert(Normal(S,τ))
}