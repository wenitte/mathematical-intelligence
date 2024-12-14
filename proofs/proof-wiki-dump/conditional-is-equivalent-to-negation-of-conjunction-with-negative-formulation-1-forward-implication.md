theorem Conditional_Implies_Negated_Conjunction() {
  assert(
    (p ⇒ q) ⊢ ¬(p ∧ ¬q)
  )
}

proof Conditional_Implies_Negated_Conjunction() {
  let P1 := (p ⇒ q) →
  assume(p ∧ ¬q) →
  
  lemma Extract_P() {
    assert((p ∧ ¬q) ⊢ p) →
    apply(∧E₁)
  } →
  
  lemma Extract_NotQ() {
    assert((p ∧ ¬q) ⊢ ¬q) →
    apply(∧E₂)
  } →
  
  lemma Derive_Q() {
    assert(P1 ∧ p ⊢ q) →
    apply(MP, [P1, Extract_P()])
  } →
  
  lemma Contradiction() {
    assert(q ∧ ¬q ⊢ ⊥) →
    apply(¬E, [Derive_Q(), Extract_NotQ()])
  } →
  
  conclude(¬(p ∧ ¬q)) by {
    apply(¬I, [Contradiction()])
  }
}