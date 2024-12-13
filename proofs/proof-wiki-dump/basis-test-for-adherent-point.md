theorem Basis_Test_for_Adherent_Point(T: TopologicalSpace, B: Set, H: Set) {
  let S = T.underlying_set
  let τ = T.topology
  assert(
    B.is_synthetic_basis(T) ∧
    H ⊆ S ∧
    ∀x ∈ S: (
      x.is_adherent_point(H) ↔
      (∀U ∈ B: x ∈ U → H ∩ U ≠ ∅)
    )
  )
}

proof Basis_Test_for_Adherent_Point() {
  // Necessary Condition (→)
  let x ∈ S: x.is_adherent_point(H) →
  apply(def_adherent_point) →
  assert(∀U ∈ τ: x ∈ U → H ∩ U ≠ ∅) →
  assert(B ⊆ τ) →
  conclude(∀U ∈ B: x ∈ U → H ∩ U ≠ ∅) →

  // Sufficient Condition (←)
  let x ∈ S: (∀U ∈ B: x ∈ U → H ∩ U ≠ ∅) →
  let V ∈ τ: x ∈ V →
  apply(synthetic_basis_def) →
  assert(∃U ∈ B: x ∈ U ∧ U ⊆ V) →
  let U witness_exists →
  assert(H ∩ U ≠ ∅) →
  lemma Subset_Intersection() {
    assert(U ⊆ V → (H ∩ U ≠ ∅ → H ∩ V ≠ ∅))
  } →
  apply(Subset_Intersection()) →
  assert(H ∩ V ≠ ∅) →
  conclude(x.is_adherent_point(H))
}