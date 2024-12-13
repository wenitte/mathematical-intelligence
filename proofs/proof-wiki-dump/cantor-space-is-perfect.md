theorem Cantor_Space_Perfect() {
  assert(
    ∀T(T = ⟨C,τ_d⟩ ∧ T is_Cantor_space) ⇒
    (C is_perfect_set_in(ℝ,τ_d))
  )
} ↔

proof Cantor_Space_Perfect() {
  lemma Cantor_Dense_In_Itself() {
    assert(
      ∀x ∈ C ⇒ x is_not_isolated_point
    )
  } →
  
  lemma Cantor_Set_Closed() {
    assert(
      C is_closed_in(ℝ)
    )
  } →
  
  apply(Cantor_Dense_In_Itself()) →
  apply(Cantor_Set_Closed()) →
  
  assert(
    (C has_no_isolated_points ∧ C is_closed_in(ℝ)) ↔
    C is_perfect_set_in(ℝ,τ_d)
  ) →
  
  conclude(C is_perfect_set_in(ℝ,τ_d))
}