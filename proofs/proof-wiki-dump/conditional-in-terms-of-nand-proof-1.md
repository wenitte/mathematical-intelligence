theorem ConditionalNAND() {
  assert(
    p → q ↔ p ⟂ (q ⟂ q)
  )
} ↔

proof ConditionalNAND() {
  // Step 1: Conditional to negation of conjunction
  assert(
    p → q ↔ ¬(p ∧ ¬q)
  ) →

  // Step 2: Negation of conjunction to NAND
  assert(
    ¬(p ∧ ¬q) ↔ p ⟂ ¬q
  ) →

  lemma NAND_Equal_Args() {
    assert(
      ¬q ↔ (q ⟂ q)
    )
  } →

  // Step 3: Apply NAND with equal arguments
  apply(NAND_Equal_Args()) →
  
  assert(
    p ⟂ ¬q ↔ p ⟂ (q ⟂ q)
  ) →

  // Final conclusion by transitivity
  conclude(
    p → q ↔ p ⟂ (q ⟂ q)
  )
}