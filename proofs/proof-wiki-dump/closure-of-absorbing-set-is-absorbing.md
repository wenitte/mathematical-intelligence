theorem Closure_of_Absorbing_Set_is_Absorbing() {
  let(GF: Set) →
  assert(GF ∈ {ℝ, ℂ}) →
  let(X: VectorSpace) →
  assert(X over GF) →
  let(A: Set) →
  assert(A ⊆ X) →
  assert(isAbsorbing(A)) →
  assert(isAbsorbing(A⁻))
} ↔

proof Closure_of_Absorbing_Set_is_Absorbing() {
  lemma Closure_Definition() {
    assert(A ⊆ A⁻)
  } →
  
  lemma Superset_Absorbing() {
    assert(∀S,T: Set →
      (isAbsorbing(S) ∧ S ⊆ T) → isAbsorbing(T))
  } →
  
  apply(Closure_Definition()) →
  apply(Superset_Absorbing(), {S: A, T: A⁻}) →
  conclude(isAbsorbing(A⁻))
}