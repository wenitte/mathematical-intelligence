theorem ClaviusLaw() {
  assert(
    ∀p ∈ PROP → [(¬p → p) ⊢ p]
  )
} ↔

proof ClaviusLaw() {
  setVar(p: PROP) →
  assert(premise: ¬p → p) →
  
  lemma NegationAsImplication() {
    assert(p → ⊥) →
    assert(¬p)
  } →
  
  lemma ModusPonens() {
    assert(¬p → p) ∧
    assert(¬p) →
    assert(p)
  } →
  
  lemma ImplicationRule() {
    assert((p → ⊥) → p)
  } →
  
  apply(NegationAsImplication()) →
  apply(ModusPonens()) →
  apply(ImplicationRule()) →
  
  assert(p) →
  conclude(p)
}