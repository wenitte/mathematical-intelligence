theorem CartesianProductProperClass() {
  setVar(A: Class, B: Class)
  assert(
    (isProperClass(A) ∧ ¬isEmpty(B)) →
    isProperClass(A × B)
  )
} ↔

proof CartesianProductProperClass() {
  setVar(A: Class, B: Class) →
  assume(isProperClass(A) ∧ ¬isEmpty(B)) →
  
  lemma Contradiction() {
    assume(¬isProperClass(A × B)) →
    assert(isSmall(A × B)) →
    apply(DomainOfSmallRelationIsSmall()) →
    assert(isSmall(domain(A × B)))
  } →
  
  lemma NonemptyHasMembers() {
    assert(¬isEmpty(B) → ∃y(y ∈ B))
  } →
  
  lemma DomainEquality() {
    assert(
      domain(A × B) = {x ∈ A | ∃y(y ∈ B)} ∧
      domain(A × B) = A
    )
  } →
  
  apply(Contradiction()) →
  apply(DomainEquality()) →
  assert(isSmall(A)) →
  assert(isSmall(A) ∧ isProperClass(A)) →
  assert(⊥) →
  
  conclude(isProperClass(A × B))
}