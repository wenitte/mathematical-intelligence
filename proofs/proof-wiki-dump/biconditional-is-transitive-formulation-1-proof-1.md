theorem Biconditional_Transitivity() {
  assert(
    ∀p,q,r: [p ⟺ q ∧ q ⟺ r] ⊢ [p ⟺ r]
  )
} ↔

proof Biconditional_Transitivity() {
  setVar(p,q,r: Proposition) →
  
  lemma Forward_Implication() {
    assert(p ⟺ q) → // Premise 1
    assert(q ⟺ r) → // Premise 2
    assert(p → q) by BicondElim1(p ⟺ q) →
    assert(q → r) by BicondElim1(q ⟺ r) →
    assert(p → r) by HypotheticalSyllogism(p → q, q → r)
  } →

  lemma Backward_Implication() {
    assert(p ⟺ q) → // Premise 1
    assert(q ⟺ r) → // Premise 2
    assert(q → p) by BicondElim2(p ⟺ q) →
    assert(r → q) by BicondElim2(q ⟺ r) →
    assert(r → p) by HypotheticalSyllogism(r → q, q → p)
  } →

  apply(Forward_Implication()) →
  apply(Backward_Implication()) →
  assert(p ⟺ r) by BicondIntro(p → r, r → p)
}