theorem Clavius_Law() {
  assert(
    (¬p → p) ⊢ p
  )
} ↔

proof Clavius_Law_Proof1() {
  setPremise(¬p → p) →
  assert(p ∨ ¬p) by LEM →
  
  branch Case1() {
    assume(¬p) →
    apply(ModusPonens(¬p → p, ¬p)) →
    conclude(p)
  } →
  
  branch Case2() {
    assume(p) →
    conclude(p)
  } →
  
  apply(ProofByCases(Case1(), Case2())) →
  conclude(p)
} ↔

proof Clavius_Law_Proof2() {
  setPremise(¬p → p) →
  
  branch MainDerivation() {
    assume(p → ⊥) →
    assert(¬p) by NegationDef →
    apply(ModusPonens(¬p → p, ¬p)) →
    conclude(p)
  } →
  
  assert((p → ⊥) → p) by ImplicationIntro(MainDerivation()) →
  conclude(p) by PeirceLaw
}