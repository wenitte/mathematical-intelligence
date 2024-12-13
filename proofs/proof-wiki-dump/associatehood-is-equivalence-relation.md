theorem Associates_Equivalence() {
  assert(
    ∀D(IntegralDomain(D) ∧ hasZero(D,0_D) ∧ hasUnity(D,1_D)) →
    let(∼: Relation(D)) →
    ∀x,y ∈ D(x∼y ↔ isAssociate(x,y)) →
    isEquivalenceRelation(∼)
  )
} ↔

proof Associates_Equivalence() {
  // Reflexive Property
  lemma Reflexive() {
    assert(∀x ∈ D(x∼x)) →
    setVar(x: D) →
    assert(x = 1_D ∘ x) →
    assert(x|x) →
    conclude(x∼x)
  } →

  // Symmetric Property
  lemma Symmetric() {
    assert(∀x,y ∈ D(x∼y ↔ y∼x)) →
    setVar(x,y: D) →
    assert(x∼y ↔ (x|y ∧ y|x)) →
    assert((x|y ∧ y|x) ↔ (y|x ∧ x|y)) →
    conclude(x∼y ↔ y∼x)
  } →

  // Transitive Property
  lemma Transitive() {
    assert(∀x,y,z ∈ D((x∼y ∧ y∼z) → x∼z)) →
    setVar(x,y,z: D) →
    assert(x∼y ∧ y∼z) →
    assert((x|y ∧ y|x) ∧ (y|z ∧ z|y)) →
    assert((x|y ∧ y|z) ∧ (z|y ∧ y|x)) →
    apply(DivisorTransitive()) →
    assert(x|z ∧ z|x) →
    conclude(x∼z)
  } →

  apply(Reflexive()) ∧
  apply(Symmetric()) ∧
  apply(Transitive()) →
  conclude(isEquivalenceRelation(∼))
}