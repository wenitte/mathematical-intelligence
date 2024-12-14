theorem Clavius_Law() {
  assert(
    (¬p → p) ⊢ p
  )
} ↔

proof Clavius_Law() {
  lemma LEM() {
    assert(p ∨ ¬p)  // Law of Excluded Middle
  } →
  
  branch Case_Not_P() {
    setAssume(¬p) →
    assert(¬p → p) →  // Premise
    apply(MPP, [¬p, ¬p → p]) →
    conclude(p)
  } →
  
  branch Case_P() {
    setAssume(p) →
    conclude(p)
  } →
  
  apply(LEM()) →
  apply(ProofByCases, [Case_Not_P(), Case_P()]) →
  conclude(p)
}

// Dependencies:
// - Law of Excluded Middle (LEM)
// - Modus Ponendo Ponens (MPP)
// - Proof by Cases