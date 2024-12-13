theorem Arccsc_Reciprocal_Equals_Arcsin() {
  assert(
    ∀x ∈ ℝ where arccsc(1/x) is defined:
    arccsc(1/x) = arcsin(x)
  )
} ↔

proof Arccsc_Reciprocal_Equals_Arcsin() {
  setVar(y: ℝ) →
  assert(y = arccsc(1/x)) →
  
  lemma By_Arccsc_Definition() {
    assert(1/x = csc(y))
  } →
  
  lemma Csc_Sin_Reciprocal() {
    assert(csc(y) = 1/sin(y)) →
    assert(1/x = 1/sin(y)) →
    assert(x = sin(y))
  } →
  
  lemma By_Arcsin_Definition() {
    assert(y = arcsin(x))
  } →
  
  apply(By_Arccsc_Definition()) →
  apply(Csc_Sin_Reciprocal()) →
  apply(By_Arcsin_Definition()) →
  
  assert(arccsc(1/x) = y = arcsin(x)) →
  assert(arccsc(1/x) = arcsin(x))
}