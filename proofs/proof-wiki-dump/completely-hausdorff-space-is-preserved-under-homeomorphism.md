theorem Completely_Hausdorff_Preserved_Homeomorphism() {
  let(T_A = ⟨S_A, τ_A⟩: TopologicalSpace) ∧
  let(T_B = ⟨S_B, τ_B⟩: TopologicalSpace) ∧
  let(φ: T_A → T_B: Homeomorphism) ∧
  assert(
    isCompletelyHausdorff(T_A) → isCompletelyHausdorff(T_B)
  )
} ↔

proof Completely_Hausdorff_Preserved_Homeomorphism() {
  lemma Homeomorphism_Properties() {
    assert(
      isHomeomorphism(φ) ↔
      (isContinuous(φ) ∧ isClosed(φ) ∧ isBijective(φ))
    )
  } →
  apply(Homeomorphism_Properties()) →
  apply(Completely_Hausdorff_Preserved_Closed_Bijection(φ)) →
  assert(isCompletelyHausdorff(T_B))
}