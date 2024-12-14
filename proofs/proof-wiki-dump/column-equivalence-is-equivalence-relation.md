theorem Column_Equivalence_Is_Equivalence() {
  assert(
    ∀A,B,C ∈ 𝕄(m,n) where m,n ∈ ℤ>0 ⇒
    Column_Equivalence(A,B) is_an equivalence_relation
  )
} ↔

proof Column_Equivalence_Is_Equivalence() {
  setVar(A,B,C: 𝕄(m,n)) →
  
  lemma Reflexive() {
    setVar(κᵢ: column(A)) →
    setVar(e: elementary_column_operation) →
    assert(e(κᵢ) = 1κᵢ) →
    assert(e(A) = A) →
    conclude(A ∼ A)
  } →

  lemma Symmetric() {
    assume(A ∼ B) →
    setVar(Γ: column_operation(A → B)) →
    apply(Column_Operation_Has_Inverse) →
    assert(∃Γ': column_operation(B → A)) →
    conclude(B ∼ A)
  } →

  lemma Transitive() {
    assume(A ∼ B ∧ B ∼ C) →
    setVar(Γ₁: column_operation(A → B)) →
    setVar(Γ₂: column_operation(B → C)) →
    apply(Sequence_Of_Column_Operations_Is_Column_Operation) →
    assert(∃Γ = Γ₂∘Γ₁: column_operation(A → C)) →
    conclude(A ∼ C)
  } →

  apply(Reflexive()) →
  apply(Symmetric()) →
  apply(Transitive()) →
  apply(Equivalence_Relation_Definition) →
  conclude(Column_Equivalence is_an equivalence_relation)
}