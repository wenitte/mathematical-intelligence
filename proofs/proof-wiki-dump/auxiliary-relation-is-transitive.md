theorem Auxiliary_Relation_Transitive() {
  assert(
    ∀S,∀∨,∀≼[BoundedBelowJoinSemilattice(S,∨,≼) ∧
    ∀R[AuxiliaryRelation(R,S) ∧
    Condition1(R) ∧ Condition2(R)]] ⇒
    Transitive(R)
  )
} ↔

proof Auxiliary_Relation_Transitive() {
  setVar(S: Set, ∨: Operation, ≼: Relation, R: Relation) →
  assume(BoundedBelowJoinSemilattice(S,∨,≼)) →
  assume(AuxiliaryRelation(R,S)) →
  
  lemma TransitivityCheck() {
    setVar(x: S, y: S, z: S) →
    assume((x,y) ∈ R ∧ (y,z) ∈ R) →
    assert(z ≼ z) by(Reflexivity) →
    assert(x ≼ y) by(Condition1(R)) →
    assert((x,z) ∈ R) by(Condition2(R))
  } →

  apply(TransitivityCheck()) →
  assert(∀x,y,z ∈ S[(x,y) ∈ R ∧ (y,z) ∈ R ⇒ (x,z) ∈ R]) →
  assert(Transitive(R))
}