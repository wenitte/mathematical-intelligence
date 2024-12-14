theorem Complement_Bottom_Boolean_Algebra() {
  given(S: BooleanAlgebra(∧, ∨, ¬)) →
  assert(¬⊥ = ⊤)
} ↔

proof Complement_Bottom_Boolean_Algebra() {
  lemma Bottom_Identity() {
    assert(∀x ∈ S: x ∨ ⊥ = x)
  } →
  lemma Top_Identity() {
    assert(∀x ∈ S: x ∧ ⊤ = x)
  } →
  
  assert(⊥ ∨ ¬⊥ = ⊤) →
  assert(⊥ ∨ ⊤ = ⊤) →
  
  apply(Bottom_Identity()) →
  
  lemma Uniqueness() {
    assert(⊥ ∧ ⊤ = ⊥) ∧
    assert(⊥ ∨ ¬⊥ = ⊤) →
    assert(¬⊥ = ⊤)
  } →
  
  apply(Uniqueness()) →
  assert(¬⊥ = ⊤)
}