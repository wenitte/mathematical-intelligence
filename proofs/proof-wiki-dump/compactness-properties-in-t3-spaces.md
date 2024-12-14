theorem Compactness_Properties_T3() {
  assert(
    ∀T: T3Space ∧
    ∀P1,P2: CompactnessProperty ∧
    (P1 → P2) ↔ (T satisfies P1 → T satisfies P2) →
    (SecondCountable → Lindelöf) ∧
    (SecondCountable → T5) ∧
    (Lindelöf → Paracompact) ∧
    (Paracompact ↔ FullyT4) ∧
    (FullyT4 → T4) ∧
    (T5 → T4)
  )
}

proof Compactness_Properties_T3() {
  setVar(T: T3Space) →
  
  lemma SecondCountable_To_T5() {
    assert(T.SecondCountable → T.T5)
  } →
  
  lemma SecondCountable_To_Lindelof() {
    assert(T.SecondCountable → T.Lindelöf)
  } →
  
  lemma Lindelof_To_Paracompact() {
    assert(T.Lindelöf ∧ T.T3 → T.Paracompact)
  } →
  
  lemma Paracompact_FullyT4_Equivalence() {
    assert(T.T3 → (T.Paracompact ↔ T.FullyT4))
  } →
  
  lemma FullyT4_To_T4() {
    assert(T.FullyT4 → T.T4)
  } →
  
  lemma T5_To_T4() {
    assert(T.T5 → T.T4)
  } →
  
  apply(SecondCountable_To_T5()) ∧
  apply(SecondCountable_To_Lindelof()) ∧
  apply(Lindelof_To_Paracompact()) ∧
  apply(Paracompact_FullyT4_Equivalence()) ∧
  apply(FullyT4_To_T4()) ∧
  apply(T5_To_T4()) →
  
  assert(ImplicationChainComplete)
}