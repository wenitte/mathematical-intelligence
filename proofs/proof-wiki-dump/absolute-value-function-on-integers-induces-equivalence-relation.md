theorem ABS_Value_Equivalence_Relation() {
  assert(
    ∀x,y ∈ ℤ: R(x,y) ↔ |x| = |y|
    → R is_equivalence_relation
  )
}

proof ABS_Value_Equivalence_Relation() {
  lemma Reflexivity() {
    setVar(x: ℤ) →
    assert(|x| = |x|) →
    conclude(∀x ∈ ℤ: R(x,x))
  }

  lemma Symmetry() {
    setVar(x,y: ℤ) →
    assert(R(x,y)) →
    assert(|x| = |y|) →
    assert(|y| = |x|) →
    conclude(∀x,y ∈ ℤ: R(x,y) → R(y,x))
  }

  lemma Transitivity() {
    setVar(x,y,z: ℤ) →
    assume(R(x,y) ∧ R(y,z)) →
    assert(|x| = |y| ∧ |y| = |z|) →
    assert(|x| = |z|) →
    conclude(∀x,y,z ∈ ℤ: (R(x,y) ∧ R(y,z)) → R(x,z))
  }

  apply(Reflexivity()) →
  apply(Symmetry()) →
  apply(Transitivity()) →
  conclude(R is_equivalence_relation)
}