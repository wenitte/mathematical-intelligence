theorem CompletelPrimeFilterInducedByFrameHomomorphism() {
  let(L: Frame) →
  let(2: BooleanLattice) →
  let(φ: Homomorphism[L → 2]) →
  assert(
    φ⁻¹(⊤) is_completely_prime_filter
  )
}

proof CompletelPrimeFilterInducedByFrameHomomorphism() {
  lemma SingletonTopIsCompletelyPrime() {
    assert(
      {⊤} is_completely_prime_filter
    )
  } →
  
  lemma InverseImagePreservesCompletelyPrime() {
    assert(
      ∀F(F is_completely_prime_filter → φ⁻¹(F) is_completely_prime_filter)
    )
  } →
  
  assert(φ⁻¹({⊤}) = φ⁻¹(⊤)) {
    apply(InverseImageDefinition) →
    assert(
      φ⁻¹({⊤}) = {x ∈ L | φ(x) ∈ {⊤}} ↔ {x ∈ L | φ(x) = ⊤} = φ⁻¹(⊤)
    )
  } →
  
  apply(SingletonTopIsCompletelyPrime) →
  apply(InverseImagePreservesCompletelyPrime) →
  conclude(φ⁻¹(⊤) is_completely_prime_filter)
}