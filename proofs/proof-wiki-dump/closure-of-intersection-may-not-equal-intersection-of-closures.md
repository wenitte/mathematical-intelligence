theorem Closure_Intersection_Not_Equal_Closures() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space) ∧
    ∀H₁,H₂(H₁ ⊆ S ∧ H₂ ⊆ S) ∧
    let(H₁⁻ = closure(H₁) ∧ H₂⁻ = closure(H₂)) →
    ¬∀T,H₁,H₂((H₁ ∩ H₂)⁻ = H₁⁻ ∩ H₂⁻)
  )
} ↔

proof Closure_Intersection_Not_Equal_Closures() {
  lemma Always_Subset() {
    assert((H₁ ∩ H₂)⁻ ⊆ H₁⁻ ∩ H₂⁻)
  } →
  
  proof_by_counterexample_1() {
    setVar(T = ⟨ℝ,τ⟩, τ is_euclidean_topology) →
    setVar(H₁ = ℚ) →
    setVar(H₂ = ℝ∖ℚ) →
    assert((H₁ ∩ H₂)⁻ = ∅) →
    assert(H₁⁻ ∩ H₂⁻ = ℝ) →
    conclude((H₁ ∩ H₂)⁻ ≠ H₁⁻ ∩ H₂⁻)
  } ∨
  
  proof_by_counterexample_2() {
    setVar(T = ⟨ℝ,τ⟩, τ is_euclidean_topology) →
    setVar(H₁ = (0,½)) →
    setVar(H₂ = (½,1)) →
    assert(H₁ ∩ H₂ = ∅) →
    assert((H₁ ∩ H₂)⁻ = ∅) →
    assert(H₁⁻ = [0,½]) →
    assert(H₂⁻ = [½,1]) →
    assert(H₁⁻ ∩ H₂⁻ = {½}) →
    conclude((H₁ ∩ H₂)⁻ ≠ H₁⁻ ∩ H₂⁻)
  }
}