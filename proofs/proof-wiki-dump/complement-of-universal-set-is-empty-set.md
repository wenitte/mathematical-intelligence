theorem Complement_Universal_Set_Is_Empty() {
  assert(
    ∀U ∈ Sets ⇒ (U is universal set) →
    (U^c = ∅)
  )
} ↔

proof Complement_Universal_Set_Is_Empty() {
  lemma Relative_Complement_Self_Empty() {
    assert(
      ∀S ∈ Sets ⇒ (S \ S = ∅)
    )
  } →
  
  setVar(U: Sets) →
  assume(U is universal set) →
  
  note(U^c = U \ U) →
  apply(Relative_Complement_Self_Empty()) →
  substitute(S := U) →
  
  conclude(U^c = ∅)
}