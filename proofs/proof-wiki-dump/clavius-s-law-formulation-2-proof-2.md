theorem Clavius_Law() {
  assert(
    (¬p → p) → p
  )
} ↔

proof Clavius_Law() {
  setPremise(P1: ¬p → p) →
  
  lemma ExcludedMiddle() {
    assert(p ∨ ¬p)
  } →
  
  proofByCases() {
    case1() {
      assume(¬p) →
      apply(P1, ¬p) →
      derive(p)
    } →
    
    case2() {
      assume(p) →
      derive(p)
    }
  } →
  
  apply(ModusPonendoPonens) →
  conclude((¬p → p) → p) →
  discharge(P1)
}

axiom LawOfExcludedMiddle() {
  assert(
    ∀p ∈ Propositions: p ∨ ¬p
  )
}