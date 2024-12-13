theorem Algebra_Embeds_Into_Unitization() {
  given(K: Field) ∧
  given(A: Algebra(K)) ∧
  assert(¬isUnital(A)) ∧
  given(A_plus: Unitization(A)) ∧
  let(A_0: Set) ↔ {(x,0_K) | x ∈ A} ⊆ A_plus →
  assert(A_0 isSubspaceOf A_plus)
} ↔

proof Algebra_Embeds_Into_Unitization() {
  apply(theorem: Vector_Subspace_Embeds_Into_Unitization) →
  assert(conclusion: A_0 isSubspaceOf A_plus)
}