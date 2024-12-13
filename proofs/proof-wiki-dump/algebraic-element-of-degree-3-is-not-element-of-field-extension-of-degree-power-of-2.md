theorem Algebraic_Elem_Not_In_Field_Extension() {
  given(
    K/F: FieldExtension,
    m: ℕ,
    α: Algebraic,
    deg(K/F) = 2^m,
    deg(α) = 3
  )
  assert(
    α ∉ K
  )
} ↔

proof Algebraic_Elem_Not_In_Field_Extension() {
  assume(α ∈ K) →
  apply(Degree_Divides_Extension_Theorem()) →
  assert(deg(α) | deg(K/F)) →
  assert(3 | 2^m) →
  lemma Three_Not_Divides_Power_Of_Two() {
    assert(∀n ∈ ℕ ⇒ 3 ∤ 2^n)
  } →
  apply(Three_Not_Divides_Power_Of_Two()) →
  assert(3 ∤ 2^m) ∧ assert(3 | 2^m) →
  contradiction() →
  conclude(α ∉ K)
}