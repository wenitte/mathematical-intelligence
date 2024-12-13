theorem Bound_Total_Variation_Resolution_Identity() {
  let(X: TopologicalSpace,
      𝔹(X): BorelAlgebra(X),
      ℋ: HilbertSpace(ℂ),
      B(ℋ): BoundedLinearTransformations(ℋ),
      E: 𝔹(X) → B(ℋ),
      E_xy: 𝔹(X) → ℂ) →
  assert(
    ∀x,y ∈ ℋ ⇒ [E_xy(A) = ⟨E(A)x,y⟩] ∧
    [‖E_xy‖ ≤ ‖x‖‖y‖]
  )
} ↔

proof Bound_Total_Variation_Resolution_Identity() {
  setVar(P(X): FinitePartitions(𝔹(X))) →
  assert(‖E_xy‖ = |E_xy|(X)) →
  assert(|E_xy|(X) = sup{∑ⱼ₌₁ⁿ|E_xy(Sⱼ)| : {S₁,...,Sₙ} ∈ P(X)}) →
  
  lemma Complex_Unit_Multipliers() {
    assert(∀j ∃αⱼ ∈ ℂ : |αⱼ| = 1 ∧ 
           |⟨E(Sⱼ)x,y⟩| = αⱼ⟨E(Sⱼ)x,y⟩)
  } →
  
  assert(∑ⱼ₌₁ⁿ|⟨E(Sⱼ)x,y⟩| = ∑ⱼ₌₁ⁿαⱼ⟨E(Sⱼ)x,y⟩) →
  assert(∑ⱼ₌₁ⁿαⱼ⟨E(Sⱼ)x,y⟩ = ⟨∑ⱼ₌₁ⁿαⱼE(Sⱼ)x,y⟩) →
  apply(Cauchy_Schwarz_Inequality()) →
  assert(⟨∑ⱼ₌₁ⁿαⱼE(Sⱼ)x,y⟩ ≤ ‖∑ⱼ₌₁ⁿαⱼE(Sⱼ)x‖‖y‖) →
  
  lemma Orthogonality_Disjoint_Sets() {
    assert(∀i≠j ⇒ ⟨E(Sᵢ)x,E(Sⱼ)x⟩ = 0)
  } →
  
  apply(Pythagoras_Theorem()) →
  assert(‖∑ⱼ₌₁ⁿαⱼE(Sⱼ)x‖² = ∑ⱼ₌₁ⁿ‖αⱼE(Sⱼ)x‖²) →
  assert(∑ⱼ₌₁ⁿ‖αⱼE(Sⱼ)x‖² = ∑ⱼ₌₁ⁿ‖E(Sⱼ)x‖²) →
  assert(∑ⱼ₌₁ⁿ‖E(Sⱼ)x‖² = ∑ⱼ₌₁ⁿE_xx(Sⱼ)) →
  assert(∑ⱼ₌₁ⁿE_xx(Sⱼ) = E_xx(X)) →
  assert(E_xx(X) = ⟨E(X)x,x⟩) →
  assert(⟨E(X)x,x⟩ = ⟨x,x⟩) →
  assert(⟨x,x⟩ = ‖x‖²) →
  
  assert(‖∑ⱼ₌₁ⁿαⱼE(Sⱼ)x‖ = ‖x‖) →
  assert(∑ⱼ₌₁ⁿ|E_xy(Sⱼ)| ≤ ‖x‖‖y‖) →
  
  apply(Supremum_Definition()) →
  assert(‖E_xy‖ ≤ ‖x‖‖y‖)
}