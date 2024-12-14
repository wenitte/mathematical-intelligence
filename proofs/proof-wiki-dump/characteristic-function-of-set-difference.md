theorem Characteristic_Function_Set_Difference() {
  assert(
    ∀A,B ⊆ S ⇒ χ_{A\setminus B} = χ_A - χ_{A\cap B}
  )
} ↔

proof Characteristic_Function_Set_Difference() {
  setVar(A,B: Set, s: Element) →
  
  lemma Forward_Implication() {
    assert(χ_{A\setminus B}(s) = 1) →
    assert(s ∈ A\setminus B) →
    assert(s ∈ A ∧ s ∉ B) →
    assert(s ∉ A∩B) →
    assert(χ_A(s) = 1 ∧ χ_{A∩B}(s) = 0) →
    conclude(χ_{A\setminus B}(s) = χ_A(s) - χ_{A∩B}(s) = 1)
  } →

  lemma Backward_Implication() {
    assert(χ_A(s) - χ_{A∩B}(s) = 1) →
    assert(χ_{A∩B}(s) ≥ 0) →
    assert(χ_A(s) = 1 ∧ χ_{A∩B}(s) = 0) →
    assert(s ∈ A ∧ s ∉ A∩B) →
    assert(s ∈ A ∧ s ∉ B) →
    assert(s ∈ A\setminus B) →
    conclude(χ_{A\setminus B}(s) = 1)
  } →

  apply(Forward_Implication()) →
  apply(Backward_Implication()) →
  assert(χ_{A\setminus B}(s) = 1 ↔ χ_A(s) - χ_{A∩B}(s) = 1) →
  apply(Characteristic_Function_Determined_by_1_Fiber()) →
  conclude(χ_{A\setminus B} = χ_A - χ_{A∩B})
}