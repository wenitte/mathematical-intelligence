theorem Algebra_Norm_Through_Isomorphism() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(A, B: algebra_over(GF)) ∧
  let(‖·‖_B: algebra_norm(B)) ∧
  let(φ: A → B, is_algebra_isomorphism(φ)) ∧
  define(‖·‖_A: A → ℝ, ‖a‖_A = ‖φ(a)‖_B) →
  assert(is_algebra_norm(‖·‖_A, A))
} ↔

proof Algebra_Norm_Through_Isomorphism() {
  apply(Vector_Space_Norm_Through_Linear_Isomorphism) →
  assert(is_vector_space_norm(‖·‖_A)) →
  
  setGoal(∀a,b ∈ A: ‖ab‖_A ≤ ‖a‖_A‖b‖_A) →
  
  let(a,b ∈ A) →
  
  assert(‖ab‖_A = ‖φ(ab)‖_B) by(definition(‖·‖_A)) →
  
  assert(‖φ(ab)‖_B = ‖φ(a)φ(b)‖_B) by(algebra_homomorphism(φ)) →
  
  assert(‖φ(a)φ(b)‖_B ≤ ‖φ(a)‖_B‖φ(b)‖_B) by(algebra_norm_property(‖·‖_B)) →
  
  assert(‖φ(a)‖_B‖φ(b)‖_B = ‖a‖_A‖b‖_A) by(definition(‖·‖_A)) →
  
  conclude(is_algebra_norm(‖·‖_A, A)) by(chainOfInequalities)
}