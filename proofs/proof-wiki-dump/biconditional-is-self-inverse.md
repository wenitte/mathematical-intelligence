theorem Biconditional_Self_Inverse() {
  assert(
    ∀p,q ∈ Boolean ⇒ ((p ↔ q) ↔ q) ↔ p
  )
} ↔

proof Biconditional_Self_Inverse() {
  setVar(p: Boolean) →
  setVar(q: Boolean) →
  lemma Truth_Table() {
    assert(
      [p=F ∧ q=F ⇒ ((F↔F)↔F) = F] ∧
      [p=F ∧ q=T ⇒ ((F↔T)↔T) = F] ∧
      [p=T ∧ q=F ⇒ ((T↔F)↔F) = T] ∧
      [p=T ∧ q=T ⇒ ((T↔T)↔T) = T]
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀ boolean_values(p,q) ⇒ ((p↔q)↔q) = p
  )
}