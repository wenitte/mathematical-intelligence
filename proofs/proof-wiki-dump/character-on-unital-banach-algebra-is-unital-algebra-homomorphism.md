theorem Character_Is_Unital_Homomorphism() {
  let(A: BanachAlgebra, ∥·∥: Norm, ℂ: ComplexNumbers)
  let(φ: Function[A → ℂ])
  assert(
    isUnital(A) ∧ isCharacter(φ, A) ⇒ isUnitalAlgebraHomomorphism(φ, A)
  )
} ↔

proof Character_Is_Unital_Homomorphism() {
  assume(isCharacter(φ, A)) →
  assert(isNonZeroAlgebraHomomorphism(φ)) →
  
  lemma Unity_Property() {
    assert(φ(1_A) = φ(1_A²)) →
    assert(φ(1_A) = (φ(1_A))²) →
    assert(φ(1_A) ∈ {0,1})
  } →

  lemma Multiplication_Property() {
    setVar(x: A) →
    assert(∀x ∈ A ⇒ φ(x) = φ(1_A)·φ(x))
  } →

  apply(Unity_Property()) →
  apply(Multiplication_Property()) →
  
  proof_by_contradiction() {
    assume(φ(1_A) = 0) →
    assert(∀x ∈ A ⇒ φ(x) = 0) →
    assert(φ = 0) →
    assert(contradicts(isNonZeroAlgebraHomomorphism(φ)))
  } →

  assert(φ(1_A) = 1) →
  assert(isUnitalAlgebraHomomorphism(φ, A))
}