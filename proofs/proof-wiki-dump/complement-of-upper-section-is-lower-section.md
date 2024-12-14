theorem Complement_Upper_Section_is_Lower_Section() {
  given(S: Set, ⪯: OrderRelation) →
  assume(ordered_set(S, ⪯)) →
  given(L: Set) →
  assume(upper_section(L, S, ⪯)) →
  assert(
    lower_section(S \ L, S, ⪯)
  )
} ↔

proof Complement_Upper_Section_is_Lower_Section() {
  lemma Duality_Principle() {
    assert(
      ∀A,B,R [
        upper_section(A, B, R) ↔ 
        lower_section(A, B, R⁻¹)
      ]
    )
  } →
  
  apply(Complement_Lower_Section_is_Upper_Section(S, ⪯⁻¹, L)) →
  apply(Duality_Principle()) →
  assert(lower_section(S \ L, S, ⪯))
}