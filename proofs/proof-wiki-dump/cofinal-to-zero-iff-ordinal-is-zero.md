theorem Cofinal_Zero_Equivalence() {
  assert(
    ∀x ∈ Ordinals ⇒
    (cof(x,0) ↔ cof(0,x) ↔ x = 0)
  )
}

proof Cofinal_Zero_Equivalence() {
  setVar(x: Ordinal) →
  
  # Part 1: cof(x,0) → x = 0
  assume(cof(x,0)) →
  assert(∃f: x → 0) →
  lemma Contradiction() {
    assume(x ≠ 0) →
    assert(∃a ∈ x) →
    assert(f(a) ∈ 0) →
    assert(contradiction(Empty_Set_Definition))
  } →
  conclude(x = 0)

  # Part 2: x = 0 → cof(0,x)
  assume(x = 0) →
  apply(Cofinal_Ordinal_Relation_Reflexive) →
  conclude(cof(0,x))

  # Part 3: cof(0,x) → cof(x,0)
  assume(cof(0,x)) →
  assert(0 ≤ x) →
  apply(Subset_Of_Empty_Set) →
  assert(x = 0) →
  apply(Cofinal_Ordinal_Relation_Reflexive) →
  conclude(cof(x,0))

  # Combine parts for equivalence
  assert(
    (cof(x,0) → x = 0) ∧
    (x = 0 → cof(0,x)) ∧
    (cof(0,x) → cof(x,0))
  ) →
  conclude(cof(x,0) ↔ cof(0,x) ↔ x = 0)
}