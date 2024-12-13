theorem CardinalOfFiniteOrdinal() {
  assert(
    ∀n ∈ OrdinalFinite ⇒ 
    card(n) = n
  )
} ↔

proof CardinalOfFiniteOrdinal() {
  setVar(n: OrdinalFinite) →
  
  lemma CardinalLessOrdinal() {
    assert(∀n ∈ Ordinal ⇒ card(n) ≤ n)
  } →
  
  apply(CardinalLessOrdinal()) →
  assert(card(n) ≤ n) →
  assert(card(n) ∈ OrdinalFinite) →
  
  lemma OrdinalEquivCardinal() {
    assert(∀n ∈ Ordinal ⇒ n ∼ card(n))
  } →
  
  apply(OrdinalEquivCardinal()) →
  assert(n ∼ card(n)) →
  
  lemma EqualityOfNaturals() {
    assert(
      ∀a,b ∈ OrdinalFinite ⇒ 
      (a ∼ b ∧ a ≤ b) ⇒ a = b
    )
  } →
  
  apply(EqualityOfNaturals()) →
  assert(n = card(n))
}