theorem Meet_Irreducible_Characterization() {
  let(S: MeetSemilattice[∧, ⪯]) →
  let(z ∈ S) →
  assert(
    MeetIrreducible(z) ↔ 
    ∀x,y ∈ S: [(z ≺ x) ∧ (z ≺ y) → (z ≺ x∧y)]
  )
} ↔

proof Meet_Irreducible_Characterization() {
  // Necessary Condition
  lemma Necessary() {
    assume(MeetIrreducible(z)) →
    let(x,y ∈ S) →
    assume((z ≺ x) ∧ (z ≺ y)) →
    assert(z ≠ x ∧ z ≠ y) →
    apply(MeetIrreducible(z)) →
    assert(z ≠ x∧y) →
    apply(InfimumDef()) →
    assert(z ⪯ x∧y) →
    conclude(z ≺ x∧y)
  } →

  // Sufficient Condition
  lemma Sufficient() {
    assume(∀x,y ∈ S: [(z ≺ x) ∧ (z ≺ y) → (z ≺ x∧y)]) →
    let(x,y ∈ S) →
    assume(z = x∧y) →
    apply(InfimumDef()) →
    assert(z ⪯ x ∧ z ⪯ y) →
    apply(Contrapositive(hypothesis)) →
    assert(z = x ∨ z = y) →
    generalize() →
    assert(∀x,y ∈ S: [z = x∧y → (z = x ∨ z = y)]) →
    conclude(MeetIrreducible(z))
  } →

  // Combine both directions
  apply(Necessary()) →
  apply(Sufficient()) →
  conclude(MeetIrreducible(z) ↔ 
          ∀x,y ∈ S: [(z ≺ x) ∧ (z ≺ y) → (z ≺ x∧y)])
}