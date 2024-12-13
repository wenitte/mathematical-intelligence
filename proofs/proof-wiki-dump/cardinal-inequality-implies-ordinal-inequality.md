theorem Cardinal_Inequality_Implies_Ordinal_Inequality() {
  setVar(T: Set) ∧
  setVar(x: Ordinal) ∧
  assert(
    x < card(T) ↔ card(x) < card(T)
  )
}

proof Cardinal_Inequality_Implies_Ordinal_Inequality() {
  // Sufficient condition
  lemma Cardinal_Number_Less_Than_Ordinal() {
    assert(card(x) ≤ x)
  } →
  assert(x < card(T) → card(x) < card(T)) →

  // Necessary condition
  lemma Subset_Of_Ordinal_Implies_Cardinal_Inequality() {
    assert(
      card(T) ≤ x →
      card(card(T)) ≤ card(x)
    )
  } →
  
  lemma Cardinal_Of_Cardinal_Equal_To_Cardinal() {
    assert(
      card(card(T)) = card(T)
    )
  } →

  apply(Subset_Of_Ordinal_Implies_Cardinal_Inequality()) →
  apply(Cardinal_Of_Cardinal_Equal_To_Cardinal()) →
  assert(card(T) ≤ x → card(T) ≤ card(x)) →

  lemma Rule_Of_Transposition() {
    assert(
      ¬(card(T) ≤ card(x)) → ¬(card(T) ≤ x)
    )
  } →

  lemma Ordinal_Membership_Trichotomy() {
    assert(
      x < card(T) ↔ card(x) < card(T)
    )
  } →
  
  apply(Rule_Of_Transposition()) →
  apply(Ordinal_Membership_Trichotomy()) →
  assert(x < card(T) ↔ card(x) < card(T))
}