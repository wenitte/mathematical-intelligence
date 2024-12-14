theorem Composition_Linear_Isometries() {
  let(GF ∈ {ℝ, ℂ})
  let(X: NormedVectorSpace(GF), Y: NormedVectorSpace(GF), Z: NormedVectorSpace(GF))
  let(T: LinearMap(X → Y), S: LinearMap(Y → Z))
  assert(
    (isLinearIsometry(T) ∧ isLinearIsometry(S)) →
    isLinearIsometry(S ∘ T)
  )
} ↔

proof Composition_Linear_Isometries() {
  let(x ∈ X) →
  
  lemma Composition_Is_Linear() {
    assert(
      (isLinear(S) ∧ isLinear(T)) →
      isLinear(S ∘ T)
    )
  } →
  
  apply(Composition_Is_Linear()) →
  
  assert(‖(S ∘ T)(x)‖_Z) →
  assert(‖(S ∘ T)(x)‖_Z = ‖T(x)‖_Y) by(isLinearIsometry(S)) →
  assert(‖T(x)‖_Y = ‖x‖_X) by(isLinearIsometry(T)) →
  
  conclude(
    ∀x ∈ X: ‖(S ∘ T)(x)‖_Z = ‖x‖_X ∧ isLinear(S ∘ T) →
    isLinearIsometry(S ∘ T)
  )
}