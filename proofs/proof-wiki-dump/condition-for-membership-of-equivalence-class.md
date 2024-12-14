theorem EquivalenceClassMembership() {
  assert(
    ∀R: (isEquivalenceRelation(R, S) ∧ R ⊆ S × S) →
    ∀x ∈ S →
    ∀y ∈ S →
    (y ∈ [x]_R ↔ (x,y) ∈ R)
  )
}

proof EquivalenceClassMembership() {
  setVar(R: Relation) →
  setVar(x: Element, S) →
  setVar(y: Element, S) →
  
  lemma EquivalenceClassDefinition() {
    assert([x]_R = {y ∈ S: (x,y) ∈ R})
  } →

  biconditional {
    forward {
      assume(y ∈ [x]_R) →
      apply(EquivalenceClassDefinition()) →
      conclude((x,y) ∈ R)
    } →
    
    backward {
      assume((x,y) ∈ R) →
      apply(EquivalenceClassDefinition()) →
      conclude(y ∈ [x]_R)
    }
  }
}