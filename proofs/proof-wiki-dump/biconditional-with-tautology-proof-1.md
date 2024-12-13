theorem Biconditional_With_Tautology() {
  assert(
    p ↔ ⊤ ⊢⊣ p
  )
} ↔

proof Biconditional_With_Tautology() {
  // First direction: p ↔ ⊤ ⊢ p
  proof_part_1() {
    assume(p ↔ ⊤) →
    assert(⊤) by(⊤_Introduction) →
    extract(⊤ → p) by(Biconditional_Elimination, 1) →
    conclude(p) by(Modus_Ponens, 2, 3)
  } →

  // Second direction: p ⊢ p ↔ ⊤
  proof_part_2() {
    setVar(p) →
    assume(⊤) →
    assert(⊤) by(⊤_Introduction) →
    derive(p → ⊤) by(→_Introduction, 2, 3) →
    derive(⊤ → p) by(→_Introduction, 1, 2) →
    conclude(p ↔ ⊤) by(↔_Introduction, 4, 5)
  } →

  // Combine both directions
  conclude(p ↔ ⊤ ⊢⊣ p) by(proof_part_1, proof_part_2)
}