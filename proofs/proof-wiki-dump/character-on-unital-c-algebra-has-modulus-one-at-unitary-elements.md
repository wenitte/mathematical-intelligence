theorem CharacterModulusOne() {
  assert(
    ∀A(IsUnitalCStarAlgebra(A) ∧
    ∃φ(IsCharacter(φ,A) ∧
    ∃x(IsUnitary(x,A)) →
    |φ(x)| = 1))
  )
}

proof CharacterModulusOne() {
  setVar(A: UnitalCStarAlgebra) →
  setVar(φ: Character(A)) →
  setVar(x: Element(A)) →
  setVar(1_A: Identity(A)) →
  
  assert(IsUnitary(x,A) → x·x* = 1_A) →
  
  assert(φ(x·x*) = φ(1_A)) →
  
  lemma CharacterHomomorphism() {
    assert(φ(x·x*) = φ(x)·φ(x*) = φ(x)·φ(x)̄)
  } →
  
  apply(CharacterHomomorphism()) →
  
  lemma ComplexConjugateProduct() {
    assert(z·z̄ = |z|² ∀z∈ℂ)
  } →
  
  apply(ComplexConjugateProduct()) →
  assert(φ(x·x*) = |φ(x)|²) →
  
  lemma UnitalHomomorphism() {
    assert(φ(1_A) = 1)
  } →
  
  apply(UnitalHomomorphism()) →
  assert(|φ(x)|² = 1) →
  
  assert(|φ(x)| = 1)
}