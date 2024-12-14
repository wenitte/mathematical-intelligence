theorem Characterization_Extended_Real_Sigma_Algebra() {
  let(𝔹(ℝ): Borel_σ_algebra(ℝ)) →
  let(𝔹̄: Extended_Real_σ_algebra) →
  let(𝕊 := 𝒫({-∞, +∞})) →
  assert(
    𝔹̄ = {B ∪ S: B ∈ 𝔹(ℝ), S ∈ 𝕊}
  )
}

proof Characterization_Extended_Real_Sigma_Algebra() {
  let(B̄ ∈ 𝔹̄) →
  
  lemma Borel_Induced() {
    assert(B̄ ∩ ℝ ∈ 𝔹(ℝ))
  } →
  
  assert(ℝ̄ ∖ ℝ = {-∞, +∞}) →
  assert(B̄ ∖ ℝ ⊆ {-∞, +∞}) →
  
  lemma Set_Decomposition() {
    assert(B̄ = (B̄ ∖ ℝ) ∪ (B̄ ∩ ℝ))
  } →
  
  let(B := B̄ ∩ ℝ) →
  let(S := B̄ ∖ ℝ) →
  assert(B ∈ 𝔹(ℝ) ∧ S ∈ 𝕊) →
  
  lemma Reverse_Inclusion() {
    assert(∀B ∈ 𝔹(ℝ) → B ∈ 𝔹̄) →
    assert(𝕊 ⊆ 𝔹̄) →
    apply(σ_algebra_closed_under_union) →
    assert(∀B ∈ 𝔹(ℝ), ∀S ∈ 𝕊 → B ∪ S ∈ 𝔹̄)
  } →
  
  lemma Closed_Sets() {
    assert({∅, {-∞}, {+∞}, {-∞, +∞}} ⊆ closed_sets(ℝ̄)) →
    apply(Hausdorff_space_finite_subspace_closed) →
    assert(𝕊 ⊆ 𝔹̄)
  } →
  
  conclude(𝔹̄ = {B ∪ S: B ∈ 𝔹(ℝ), S ∈ 𝕊})
}