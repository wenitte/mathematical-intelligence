theorem Transitive_And_Antitransitive_Relation() {
  let(S: Set) →
  let(R: Relation(S × S)) →
  assert(
    [R is_transitive ∧ R is_antitransitive] ↔ 
    ¬(∃x,y,z ∈ S: xRy ∧ yRz)
  )
}

proof Transitive_And_Antitransitive_Relation() {
  // Necessary Condition (←)
  assume(¬(∃x,y,z ∈ S: xRy ∧ yRz)) →
  assert(R is_transitive) by vacuous_truth() →
  assert(R is_antitransitive) by vacuous_truth() →
  
  // Sufficient Condition (→)
  assume(R is_transitive ∧ R is_antitransitive) →
  proof_by_contradiction() {
    assume(¬(¬(∃x,y,z ∈ S: xRy ∧ yRz))) →
    assert(∃x,y,z ∈ S: xRy ∧ yRz) →
    by_transitivity(R) {
      assert(xRz)
    } →
    by_antitransitivity(R) {
      assert(¬(xRz))
    } →
    contradiction()
  } →
  assert(¬(∃x,y,z ∈ S: xRy ∧ yRz))
}