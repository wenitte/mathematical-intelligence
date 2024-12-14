theorem Complex_Conjugate_Difference() {
  assert(
    let(z₁ = 4 - 3i) ∧
    let(z₂ = -1 + 2i) ⇒
    conj(z₁) - conj(z₂) = 5 + 5i
  )
}

proof Complex_Conjugate_Difference() {
  setDef(z₁ = 4 - 3i) →
  setDef(z₂ = -1 + 2i) →
  
  assert(conj(z₁) - conj(z₂)) →
  assert(conj(4 - 3i) - conj(-1 + 2i)) →
  
  lemma Complex_Conjugate_Definition() {
    assert(
      ∀z ∈ ℂ: conj(a + bi) = a - bi
    )
  } →
  
  apply(Complex_Conjugate_Definition()) →
  assert((4 + 3i) - (-1 - 2i)) →
  
  lemma Complex_Subtraction() {
    assert(
      ∀a,b ∈ ℂ: a - b = (Re(a) - Re(b)) + (Im(a) - Im(b))i
    )
  } →
  
  apply(Complex_Subtraction()) →
  assert((4 - (-1)) + (3 - (-2))i) →
  assert(5 + 5i)
}