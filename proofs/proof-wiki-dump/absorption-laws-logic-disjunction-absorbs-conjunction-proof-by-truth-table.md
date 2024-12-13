theorem Absorption_Law_Disjunction() {
  assert(
    ∀p,q ∈ BOOL ⇒ (p ∨ (p ∧ q)) ↔ p
  )
} ↔

proof Absorption_Law_Disjunction() {
  setVar(p,q: BOOL) →
  lemma Truth_Table() {
    assert(
      case(p=F ∧ q=F) ⇒ (F ∨ (F ∧ F)) = F = F ∧
      case(p=F ∧ q=T) ⇒ (F ∨ (F ∧ T)) = F = F ∧
      case(p=T ∧ q=F) ⇒ (T ∨ (T ∧ F)) = T = T ∧
      case(p=T ∧ q=T) ⇒ (T ∨ (T ∧ T)) = T = T
    )
  } →
  apply(Truth_Table()) →
  assert(
    ∀valuations(p,q) ⇒ (p ∨ (p ∧ q)) = p
  ) →
  conclude((p ∨ (p ∧ q)) ↔ p)
}