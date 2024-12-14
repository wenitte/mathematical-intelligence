theorem Compactness() {
  assert(
    ∀T ∈ ℒ_sentences ⇒ 
    (Satisfiable(T) ↔ FinitelySatisfiable(T))
  )
} ↔

proof Compactness() {
  // Direction 1: Satisfiable → Finitely Satisfiable (trivial)
  lemma Forward_Direction() {
    assert(
      Satisfiable(T) → FinitelySatisfiable(T)
    )
  } →

  // Direction 2: Finitely Satisfiable → Satisfiable (by contraposition)
  lemma Backward_Direction() {
    setVar(φ: ℒ_sentence) →
    assume(¬Satisfiable(T)) →
    assert(T ⊨ (φ ∧ ¬φ)) →
    apply(Gödel_Completeness_Theorem()) →
    assert(T ⊢ (φ ∧ ¬φ)) →
    
    // Only finite subset needed for deduction
    exists(Δ ⊆ T) {
      assert(IsFinite(Δ)) ∧
      assert(Δ ⊢ (φ ∧ ¬φ))
    } →
    
    apply(Soundness_Theorem()) →
    assert(Δ ⊨ (φ ∧ ¬φ)) →
    assert(¬Satisfiable(Δ)) →
    
    // By contraposition
    assert(
      ¬FinitelySatisfiable(T) → ¬Satisfiable(T)
    ) →
    assert(
      Satisfiable(T) → FinitelySatisfiable(T)
    )
  }
}