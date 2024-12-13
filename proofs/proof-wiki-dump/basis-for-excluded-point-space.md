theorem ExcludedPointBasis() {
  let(T = ⟨S, τ_p̄⟩) →
  let(𝔹 = {{x}: x ∈ S∖{p}} ∪ {S}) →
  assert(
    𝔹 is_basis_for T
  )
} ↔

proof ExcludedPointBasis() {
  let(H ∈ τ_p̄) →
  case H = S {
    assert(H is_union_of 𝔹_elements) →
    conclude()
  } ∧
  case H ≠ S {
    assert(p ∉ H) →
    assert(
      ∀y ∈ H ⇒ {y} ∈ 𝔹
    ) →
    assert(
      H = ⋃_{y∈H} {y}
    ) →
    conclude()
  } →
  assert(𝔹 is_analytic_basis_for T) →
  note(
    𝔹 is_also_synthetic_basis_for T
  ) →
  conclude()
}