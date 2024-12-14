theorem CharacteristicFunctionUnion() {
  assert(
    ∀A,B ⊆ S ⇒ (
      χ[A∪B] = min{χ[A] + χ[B], 1}
    )
  )
} ↔

proof CharacteristicFunctionUnion() {
  setVar(A,B ⊆ S) →
  apply(CharacteristicFunctionDeterminedBy1Fiber()) →
  assert(
    ∀s ∈ S ⇒ (
      min{χ[A](s) + χ[B](s), 1} = 1 ↔ s ∈ A∪B
    )
  ) →
  
  lemma MinOperationEquivalence() {
    assert(
      min{χ[A](s) + χ[B](s), 1} = 1 ↔
      χ[A](s) + χ[B](s) ≥ 1
    )
  } →
  
  apply(MinOperationEquivalence()) →
  assert(
    χ[A](s) + χ[B](s) ≥ 1 ↔ s ∈ A∪B
  ) →
  
  lemma CharacteristicFunctionProperties() {
    assert(
      χ[A](s) + χ[B](s) ≥ 1 ↔
      (s ∈ A ∨ s ∈ B)
    )
  } →
  
  apply(CharacteristicFunctionProperties()) →
  assert(s ∈ A ∨ s ∈ B ↔ s ∈ A∪B) →
  conclude()
}