theorem Auxiliary_Relation_Congruent() {
  assert(
    ∀S[structure(S, ∨, ⪯): bounded_below_join_semilattice] ∧
    ∀R[relation(R) ∧ satisfies(R, auxiliary_condition_2) ∧ satisfies(R, auxiliary_condition_3)] ⇒
    (∀x,y,z,u ∈ S: (⟨x,z⟩ ∈ R ∧ ⟨y,u⟩ ∈ R) → ⟨x∨y, z∨u⟩ ∈ R)
  )
} ↔

proof Auxiliary_Relation_Congruent() {
  setVar(S: bounded_below_join_semilattice) →
  setVar(R: relation) →
  setVar(x,y,z,u: elements(S)) →
  
  assume(⟨x,z⟩ ∈ R ∧ ⟨y,u⟩ ∈ R) →
  
  lemma Reflexivity() {
    assert(x ⪯ x ∧ y ⪯ y)
  } →
  
  lemma Join_Succeeds_Operands() {
    assert(z ⪯ z∨u ∧ u ⪯ z∨u)
  } →
  
  apply(auxiliary_condition_2) →
  assert(⟨x,z∨u⟩ ∈ R ∧ ⟨y,z∨u⟩ ∈ R) →
  
  apply(auxiliary_condition_3) →
  assert(⟨x∨y, z∨u⟩ ∈ R)
}