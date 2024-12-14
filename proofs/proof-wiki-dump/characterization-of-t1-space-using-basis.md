theorem T1_Space_Basis_Characterization() {
  assert(
    let T = ⟨S,τ⟩ be a topological space ∧
    let 𝔹 be a basis for T ⇒
    (T is T₁ space ↔ 
      ∀x,y ∈ S: x ≠ y ⇒ 
        (∃B_x ∈ 𝔹: x ∈ B_x ∧ y ∉ B_x) ∧
        (∃B_y ∈ 𝔹: y ∈ B_y ∧ x ∉ B_y))
  )
}

proof T1_Space_Basis_Characterization() {
  // Necessary Condition (⇒)
  assume(T is T₁ space) →
  apply(Basis_Induces_Local_Basis) →
  assert(∀x ∈ S: 𝔹_x = {B ∈ 𝔹: x ∈ B} is a local basis of x) →
  assert(∀x ∈ S: 𝔹_x is a neighborhood basis of open sets) →
  apply(T1_Space_Neighborhood_Characterization) →
  assert(
    ∀x,y ∈ S: x ≠ y ⇒
      (∃B_x ∈ 𝔹_x: y ∉ B_x) ∧
      (∃B_y ∈ 𝔹_y: x ∉ B_y)
  ) →
  assert(
    ∀x,y ∈ S: x ≠ y ⇒
      (∃B_x ∈ 𝔹: x ∈ B_x ∧ y ∉ B_x) ∧
      (∃B_y ∈ 𝔹: y ∈ B_y ∧ x ∉ B_y)
  ) →

  // Sufficient Condition (⇐)
  assume(
    ∀x,y ∈ S: x ≠ y ⇒
      (∃B_x ∈ 𝔹: x ∈ B_x ∧ y ∉ B_x) ∧
      (∃B_y ∈ 𝔹: y ∈ B_y ∧ x ∉ B_y)
  ) →
  assert(𝔹 ⊆ τ) →
  assert(
    ∀x,y ∈ S: x ≠ y ⇒
      (∃B_x ∈ τ: x ∈ B_x ∧ y ∉ B_x) ∧
      (∃B_y ∈ τ: y ∈ B_y ∧ x ∉ B_y)
  ) →
  apply(T1_Space_Definition) →
  conclude(T is T₁ space)
}