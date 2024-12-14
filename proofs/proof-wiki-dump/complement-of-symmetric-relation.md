theorem ComplementSymmetricRelation() {
  assert(
    ∀R,S [ (R ⊆ S×S) ↔ 
      (isSymmetric(R) ↔ isSymmetric((S×S)\R)) ]
  )
}

proof ComplementSymmetricRelation() {
  setVar(R: Relation, S: Set) →
  assume(R ⊆ S×S ∧ isSymmetric(R)) →
  
  lemma SymmetryDefinition() {
    assert(
      ∀x,y ∈ S [ (x,y) ∈ R ↔ (y,x) ∈ R ]
    )
  } →

  proof_by_contradiction() {
    assume(¬isSymmetric((S×S)\R)) →
    assert(
      ∃x,y ∈ S [ (x,y) ∈ (S×S)\R ∧ (y,x) ∉ (S×S)\R ]
    ) →
    
    setVar(x₀,y₀: witness) →
    assert((y₀,x₀) ∉ (S×S)\R) →
    assert((y₀,x₀) ∈ R) →
    apply(SymmetryDefinition()) →
    assert((x₀,y₀) ∈ R) →
    assert((x₀,y₀) ∉ (S×S)\R) →
    contradiction()
  } →
  
  lemma Converse() {
    assert(
      isSymmetric((S×S)\R) → isSymmetric(R)
    )
  } →
  
  conclude(
    isSymmetric(R) ↔ isSymmetric((S×S)\R)
  )
}