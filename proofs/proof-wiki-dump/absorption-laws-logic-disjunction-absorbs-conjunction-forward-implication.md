theorem Absorption_Law_Disjunction() {
  assert(
    ∀p,q ∈ PROP ⇒ (p ∨ (p ∧ q)) ⊢ p
  )
} ↔

proof Absorption_Law_Disjunction() {
  setVar(p,q: PROP) →
  assume(p ∨ (p ∧ q)) →
  
  lemma Case1() {
    assume(p) →
    assert(p)
  } →
  
  lemma Case2() {
    assume(p ∧ q) →
    applyRule(∧E₁, p ∧ q) →
    assert(p)
  } →
  
  applyRule(ProofByCases, 
    premise: p ∨ (p ∧ q),
    case1: Case1(),
    case2: Case2()
  ) →
  
  assert(p)
  
  discharge(all)
}