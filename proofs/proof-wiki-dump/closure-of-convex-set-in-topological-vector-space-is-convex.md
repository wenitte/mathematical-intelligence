theorem Closure_Convex_Set_Topological_Vector_Space() {
  let(𝔽 ∈ {ℝ,ℂ}) ∧
  let(X: TopologicalVectorSpace over 𝔽) ∧
  let(C ⊆ X) ∧
  assert(isConvex(C)) →
  assert(isConvex(C⁻))
} ↔

proof Closure_Convex_Set_Topological_Vector_Space() {
  let(t ∈ [0,1]) →
  assert(tC + (1-t)C ⊆ C) from(isConvex(C)) →
  
  lemma Show_Closure_Convex() {
    assert(tC⁻ + (1-t)C⁻ ⊆ C⁻)
  } →
  
  assert(tC⁻ + (1-t)C⁻ = (tC)⁻ + ((1-t)C)⁻) by(Dilation_Closure_Property) →
  assert((tC)⁻ + ((1-t)C)⁻ ⊆ (tC + (1-t)C)⁻) by(Sum_Closures_Subset) →
  assert((tC + (1-t)C)⁻ ⊆ C⁻) from(Closure_Subset_Property, tC + (1-t)C ⊆ C) →
  
  conclude(tC⁻ + (1-t)C⁻ ⊆ C⁻) by(TransitiveInclusion) →
  conclude(isConvex(C⁻))
}