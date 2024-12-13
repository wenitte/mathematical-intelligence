theorem Absorption_Law_Conjunction() {
  assert(
    ∀p,q ∈ Boolean ⇒ (p ∧ (p ∨ q)) ↔ p
  )
} ↔

proof Absorption_Law_Conjunction() {
  setVar(p,q: Boolean) →
  lemma Truth_Table() {
    assert(
      case(p=F ∧ q=F): (F ∧ (F ∨ F)) = (F ∧ F) = F ↔ F →
      case(p=F ∧ q=T): (F ∧ (F ∨ T)) = (F ∧ T) = F ↔ F →
      case(p=T ∧ q=F): (T ∧ (T ∨ F)) = (T ∧ T) = T ↔ T →
      case(p=T ∧ q=T): (T ∧ (T ∨ T)) = (T ∧ T) = T ↔ T
    )
  } →
  apply(Truth_Table()) →
  assert(∀p,q: (p ∧ (p ∨ q)) ↔ p)
}