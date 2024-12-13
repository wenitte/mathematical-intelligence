theorem Cardinality_Finite_Set_Equivalence() {
  assert(
    ∀A: Set →
    (card(A) is_finite ↔ A is_finite)
  )
}

proof Cardinality_Finite_Set_Equivalence() {
  setVar(A: Set) →
  
  lemma Cardinal_Definition() {
    assert(card(A) ∼ A)
  } →
  
  proof_chain() {
    assert(card(A) is_finite) ↔
    assert(∃n ∈ ℕ: card(A) ∼ ℕ_n) →  // by definition of finite set
    assert(∃n ∈ ℕ: A ∼ ℕ_n) →        // by Cardinal_Definition and transitivity of ∼
    assert(A is_finite)                // by definition of finite set
  } →
  
  apply(Biconditional_Chain_Rule()) →
  conclude()
}