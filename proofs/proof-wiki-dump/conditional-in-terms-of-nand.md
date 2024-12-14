theorem Conditional_NAND_Equivalence() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ (p → q) ↔ (p ↑ (q ↑ q))
  )
}

proof Conditional_NAND_Equivalence_1() {
  setVar(p,q: 𝔹) →
  assert(p → q) →
  assert(¬(p ∧ ¬q)) ↔ // Conditional Equivalence
  assert(p ↑ ¬q) ↔ // Definition of NAND
  assert(p ↑ (q ↑ q)) // NAND with Equal Arguments
}

proof Conditional_NAND_Equivalence_2() {
  setVar(p,q: 𝔹) →
  assert(p → q) →
  assert(¬p ∨ q) ↔ // Material Implication
  assert(¬p ∨ ¬¬q) ↔ // Double Negation
  assert(p ↑ ¬q) ↔ // NAND as Disjunction
  assert(p ↑ (q ↑ q)) // NAND with Equal Arguments
}