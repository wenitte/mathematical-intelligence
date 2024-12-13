theorem Cardinal_Is_Ordinal() {
  assert(
    ∀S: Set ∧ ∃x: Ordinal(S ∼ x) →
    |S| ∈ On
  )
}

proof Cardinal_Is_Ordinal() {
  setVar(S: Set) →
  setVar(x: Ordinal) →
  assume(S ∼ x) →
  
  lemma Ordinal_Set_Exists() {
    assert(
      A := {x ∈ On: S ∼ x} →
      A ≠ ∅
    )
  } →

  lemma Well_Ordered_Has_Minimal() {
    assert(
      A ⊆ On →
      A ≠ ∅ →
      ∃m ∈ A: ∀y ∈ A(m ≤ y)
    )
  } →

  apply(Ordinal_Set_Exists()) →
  apply(Well_Ordered_Has_Minimal()) →
  
  lemma Cardinal_Definition() {
    assert(
      |S| = ⋂{x ∈ On: S ∼ x}
    )
  } →
  
  apply(Cardinal_Definition()) →
  assert(⋂{x ∈ On: S ∼ x} ∈ On) →
  conclude(|S| ∈ On)
}