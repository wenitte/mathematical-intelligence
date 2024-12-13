theorem AlgebraOfSets_ContainsUnderlyingSet() {
  assert(
    ∀S: Set, ∀R: AlgebraOfSets(S) → 
    S ∈ R
  )
} ↔

proof AlgebraOfSets_ContainsUnderlyingSet() {
  setVar(S: Set) →
  setVar(R: AlgebraOfSets(S)) →
  
  axiom AS2() {
    assert(∀A,B ∈ R → A ∪ B ∈ R)
  } →
  
  axiom AS3() {
    assert(∀A ∈ R → relcomp(S,A) ∈ R)
  } →
  
  assert(R ≠ ∅) →
  assert(∃A ⊆ S: A ∈ R) →
  
  let(A: Set | A ∈ R) →
  assert(relcomp(S,A) ∈ R) by(AS3()) →
  assert(relcomp(S,A) ∪ A ∈ R) by(AS2()) →
  assert(relcomp(S,A) ∪ A = S) by(UnionWithRelComplement()) →
  assert(S ∈ R)
}