theorem Asymmetric_Implies_Antisymmetric() {
  assert(
    ∀R (isAsymmetricRelation(R) → isAntisymmetricRelation(R))
  )
} ↔

proof Asymmetric_Implies_Antisymmetric() {
  setVar(R: Relation) →
  assume(isAsymmetricRelation(R)) →
  
  lemma AsymmetricDef() {
    assert(
      ∀x,y ((⟨x,y⟩ ∈ R) → (⟨y,x⟩ ∉ R))
    )
  } →

  lemma NoSymmetricPairs() {
    assert(
      ¬∃x,y (⟨x,y⟩ ∈ R ∧ ⟨y,x⟩ ∈ R)
    )
  } →

  lemma EmptyIntersection() {
    assert(
      {⟨x,y⟩ | ⟨x,y⟩ ∈ R ∧ ⟨y,x⟩ ∈ R} = ∅
    )
  } →
  
  assert(
    ∀x,y ((⟨x,y⟩ ∈ R ∧ ⟨y,x⟩ ∈ R) → x = y)
  ) →
  
  conclude(isAntisymmetricRelation(R))
}