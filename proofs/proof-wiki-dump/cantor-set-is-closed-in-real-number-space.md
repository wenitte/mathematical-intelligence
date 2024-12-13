theorem Cantor_Set_Is_Closed() {
  let(ℂ: Set) where "Cantor set" →
  let(ℝ: Set) where "Real numbers" →
  let(τ_d: Topology) where "Euclidean topology" →
  assert(
    ℂ ⊆ ⟨ℝ,τ_d⟩ → is_closed(ℂ, ⟨ℝ,τ_d⟩)
  )
} ↔

proof Cantor_Set_Is_Closed() {
  lemma Cantor_Definition() {
    assert(
      ℂ = [0,1] ∖ (⋃{open_sets})
    )
  } →
  lemma Union_Is_Open() {
    assert(
      ⋃{open_sets} ∈ τ_d
    )
  } →
  lemma Closed_Interval_Definition() {
    assert(
      [0,1] = ℝ ∖ ((-∞,0) ∪ (1,∞))
    )
  } →
  apply(Cantor_Definition()) →
  apply(Union_Is_Open()) →
  apply(Closed_Interval_Definition()) →
  assert(
    ℂ = ℝ ∖ (((-∞,0) ∪ (1,∞)) ∪ ⋃{open_sets})
  ) →
  assert(
    complement_of_open_is_closed(ℂ, ⟨ℝ,τ_d⟩)
  )
}