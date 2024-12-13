theorem Bottom_Relation_Auxiliary() {
  let L = (S, ∨, ⪯) be bounded_below_join_semilattice
  let B = {(⊥, x) | x ∈ S} where ⊥ is smallest_element(L)
  assert(
    is_auxiliary_relation(B)
  )
} ↔

proof Bottom_Relation_Auxiliary() {
  assert(∀x ∈ S: ⊥ ⪯ x) →  // smallest element definition
  assert(∀x,y ∈ S: (x,y) ∈ B → x ⪯ y) →  // by B definition

  lemma Transitivity_Property() {
    assert(∀x,y,z,u ∈ S: (x ⪯ y ∧ (y,z) ∈ B ∧ z ⪯ u) → (x,u) ∈ B)
  } →

  proof Transitivity_Property() {
    setVar(x,y,z,u: S) →
    assume(x ⪯ y ∧ (y,z) ∈ B ∧ z ⪯ u) →
    assert(y = ⊥) by def(B) →
    assert(⊥ ⪯ x) by def(smallest_element) →
    assert(x = ⊥) by def(antisymmetry) →
    assert((x,u) ∈ B) by def(B)
  } →

  lemma Join_Property() {
    assert(∀x,y,z ∈ S: ((x,z) ∈ B ∧ (y,z) ∈ B) → ((x ∨ y,z) ∈ B))
  } →

  proof Join_Property() {
    setVar(x,y,z: S) →
    assume((x,z) ∈ B ∧ (y,z) ∈ B) →
    assert(x = y = ⊥) by def(B) →
    assert(x ∨ y = ⊥) by theorem(Join_Idempotent) →
    assert((x ∨ y,z) ∈ B) by def(B)
  } →

  assert(∀x ∈ S: (⊥,x) ∈ B) by def(B) →
  assert(is_auxiliary_relation(B)) by def(auxiliary_relation)
}