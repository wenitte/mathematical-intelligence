theorem Arccot_Reciprocal_Equals_Arctan() {
  assert(
    ∀x ∈ ℝ[defined] ⇒ arccot(1/x) = arctan(x)
  )
} ↔

proof Arccot_Reciprocal_Equals_Arctan() {
  setVar(y: ℝ) →
  assert(arccot(1/x) = y) →
  
  lemma Arccot_Definition() {
    assert(arccot(1/x) = y ↔ 1/x = cot(y))
  } →
  apply(Arccot_Definition()) →
  
  lemma Cot_Reciprocal_Tan() {
    assert(cot(y) = 1/tan(y))
  } →
  apply(Cot_Reciprocal_Tan()) →
  assert(1/x = 1/tan(y)) →
  assert(x = tan(y)) →
  
  lemma Arctan_Definition() {
    assert(x = tan(y) ↔ arctan(x) = y)
  } →
  apply(Arctan_Definition()) →
  
  assert(y = arctan(x)) →
  assert(arccot(1/x) = arctan(x))
}