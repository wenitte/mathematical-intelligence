theorem Character_Star_Homomorphism() {
  assert(
    ∀A: C*Algebra, ∀φ: Character(A) ⇒
    is_star_algebra_homomorphism(φ)
  )
} ↔

proof Character_Star_Homomorphism() {
  setVar(A: C*Algebra, φ: Character(A), x: A) →
  
  lemma Hermitian_Decomposition() {
    assert(
      ∃a,b ∈ A: (is_hermitian(a) ∧ is_hermitian(b) ∧ x = a + i*b)
    )
  } →
  
  apply(Hermitian_Decomposition()) →
  
  assert(φ(x*) = φ(a* - i*b*)) →
  apply(C*_axiom_2, C*_axiom_4) →
  
  assert(φ(x*) = φ(a) - i*φ(b)) →
  apply(hermitian_property, φ.linearity) →
  
  assert(φ(x*) = conj(φ(a) + i*φ(b))) →
  apply(Character_Real_On_Hermitian) →
  
  assert(φ(x*) = conj(φ(a + i*b))) →
  apply(φ.linearity) →
  
  assert(φ(x*) = conj(φ(x))) →
  assert(is_star_algebra_homomorphism(φ))
}