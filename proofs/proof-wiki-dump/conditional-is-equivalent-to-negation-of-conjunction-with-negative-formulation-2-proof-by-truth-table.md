theorem Conditional_Equiv_Negation_Conjunction() {
  assert(
    ∀p,q ∈ Boolean ⇒ ((p → q) ↔ ¬(p ∧ ¬q))
  )
} ↔

proof Conditional_Equiv_Negation_Conjunction() {
  setVar(p: Boolean, q: Boolean) →
  lemma Truth_Table_Cases() {
    assert(
      case(p=F ∧ q=F): (F → F) ↔ ¬(F ∧ T) ↔ T ∧
      case(p=F ∧ q=T): (F → T) ↔ ¬(F ∧ F) ↔ T ∧
      case(p=T ∧ q=F): (T → F) ↔ ¬(T ∧ T) ↔ T ∧
      case(p=T ∧ q=T): (T → T) ↔ ¬(T ∧ F) ↔ T
    )
  } →
  apply(Truth_Table_Cases()) →
  assert(
    ∀valuations(p,q) ⇒ ((p → q) ↔ ¬(p ∧ ¬q)) = T
  ) →
  assert(
    (p → q) ↔ ¬(p ∧ ¬q)
  )
}