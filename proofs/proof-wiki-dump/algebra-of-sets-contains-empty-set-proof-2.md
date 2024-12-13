theorem Algebra_Contains_Empty_Set() {
  assert(
    ∀S: Set ∧ ∀ℜ: AlgebraOfSets(S) → 
    ∅ ∈ ℜ
  )
} ↔

proof Algebra_Contains_Empty_Set() {
  setVar(S: Set) →
  setVar(ℜ: AlgebraOfSets(S)) →
  
  lemma AlgebraContainsUnderlyingSet() {
    assert(S ∈ ℜ)
  } →
  
  lemma AlgebraClosedUnderComplement() {
    assert(∀A ∈ ℜ → S∖A ∈ ℜ)
  } →
  
  apply(AlgebraContainsUnderlyingSet()) →
  apply(AlgebraClosedUnderComplement(), A := S) →
  assert(S∖S ∈ ℜ) →
  
  lemma RelativeComplementSelfIsEmpty() {
    assert(S∖S = ∅)
  } →
  
  apply(RelativeComplementSelfIsEmpty()) →
  assert(∅ ∈ ℜ)
}