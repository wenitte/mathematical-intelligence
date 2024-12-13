theorem Rationals_Normal_Subgroup_Complex() {
  assert(
    let(ℚ₊: Group) ∧
    let(ℂ₊: Group) ∧
    (ℚ₊ ⊴ ℂ₊)
  )
} ↔

proof Rationals_Normal_Subgroup_Complex() {
  lemma Prior_Result1() {
    assert(ℚ₊ ⊴ ℝ₊)
  } →
  
  lemma Prior_Result2() {
    assert(ℝ₊ ⊴ ℂ₊)
  } →
  
  apply(Prior_Result1(), Prior_Result2()) →
  assert(ℚ₊ ≤ ℂ₊) →
  
  lemma Complex_Is_Abelian() {
    assert(isAbelian(ℂ₊))
  } →
  
  lemma Abelian_Subgroup_Normal() {
    assert(
      ∀G,H: Group →
      (isAbelian(G) ∧ H ≤ G) →
      H ⊴ G
    )
  } →
  
  apply(Complex_Is_Abelian(), Abelian_Subgroup_Normal()) →
  assert(ℚ₊ ⊴ ℂ₊)
}