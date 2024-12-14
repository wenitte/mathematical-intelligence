theorem Boundary_Characterization_By_Basis() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(𝔹 ⊆ τ: Basis) →
  let(A ⊆ S) →
  let(x ∈ S) →
  assert(
    x ∈ ∂A ↔ ∀U∈𝔹 [x∈U → (A∩U≠∅ ∧ (S\A)∩U≠∅)]
  )
} ↔

proof Boundary_Characterization_By_Basis() {
  // Sufficient condition
  assume(x ∈ ∂A) →
  let(U ∈ 𝔹) →
  assert(U ∈ τ) by(Basis_Definition) →
  apply(Boundary_Characterization_By_Open_Sets) →
  assert(x∈U → (A∩U≠∅ ∧ (S\A)∩U≠∅)) →
  
  // Necessary condition
  assume(∀U∈𝔹 [x∈U → (A∩U≠∅ ∧ (S\A)∩U≠∅)]) →
  let(V ∈ τ) →
  assume(x ∈ V) →
  
  lemma Basis_Property() {
    assert(∃W∈𝔹 [x∈W ∧ W⊆V]) by(Analytic_Basis_Definition)
  } →
  
  apply(Basis_Property()) →
  let(W ∈ 𝔹: x∈W ∧ W⊆V) →
  assert(A∩W≠∅ ∧ (S\A)∩W≠∅) by(initial_assumption) →
  
  lemma Subset_Intersection() {
    assert(A∩W⊆A∩V ∧ (S\A)∩W⊆(S\A)∩V) by(Set_Intersection_Preserves_Subsets)
  } →
  
  apply(Subset_Intersection()) →
  assert(A∩V≠∅ ∧ (S\A)∩V≠∅) →
  apply(Boundary_Characterization_By_Open_Sets) →
  assert(x ∈ ∂A)
}