theorem Closure_Intersection_Not_Equal_Intersection_Closures() {
  assert(
    ∃T: TopologicalSpace(S, τ) ∧
    ∃H₁,H₂ ⊆ S ∧
    ¬(∀H₁,H₂: (H₁ ∩ H₂)⁻ = H₁⁻ ∩ H₂⁻)
  )
} ↔

proof Closure_Intersection_Not_Equal_Intersection_Closures() {
  reference(Closure_Intersection_Subset()) →
  assert((H₁ ∩ H₂)⁻ ⊆ H₁⁻ ∩ H₂⁻) →
  
  // Counterexample construction
  setVar(T: TopologicalSpace(ℝ, τ_euclidean)) →
  setVar(H₁: ℚ) →
  setVar(H₂: ℝ∖ℚ) →
  
  lemma Rational_Irrational_Intersection_Closure() {
    assert((ℚ ∩ (ℝ∖ℚ))⁻ = ∅)
  } →
  
  lemma Rational_Irrational_Closure_Intersection() {
    assert(ℚ⁻ ∩ (ℝ∖ℚ)⁻ = ℝ)
  } →
  
  apply(Rational_Irrational_Intersection_Closure()) →
  apply(Rational_Irrational_Closure_Intersection()) →
  
  assert(∅ ≠ ℝ) →
  assert((H₁ ∩ H₂)⁻ ≠ H₁⁻ ∩ H₂⁻) →
  conclude()
}