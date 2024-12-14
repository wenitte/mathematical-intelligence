theorem CharacteristicFunctionUnion() {
  assert(
    ∀A,B ⊆ S ⇒ (χ_{A∪B} = χ_A + χ_B - χ_{A∩B})
  )
} ↔

proof CharacteristicFunctionUnion() {
  setVar(A,B: Set[S]) →
  lemma SubsetUnion() {
    assert(A ⊆ (A∪B) ∧ B ⊆ (A∪B))
  } →
  lemma IntersectionSubsetUnion() {
    assert((A∩B) ⊆ (A∪B))
  } →
  lemma CharacteristicZeroImplication() {
    assert(
      ∀s ∈ S ⇒ (χ_{A∪B}(s) = 0 → χ_A(s) = χ_B(s) = χ_{A∩B}(s) = 0)
    )
  } →
  
  setVar(s: S) →
  assume(χ_A(s) + χ_B(s) - χ_{A∩B}(s) = 0) →
  assert(χ_A(s) + χ_B(s) = χ_{A∩B}(s)) →
  
  case s∈(A∩B) {
    assert(χ_A(s) = 1 ∧ χ_B(s) = 1) →
    assert(χ_A(s) + χ_B(s) = 2) →
    assert(2 ≠ 1) →
    assert(χ_{A∩B}(s) = 0) →
    assert(χ_A(s) + χ_B(s) = 0) →
    assert(χ_A(s) = χ_B(s) = 0) →
    assert(s ∉ A ∧ s ∉ B) →
    assert(s ∉ (A∪B)) →
    assert(χ_{A∪B}(s) = 0)
  } →
  
  conclude(
    ∀s ∈ S ⇒ (χ_{A∪B}(s) = 0 ↔ χ_A(s) + χ_B(s) - χ_{A∩B}(s) = 0)
  ) →
  
  apply(CharacteristicFunctionDeterminedByZeroFiber()) →
  assert(χ_{A∪B} = χ_A + χ_B - χ_{A∩B})
}