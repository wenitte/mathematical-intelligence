theorem Biconditional_Implies_Conjunction() {
  assert(
    p ⟺ q ⊢ ((p ∨ q) → (p ∧ q))
  )
} ↔

proof Biconditional_Implies_Conjunction() {
  assert(p ⟺ q) →
  
  lemma Biconditional_To_Disjunction() {
    assert(p ⟺ q ↔ ((p ∧ q) ∨ (¬p ∧ ¬q)))
  } →
  apply(Biconditional_To_Disjunction()) →
  assert((p ∧ q) ∨ (¬p ∧ ¬q)) →
  
  lemma DeMorgans_Law() {
    assert((¬p ∧ ¬q) ↔ ¬(p ∨ q))
  } →
  apply(DeMorgans_Law()) →
  assert((p ∧ q) ∨ ¬(p ∨ q)) →
  
  lemma Disjunction_Commutative() {
    assert(A ∨ B ↔ B ∨ A)
  } →
  apply(Disjunction_Commutative()) →
  assert(¬(p ∨ q) ∨ (p ∧ q)) →
  
  lemma Material_Implication() {
    assert((¬A ∨ B) ↔ (A → B))
  } →
  apply(Material_Implication()) →
  assert((p ∨ q) → (p ∧ q))
}