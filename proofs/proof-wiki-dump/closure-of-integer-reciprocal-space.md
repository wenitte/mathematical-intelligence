theorem Integer_Reciprocal_Space_Closure() {
  define(A: ℝ → { 1/n | n ∈ ℤ_{>0} })
  define(τ_d: topology(ℝ, euclidean))
  assert(
    A^- = A ∪ {0}
  )
} ↔

proof Integer_Reciprocal_Space_Closure() {
  step1(
    assert(A^- = A ∪ A' where A' is_derived_set_of A)
  ) →
  
  lemma Derived_Set_Properties() {
    assert(
      x ∈ A' ↔ x is_limit_point_of A in ℝ
    )
  } →
  
  lemma Zero_Is_Limit_Point() {
    assert(0 is_limit_point_of A) ∧
    assert(∀x ∈ ℝ, x ≠ 0 → x is_not_limit_point_of A)
  } →
  
  apply(Zero_Is_Limit_Point()) →
  assert(A' = {0}) →
  
  conclude(
    A^- = A ∪ A' = A ∪ {0}
  )
}