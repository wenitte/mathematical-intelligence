theorem CharacteristicFunctionIntersection() {
  assert(
    ∀A,B ⊆ S ⇒ (χ_{A∩B} = min{χ_A, χ_B})
  )
} ↔

proof CharacteristicFunctionIntersection() {
  setVar(A,B: SetOf(S)) →
  lemma CharFuncBy1Fiber() {
    assert(
      min{χ_A(s), χ_B(s)} = 1 ↔ s ∈ A∩B
    )
  } →
  
  lemma CharFuncValues() {
    assert(
      ∀s ∈ S ⇒ (
        min{χ_A(s), χ_B(s)} = 1 ↔
        (χ_A(s) = 1 ∧ χ_B(s) = 1)
      )
    ) →
    assert(
      χ_A,χ_B: S → {0,1}
    )
  } →
  
  lemma SetMembership() {
    assert(
      ∀s ∈ S ⇒ (
        (χ_A(s) = 1 ∧ χ_B(s) = 1) ↔
        (s ∈ A ∧ s ∈ B)
      )
    )
  } →
  
  lemma IntersectionDef() {
    assert(
      ∀s ∈ S ⇒ (
        (s ∈ A ∧ s ∈ B) ↔
        s ∈ A∩B
      )
    )
  } →
  
  apply(CharFuncBy1Fiber()) →
  apply(CharFuncValues()) →
  apply(SetMembership()) →
  apply(IntersectionDef()) →
  assert(χ_{A∩B} = min{χ_A, χ_B})
}