theorem Ring_Element_Categories() {
  assert(
    ∀R(Ring(R) ⇒ 
      Partition(Elements(R), {
        Zero(R),
        Units(R),
        ProperElements(R)
      })
    )
  )
} ↔

proof Ring_Element_Categories() {
  setVar(R: Ring) →
  
  lemma ProperElement_Definition() {
    assert(
      ∀x ∈ R(
        ProperElement(x) ↔ 
        (x ≠ 0 ∧ ¬∃y ∈ R(x ∘ y = 1))
      )
    )
  } →

  lemma Unit_Definition() {
    assert(
      ∀x ∈ R(
        Unit(x) ↔ ∃y ∈ R(x ∘ y = 1)
      )
    )
  } →

  lemma Zero_Not_Unit() {
    assert(
      ∀x ∈ R(0 ∘ x = 0) →
      ¬∃x ∈ R(0 ∘ x = 1)
    )
  } →

  apply(ProperElement_Definition()) →
  apply(Unit_Definition()) →
  apply(Zero_Not_Unit()) →

  assert(
    ∀x ∈ R(
      (x = 0) ∨ Unit(x) ∨ ProperElement(x) ∧
      ¬((x = 0) ∧ Unit(x)) ∧
      ¬((x = 0) ∧ ProperElement(x)) ∧
      ¬(Unit(x) ∧ ProperElement(x))
    )
  )
}