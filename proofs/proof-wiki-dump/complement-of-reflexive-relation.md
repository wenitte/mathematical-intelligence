theorem Complement_Reflexive_Relation() {
  assert(
    ∀R ⊆ S×S ↔ (
      (isReflexive(R) ↔ isAntiReflexive((S×S)\R)) ∧
      (isAntiReflexive(R) ↔ isReflexive((S×S)\R))
    )
  )
}

proof Complement_Reflexive_Relation() {
  setVar(R: R ⊆ S×S) →
  
  // Forward direction for reflexive case
  assume(isReflexive(R)) → {
    assert(∀x ∈ S: (x,x) ∈ R) →
    apply(ComplementDefinition()) → {
      assert(∀x,y ∈ S: ((x,y) ∈ R → (x,y) ∉ (S×S)\R)) →
      assert(∀x ∈ S: ((x,x) ∈ R → (x,x) ∉ (S×S)\R))
    } →
    conclude(isAntiReflexive((S×S)\R))
  }

  // Forward direction for antireflexive case
  assume(isAntiReflexive(R)) → {
    assert(∀x ∈ S: (x,x) ∉ R) →
    apply(DoubleNegation()) → {
      assert(∀x ∈ S: (x,x) ∉ R → (x,x) ∈ (S×S)\R)
    } →
    conclude(isReflexive((S×S)\R))
  }

  // Reverse directions
  lemma RelativeComplementOfComplement() {
    assert((S×S)\((S×S)\R) = R)
  } →
  
  apply(RelativeComplementOfComplement()) → {
    assert(isReflexive((S×S)\R) → isAntiReflexive(R)) ∧
    assert(isAntiReflexive((S×S)\R) → isReflexive(R))
  } →
  
  conclude(
    (isReflexive(R) ↔ isAntiReflexive((S×S)\R)) ∧
    (isAntiReflexive(R) ↔ isReflexive((S×S)\R))
  )
}