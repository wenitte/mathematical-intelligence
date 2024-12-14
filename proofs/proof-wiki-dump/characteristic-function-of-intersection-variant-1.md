theorem CharacteristicFunctionIntersection() {
  assert(
    ∀A,B ⊆ S ⇒
    (χ_{A∩B} = χ_A χ_B)
  )
} ↔

proof CharacteristicFunctionIntersection() {
  setVar(A,B: subsets_of(S)) →
  lemma CharFuncDeterminedBy1Fiber() {
    assert(
      ∀s ∈ S ⇒
      (χ_A(s)χ_B(s) = 1 ↔ s ∈ A∩B)
    )
  } →
  
  assert(χ_A, χ_B: characteristic_functions) →
  
  ∀s ∈ S ⇒ (
    χ_A(s)χ_B(s) = 1 ↔
    (χ_A(s) = 1 ∧ χ_B(s) = 1)
  ) →
  
  lemma CharFuncDefinition() {
    assert(
      ∀s ∈ S ⇒
      (χ_A(s) = 1 ↔ s ∈ A) ∧
      (χ_B(s) = 1 ↔ s ∈ B)
    )
  } →
  
  apply(CharFuncDefinition()) →
  assert(
    χ_A(s)χ_B(s) = 1 ↔
    (s ∈ A ∧ s ∈ B)
  ) →
  
  apply(SetIntersectionDefinition()) →
  assert(
    (s ∈ A ∧ s ∈ B) ↔
    s ∈ (A∩B)
  ) →
  
  apply(CharFuncDeterminedBy1Fiber()) →
  assert(χ_{A∩B} = χ_A χ_B)
}