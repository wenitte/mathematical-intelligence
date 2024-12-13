theorem Biconditional_Disjunction_Implication() {
  assert(
    ((p ∨ q) → (p ∧ q)) ⊢ (p ↔ q)
  )
} ↔

proof Biconditional_Disjunction_Implication() {
  premise((p ∨ q) → (p ∧ q)) →
  
  step1((p ∨ q) → (p ∧ q)) →
  assert(¬(p ∨ q) ∨ (p ∧ q)) ∧
  apply(Material_Implication) →
  
  step2(¬(p ∨ q) ∨ (p ∧ q)) →
  assert((p ∧ q) ∨ ¬(p ∨ q)) ∧
  apply(Disjunction_Commutative) →
  
  step3((p ∧ q) ∨ ¬(p ∨ q)) →
  assert((p ∧ q) ∨ (¬p ∧ ¬q)) ∧
  apply(DeMorgan_Laws) →
  
  step4((p ∧ q) ∨ (¬p ∧ ¬q)) →
  assert((p → q) ∧ (q → p)) ∧
  apply(Biconditional_Disjunction_Conjunction) →
  
  step5((p → q) ∧ (q → p)) →
  assert(p ↔ q) ∧
  apply(Material_Equivalence)
}