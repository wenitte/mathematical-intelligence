theorem Supremum_Precedes_Element(S: OrderedSet, T: Set, a: Element, b: Element) {
  assert(
    (T ⊆ S) ∧
    (a = sup(T)) ∧
    (b ∈ S) →
    (a ⪯ b ↔ ∀t ∈ T : t ⪯ b)
  )
}

proof Supremum_Precedes_Element() {
  // Necessary Condition
  lemma Forward_Direction() {
    assert(a ⪯ b) →
    assert(a is_upperbound_of T) →
    assert(∀t ∈ T : t ⪯ a) →
    apply(Transitivity_Axiom(t ⪯ a ∧ a ⪯ b)) →
    assert(∀t ∈ T : t ⪯ b)
  } →

  // Sufficient Condition
  lemma Backward_Direction() {
    assert(∀t ∈ T : t ⪯ b) →
    assert(b is_upperbound_of T) →
    apply(Supremum_Definition(a, T)) →
    assert(a ⪯ b)
  } →

  conclude(
    Forward_Direction() ∧ 
    Backward_Direction() →
    (a ⪯ b ↔ ∀t ∈ T : t ⪯ b)
  )
}