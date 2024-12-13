theorem Basis_For_Topological_Subspace() {
  let(T = ⟨A,τ⟩: TopologicalSpace) ∧
  let(O ⊆ H ⊆ A) ∧
  let(T_H = ⟨H,τ_H⟩: Subspace(T)) ∧
  let(𝔹: SyntheticBasis(T)) ∧
  let(𝔹_H = {U ∩ H: U ∈ 𝔹}) →
  assert(𝔹_H: SyntheticBasis(T_H))
}

proof Basis_For_Topological_Subspace() {
  lemma SyntheticBasisDefinition() {
    assert(𝔹 ⊆ 𝒫(A) ↔ (
      (B1: A = ∪{B: B ∈ 𝔹}) ∧
      (B2: ∀B₁,B₂ ∈ 𝔹 → B₁ ∩ B₂ = ∪{B: B ∈ 𝔹'} for some 𝔹' ⊆ 𝔹)
    ))
  } →

  // Prove B1 for 𝔹_H
  let(A = ∪{S: S ∈ 𝕊} where 𝕊 ⊆ 𝔹) →
  assert(
    H = A ∩ H →
    H = (∪{S: S ∈ 𝕊}) ∩ H →
    H = ∪{S ∩ H: S ∈ 𝕊}
  ) →
  assert(∀S ∈ 𝔹 → S ∩ H ∈ 𝔹_H) →

  // Prove B2 for 𝔹_H
  let(U₁,U₂ ∈ 𝔹_H) →
  assert(∃B₁,B₂ ∈ 𝔹: U₁ = B₁ ∩ H ∧ U₂ = B₂ ∩ H) →
  assert(U₁ ∩ U₂ = (B₁ ∩ B₂) ∩ H) →
  let(B₁ ∩ B₂ = ∪{S: S ∈ 𝕊} where 𝕊 ⊆ 𝔹) →
  assert(
    U₁ ∩ U₂ = (∪{S: S ∈ 𝕊}) ∩ H →
    U₁ ∩ U₂ = ∪{S ∩ H: S ∈ 𝕊}
  ) →
  assert(∀S ∈ 𝔹 → S ∩ H ∈ 𝔹_H) →
  conclude(𝔹_H: SyntheticBasis(T_H))
}