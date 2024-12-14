theorem Character_Surjective(A: BanachAlgebra, φ: Function) {
  assert(
    (A is_BanachAlgebra_over ℂ) ∧
    (φ: A → ℂ) ∧
    (φ is_character_on A) →
    (φ is_surjective)
  )
}

proof Character_Surjective() {
  setVar(A: BanachAlgebra, φ: Function) →
  
  lemma ImageSubmodule() {
    assert(φ[A] is_vectorspace_of ℂ)
  } →
  
  lemma DimensionProperties() {
    assert(
      ∀V,W: VectorSpace ⇒
      (V subspace_of W) →
      (dim(V) ≤ dim(W))
    )
  } →
  
  apply(ImageSubmodule()) →
  apply(DimensionProperties()) →
  
  assert(dim(φ[A]) ≤ dim(ℂ) = 1) →
  assert(
    (φ[A] = {0}) ∨ (φ[A] = ℂ)
  ) →
  
  lemma CharacterNonZero() {
    assert(
      (φ is_character) →
      (φ ≠ 0)
    )
  } →
  
  apply(CharacterNonZero()) →
  assert(φ[A] = ℂ) →
  assert(φ is_surjective)
}