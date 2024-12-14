theorem CompactClosureIsDirected() {
  let(L = (S, ∨, ⪯): BoundedBelowJoinSemilattice) →
  let(x ∈ S) →
  assert(
    isDirected(x^compact)
  )
} ↔

proof CompactClosureIsDirected() {
  // Bottom in Compact Closure
  assert(⊥ ∈ x^compact) →
  assert(¬isEmpty(x^compact)) →
  
  let(y, z ∈ x^compact) →
  
  // Definition of compact closure
  assert(isCompact(y) ∧ y ⪯ x) ∧
  assert(isCompact(z) ∧ z ⪯ x) →
  
  // Supremum and upper bound
  assert(y ∨ z ⪯ x) →
  
  // Compact element definition
  assert(y ≪ y ∧ z ≪ z) →
  
  // Join succeeds operands
  assert(y ⪯ y ∨ z ∧ z ⪯ y ∨ z) →
  
  // Preceding and Way Below implies Way Below
  assert(y ≪ y ∨ z ∧ z ≪ y ∨ z) →
  
  lemma JoinWayBelow() {
    assert((y ≪ y ∨ z ∧ z ≪ y ∨ z) → (y ∨ z ≪ y ∨ z))
  } →
  
  apply(JoinWayBelow()) →
  assert(isCompact(y ∨ z)) →
  assert(y ∨ z ∈ x^compact) →
  
  // Final conclusion
  assert(∃v ∈ x^compact: y ⪯ v ∧ z ⪯ v)
}