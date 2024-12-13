theorem Antireflexive_Transitive_Is_Antisymmetric() {
  assume(
    R ⊆ S × S ∧
    R ≠ ∅ ∧
    isAntireflexive(R) ∧
    isTransitive(R)
  ) ⇒
  assert(
    isAntisymmetric(R)
  )
}

proof Antireflexive_Transitive_Is_Antisymmetric() {
  setVar(R: Relation) →
  assume(R ⊆ S × S ∧ R ≠ ∅) →
  assume(isAntireflexive(R) ∧ isTransitive(R)) →
  
  lemma Antireflexive_Transitive_Is_Asymmetric() {
    assert(
      isAntireflexive(R) ∧ isTransitive(R) ⇒ isAsymmetric(R)
    )
  } →
  
  apply(Antireflexive_Transitive_Is_Asymmetric()) →
  assert(isAsymmetric(R)) →
  
  lemma Asymmetric_Is_Antisymmetric() {
    assert(
      isAsymmetric(R) ⇒ isAntisymmetric(R)
    )
  } →
  
  apply(Asymmetric_Is_Antisymmetric()) →
  assert(isAntisymmetric(R))
}