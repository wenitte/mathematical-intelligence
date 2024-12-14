theorem Complex_Subtraction_Closure() {
  assert(
    ∀a,b ∈ ℂ ⇒ (a - b) ∈ ℂ
  )
} ↔

proof Complex_Subtraction_Closure() {
  setVar(a,b: ℂ) →
  
  lemma Subtraction_Definition() {
    assert(
      a - b ↔ a + (-b)
    )
  } →
  
  lemma Complex_Addition_Group() {
    assert(
      ∀x,y ∈ ℂ ⇒ (x + y) ∈ ℂ ∧
      ∀x ∈ ℂ ⇒ (-x) ∈ ℂ
    )
  } →
  
  apply(Subtraction_Definition()) →
  apply(Complex_Addition_Group()) →
  
  assert(
    a + (-b) ∈ ℂ
  ) →
  
  conclude(
    a - b ∈ ℂ
  )
}