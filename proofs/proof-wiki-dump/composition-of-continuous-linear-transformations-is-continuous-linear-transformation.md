theorem Composition_Continuous_Linear_Trans() {
  let(K: Field)
  let(X,Y,Z: NormedVectorSpace(K))
  let(CL(X,Y): ContinuousLinearTransSpace)
  let(||·||: SupremumOperatorNorm)
  assert(
    ∀T ∈ CL(X,Y), ∀S ∈ CL(Y,Z), ∀x ∈ X ⇒
    (S∘T)(x) := S(T(x)) ∧
    S∘T ∈ CL(X,Z)
  )
} ↔

proof Composition_Continuous_Linear_Trans() {
  // Linearity proof
  apply(Composition_Linear_Trans_is_Linear()) →
  assert(S∘T: Linear) →

  // Continuity proof
  setVar(x: X) →
  assert(
    ||(S∘T)(x)||_Z = ||S(T(x))||_Z
  ) →
  
  apply(Supremum_Operator_Norm_Upper_Bound) →
  assert(
    ||S(T(x))||_Z ≤ ||S|| · ||T(x)||_Y
  ) →
  
  apply(Supremum_Operator_Norm_Upper_Bound) →
  assert(
    ||S|| · ||T(x)||_Y ≤ ||S|| · ||T|| · ||x||_X
  ) →
  
  setVar(M := ||S|| · ||T||, M ∈ ℝ) →
  assert(
    ||S|| · ||T|| · ||x||_X = M · ||x||_X
  ) →
  
  apply(Continuous_Linear_Trans_Normed_Spaces) →
  assert(S∘T: Continuous) →
  
  conclude(S∘T ∈ CL(X,Z))
}