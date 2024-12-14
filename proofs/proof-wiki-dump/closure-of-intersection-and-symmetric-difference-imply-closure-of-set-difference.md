theorem Closure_Set_Difference() {
  assert(
    ∀R[R is_system_of_sets ∧
      (∀A,B ∈ R → A ∩ B ∈ R) ∧
      (∀A,B ∈ R → A ∆ B ∈ R)] →
    ∀A,B ∈ R → A \ B ∈ R
  )
} ↔

proof Closure_Set_Difference() {
  setVar(R: system_of_sets) →
  setVar(A,B ∈ R) →

  lemma Set_Difference_Symmetric_Difference() {
    assert(
      A \ B = A ∆ (A ∩ B)
    )
  } →

  apply(Set_Difference_Symmetric_Difference()) →
  
  assert(A ∩ B ∈ R) by(hypothesis1) →
  assert(A ∆ (A ∩ B) ∈ R) by(hypothesis2) →
  
  substitute(A \ B = A ∆ (A ∩ B)) →
  conclude(A \ B ∈ R)
}