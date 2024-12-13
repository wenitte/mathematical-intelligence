theorem Antisymmetric_Quotient_Preordered_Set() {
  premise(
    let(S: Set, ≲: Relation),
    isPreorderedSet(⟨S,≲⟩),
    let(∼: EquivalenceRelation(S)),
    induced_by(∼, ≲),
    let(⟨S/∼,≼⟩: AntisymmetricQuotient(⟨S,≲⟩))
  ) →
  assert(
    isOrderedSet(⟨S/∼,≼⟩) ∧
    ∀P,Q ∈ S/∼: (P ≼ Q ∧ p ∈ P ∧ q ∈ Q) → p ≲ q
  )
} ↔

proof Antisymmetric_Quotient_Preordered_Set() {
  assert(isTransitive(∼) ∧ isReflexive(∼) ∧ isSymmetric(∼)) →
  assert(isTransitive(≲) ∧ isReflexive(≲)) →
  
  lemma Preordering_Induces_Ordering() {
    assert(isOrdering(≼))
  } →
  apply(Preordering_Induces_Ordering()) →
  
  setVar(P,Q: S/∼) →
  assume(P ≼ Q) →
  
  lemma Quotient_Elements_Exist() {
    assert(∃p,q: p ∈ P ∧ q ∈ Q ∧ p ≲ q)
  } →
  
  setVar(p',q': Elements) →
  assume(p' ∈ P ∧ q' ∈ Q) →
  
  assert(p' ∼ p ∧ q ∼ q') →
  assert(p' ≲ p ∧ q ≲ q') →
  
  apply(isTransitive(≲)) →
  assert(p' ≲ q') →
  
  conclude(
    ∀P,Q ∈ S/∼: (P ≼ Q ∧ p ∈ P ∧ q ∈ Q) → p ≲ q
  )
}