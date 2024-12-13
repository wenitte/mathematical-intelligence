theorem Biconditional_Elimination() {
  assert(
    (p ⟺ q) ⊢ (q → p)
  )
} ↔

proof Biconditional_Elimination() {
  premise(p ⟺ q) →
  apply(BiconditionalElimination(p ⟺ q)) →
  derive(q → p) →
  assert(q → p)
}