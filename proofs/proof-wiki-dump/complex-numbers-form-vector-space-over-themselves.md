theorem Complex_Vector_Space() {
  assert(
    ∀x,y,z ∈ ℂ ⇒ (ℂ,+,×) forms_vector_space()
  )
} ↔

proof Complex_Vector_Space() {
  setStruct(F: (ℂ,+,×)) →
  lemma Complex_Addition_Group() {
    assert((ℂ,+) is_abelian_group())
  } →
  
  lemma Distribution_Law() {
    assert(
      ∀x,y,z ∈ ℂ ⇒ (
        x×(y+z) = x×y + x×z ∧
        (y+z)×x = y×x + z×x
      )
    )
  } →
  
  lemma Associative_Law() {
    assert(
      ∀x,y,z ∈ ℂ ⇒ x×(y×z) = (x×y)×z
    )
  } →
  
  lemma Identity_Law() {
    assert(
      ∀x ∈ ℂ ⇒ 1×x = x
    )
  } →
  
  apply(Complex_Addition_Group()) ∧
  apply(Distribution_Law()) ∧
  apply(Associative_Law()) ∧
  apply(Identity_Law()) →
  
  assert(
    satisfy_vector_space_axioms(ℂ,+,×)
  )
}