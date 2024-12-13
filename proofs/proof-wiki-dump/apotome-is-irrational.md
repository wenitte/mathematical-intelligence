theorem Apotome_Is_Irrational() {
  assert(
    ∀a,b ∈ {x ∈ ℝ>0 : x² ∈ ℚ} ⇒
    ((a/b ∉ ℚ ∧ (a/b)² ∈ ℚ) → ((a-b) ∉ ℚ ∧ (a-b)² ∉ ℚ))
  )
} ↔

proof Apotome_Is_Irrational() {
  setVar(AB, BC: ℝ>0) →
  assume(
    AB is rational ∧
    BC is rational ∧
    BC² is commensurable with AB² ∧
    BC is commensurable in square only with AB
  ) →
  
  assert(AB incommensurable_in_length_with BC) →
  
  lemma Length_Ratio() {
    assert(AB:BC = AB²:(AB·AC))
  } →
  
  apply(Book_X_Prop_11) →
  assert(AB² incommensurable_with (AB·AC)) →
  
  apply(Book_X_Prop_15) →
  assert(AB² + BC² commensurable_with AB²) →
  
  apply(Book_X_Prop_6) →
  assert(2·AB·AC commensurable_with AB·AC) →
  
  apply(Book_II_Prop_7) →
  assert(AB² + BC² = 2·AB·AC + AC²) →
  
  apply(Book_X_Prop_13) →
  apply(Book_X_Prop_16) →
  assert(AB² + BC² incommensurable_with AC²) →
  
  given(AB is rational ∧ BC is rational) →
  conclude(AC is irrational) →
  
  assert((a-b) ∉ ℚ ∧ (a-b)² ∉ ℚ)
}