theorem Closure_Union_From_Intersection_SymmetricDifference() {
  assert(
    ∀R[SetSystem] ∧ 
    (∀A,B ∈ R ⇒ (A ∩ B) ∈ R) ∧ 
    (∀A,B ∈ R ⇒ (A ∆ B) ∈ R) ⇒ 
    (∀A,B ∈ R ⇒ (A ∪ B) ∈ R)
  )
} ↔

proof Closure_Union_From_Intersection_SymmetricDifference() {
  setVar(R: SetSystem) →
  setVar(A,B ∈ R) →
  
  lemma Union_As_SymDiff_Intersection() {
    assert((A ∆ B) ∆ (A ∩ B) = A ∪ B)
  } →
  
  assert(A ∩ B ∈ R) by(hypothesis_1) →
  assert(A ∆ B ∈ R) by(hypothesis_2) →
  assert((A ∆ B) ∆ (A ∩ B) ∈ R) by(hypothesis_2) →
  apply(Union_As_SymDiff_Intersection()) →
  assert(A ∪ B ∈ R) by(substitution)
}