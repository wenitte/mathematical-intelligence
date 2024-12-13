theorem Automorphism_Group_Infinite_Cyclic() {
  assert(
    Aut(ℤ) ≅ C₂  // where C₂ is cyclic group of order 2
  )
} ↔

proof Automorphism_Group_Infinite_Cyclic() {
  setVar(g: Generator(ℤ)) →
  setVar(φ: Aut(ℤ)) →
  
  lemma Homomorphic_Image_Cyclic() {
    assert(
      φ(g) ∈ Generator(ℤ)
    )
  } →
  
  lemma Homomorphism_Generated() {
    assert(
      ∀h ∈ Aut(ℤ) → (h(g) = φ(g) → h = φ)
    )
  } →
  
  lemma Generators_Infinite_Cyclic() {
    assert(
      |Generator(ℤ)| = 2
    )
  } →
  
  apply(Homomorphic_Image_Cyclic()) ∧
  apply(Homomorphism_Generated()) ∧
  apply(Generators_Infinite_Cyclic()) →
  assert(|Aut(ℤ)| = 2) →
  
  lemma Prime_Group_Cyclic() {
    assert(
      |G| = p ∧ p.isPrime() → G.isCyclic()
    )
  } →
  
  apply(Prime_Group_Cyclic()) →
  assert(Aut(ℤ) ≅ C₂)
}