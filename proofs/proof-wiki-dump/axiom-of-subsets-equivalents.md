theorem Axiom_of_Subsets_Equivalents() {
  assert(
    ∀z ∀P(y) ∃x ∀y[y ∈ x ↔ (y ∈ z ∧ P(y))] ↔
    (∀z ∀A[(z ∩ A) ∈ U] ∧ ∀z ∀A[A ⊆ z → A ∈ U])
  )
}

proof First_Statement_Equivalence() {
  setVar(z: Set, A: Set, y: Element) →
  assert(∀z ∀P(y) ∃x ∀y[y ∈ x ↔ (y ∈ z ∧ P(y))]) →
  substitute(P(y) := y ∈ A) →
  assert(∀z ∀A ∃x ∀y[y ∈ x ↔ (y ∈ z ∧ y ∈ A)]) →
  lemma Intersection_Definition() {
    assert(y ∈ (z ∩ A) ↔ (y ∈ z ∧ y ∈ A))
  } →
  apply(Intersection_Definition()) →
  assert(∀z ∀A ∃x ∀y[y ∈ x ↔ y ∈ (z ∩ A)]) →
  lemma Class_Equality() {
    assert(∀x ∀y[x = y ↔ ∀w(w ∈ x ↔ w ∈ y)])
  } →
  apply(Class_Equality()) →
  assert(∀z ∀A ∃x[x = (z ∩ A)]) →
  lemma Universe_Membership() {
    assert(A ∈ U ↔ ∃x[x = A])
  } →
  apply(Universe_Membership()) →
  assert(∀z ∀A[(z ∩ A) ∈ U])
}

proof Second_Statement_Equivalence() {
  setVar(z: Set, A: Set) →
  assert(∀z ∀A[(z ∩ A) ∈ U]) →
  lemma Subset_Definition() {
    assert(A ⊆ B ↔ ∀x[x ∈ A → x ∈ B])
  } →
  lemma Intersection_Subset() {
    assert(A ⊆ B ↔ (A ∩ B) = A)
  } →
  apply(Intersection_Subset()) →
  assert(A ⊆ z → [(z ∩ A) ∈ U → A ∈ U]) →
  apply(First_Statement_Equivalence()) →
  assert(∀z ∀A[A ⊆ z → A ∈ U])
}

proof Reverse_Derivation() {
  assert((z ∩ A) ⊆ z) →
  apply(Second_Statement_Equivalence()) →
  assert(∀z ∀A[(z ∩ A) ∈ U]) →
  apply(First_Statement_Equivalence()) →
  assert(∀z ∀P(y) ∃x ∀y[y ∈ x ↔ (y ∈ z ∧ P(y))])
}