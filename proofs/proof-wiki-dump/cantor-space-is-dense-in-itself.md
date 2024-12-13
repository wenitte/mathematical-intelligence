theorem Cantor_Space_Dense_In_Itself() {
  let(T = ⟨C, τ_d⟩) →
  assert(
    T is_dense_in_itself
  )
} ↔

proof Cantor_Space_Dense_In_Itself() {
  let(T = ⟨C, τ_d⟩) →
  let(U ∈ τ_d) →
  let(p ∈ U) →
  assert(∃x ∈ U: ∃ε ∈ ℝ: d(x,p) < ε) →
  lemma Open_Set_Contains_Points() {
    assert(
      ∀U ∈ τ_d: ∀p ∈ U: 
      ∃x ∈ U: x ≠ p ∧ ∃ε ∈ ℝ: d(x,p) < ε
    )
  } →
  apply(Open_Set_Contains_Points()) →
  assert(T is_dense_in_itself)
}