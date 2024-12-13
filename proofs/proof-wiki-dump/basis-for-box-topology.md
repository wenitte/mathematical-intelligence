theorem Basis_Box_Topology() {
  setVar(I: Set, S_i: TopologicalSpace[i ∈ I], τ_i: Topology[i ∈ I]) →
  let(S := ∏_{i ∈ I} S_i) →
  let(𝔹 := {∏_{i ∈ I} U_i : ∀i ∈ I → U_i ∈ τ_i}) →
  assert(𝔹 is_synthetic_basis_on S)
} ↔

proof Basis_Box_Topology() {
  // Verify condition B1: Covering
  lemma B1_Covering() {
    apply(OpenSetAxiom_O3, ∀i ∈ I → S_i ∈ τ_i) →
    assert(S = ∏_{i ∈ I} S_i ∈ 𝔹) →
    apply(Set_Subset_Union) →
    assert(S ⊆ ∪𝔹)
  } →

  // Verify condition B2: Intersections
  lemma B2_Intersections() {
    setVar(A := ∏_{i ∈ I} U_i ∈ 𝔹) →
    setVar(B := ∏_{i ∈ I} V_i ∈ 𝔹) →
    apply(Cartesian_Product_Intersections) →
    assert(A ∩ B = ∏_{i ∈ I} (U_i ∩ V_i)) →
    apply(OpenSetAxiom_O2, ∀i ∈ I → U_i ∩ V_i ∈ τ_i) →
    assert(A ∩ B ∈ 𝔹) →
    apply(Union_Singleton) →
    assert(A ∩ B = ∪{A ∩ B})
  } →

  apply(B1_Covering()) ∧
  apply(B2_Intersections()) →
  assert(𝔹 is_synthetic_basis_on S)
}