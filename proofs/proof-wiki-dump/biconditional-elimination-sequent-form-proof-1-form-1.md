theorem Biconditional_Elimination_Implication() {
  assert(
    (p ⟺ q) ⊢ (p → q)
  )
} ↔

proof Biconditional_Elimination_Implication() {
  setPremise(p ⟺ q) →
  assert(
    (p ⟺ q) ≡ ((p → q) ∧ (q → p))
  ) →
  apply(Biconditional_Definition()) →
  assert(
    ((p → q) ∧ (q → p)) → (p → q)
  ) →
  apply(Conjunction_Elimination_Left()) →
  conclude(p → q)
}