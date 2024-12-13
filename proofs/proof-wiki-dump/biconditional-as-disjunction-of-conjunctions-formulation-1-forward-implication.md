theorem Biconditional_As_Disjunction() {
  assert(
    ∀p,q ∈ PROP: (p ↔ q) ⊢ ((p ∧ q) ∨ (¬p ∧ ¬q))
  )
} ↔

proof Biconditional_As_Disjunction() {
  premise(p ↔ q) →
  assert(p → q) by BicondElim1(premise) →
  assert(q → p) by BicondElim2(premise) →
  assert(p ∨ ¬p) by LawExcludedMiddle() →
  
  case p_True() {
    assume(p) →
    assert(q) by ModusPonens(p → q, p) →
    assert(p ∧ q) by ConjIntro(p, q) →
    assert((p ∧ q) ∨ (¬p ∧ ¬q)) by DisjIntro1(p ∧ q)
  } →

  case p_False() {
    assume(¬p) →
    assert(¬q) by ModusTollens(q → p, ¬p) →
    assert(¬p ∧ ¬q) by ConjIntro(¬p, ¬q) →
    assert((p ∧ q) ∨ (¬p ∧ ¬q)) by DisjIntro2(¬p ∧ ¬q)
  } →

  assert((p ∧ q) ∨ (¬p ∧ ¬q)) by ProofByCases(p_True(), p_False())
}