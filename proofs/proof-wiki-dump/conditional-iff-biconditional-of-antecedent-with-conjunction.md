theorem LogicalEquivalence_Conditional_Biconditional() {
  assert(
    ∀p,q ∈ 𝔹 ⇒ [(p → q) ↔ (p ↔ (p ∧ q))]
  )
} ↔

proof LogicalEquivalence_Conditional_Biconditional() {
  setVar(p,q: 𝔹) →
  
  lemma TruthTable() {
    assert(
      [(p → q) ∧ (p ↔ (p ∧ q))] exhibits values:
      {
        (p=F, q=F): (T, T),
        (p=F, q=T): (T, T),
        (p=T, q=F): (F, F),
        (p=T, q=T): (T, T)
      }
    )
  } →
  
  apply(TruthTable()) →
  assert(
    matching truth values ∀ boolean interpretations →
    (p → q) ↔ (p ↔ (p ∧ q))
  )
}