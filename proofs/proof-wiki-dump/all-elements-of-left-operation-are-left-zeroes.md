theorem Left_Operation_Elements_Are_Left_Zeroes() {
  let(S: Set, ←: Operation) →
  assert(
    (S,←) is_algebraic_structure ∧
    ← is_left_operation
  ) →
  assert(
    ((S,←) is_semigroup) ∧
    (∀x ∈ S → x is_left_zero)
  )
} ↔

proof Left_Operation_Elements_Are_Left_Zeroes() {
  lemma Structure_Is_Semigroup() {
    assert((S,←) is_semigroup)
  } →
  
  assert(
    ∀x,y ∈ S → (x ← y = x)
  ) →
  
  setVar(a: S) →
  setVar(b: S) →
  assert(
    (a ← b = a) →
    a is_left_zero
  ) →
  
  apply(∀-generalization) →
  assert(∀x ∈ S → x is_left_zero) →
  
  conjoin(
    Structure_Is_Semigroup(),
    ∀x ∈ S → x is_left_zero
  )
}

theorem No_Right_Zero() {
  assert(
    ∃x,y ∈ S → (x ≠ y) →
    ¬∃z ∈ S → z is_right_zero
  )
}