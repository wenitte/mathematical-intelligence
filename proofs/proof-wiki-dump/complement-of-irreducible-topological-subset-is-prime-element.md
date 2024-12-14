theorem Complement_Irreducible_Prime() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(X ⊆ S: IrreducibleSet) →
  let(L = ⟨τ,⪯⟩: InclusionOrderedSet) →
  assert(
    (S∖X ∈ τ) → (S∖X is_prime_in L)
  )
} ↔

proof Complement_Irreducible_Prime() {
  setVar(Y,Z ∈ τ) →
  assume(Y ∧ Z ⪯ S∖X) →
  
  lemma TopologyIntersection() {
    assert(Y ∩ Z ∈ τ)
  } →
  
  lemma MeetEquivalence() {
    assert(Y ∩ Z = Y ∧ Z)
  } →
  
  assert(Y ∩ Z ⊆ S∖X) →
  assert(X ⊆ S∖(Y ∩ Z)) →
  assert(X ⊆ (S∖Y) ∪ (S∖Z)) by DeMorganLaws() →
  assert(X = ((S∖Y) ∪ (S∖Z)) ∩ X) →
  assert(X = ((S∖Y) ∩ X) ∪ ((S∖Z) ∩ X)) by DistributiveLaw() →
  
  lemma ClosedSets() {
    assert(
      (X is_closed) ∧
      (S∖Y is_closed) ∧
      (S∖Z is_closed)
    )
  } →
  
  assert(((S∖Y) ∩ X) is_closed ∧ ((S∖Z) ∩ X) is_closed) →
  assert(((S∖Y) ∩ X = X) ∨ ((S∖Z) ∩ X = X)) by IrreducibleDef() →
  assert((X ⊆ S∖Y) ∨ (X ⊆ S∖Z)) →
  assert((Y ⊆ S∖X) ∨ (Z ⊆ S∖X)) →
  conclude((Y ⪯ S∖X) ∨ (Z ⪯ S∖X))
}