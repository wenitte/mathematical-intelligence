theorem Arcsine_Reciprocal_Equals_Arccosecant() {
  assert(
    ∀x ∈ Domain(arcsin(1/x)) ⇒ arcsin(1/x) = arccsc(x)
  )
} ↔

proof Arcsine_Reciprocal_Equals_Arccosecant() {
  setVar(x ∈ Domain(arcsin(1/x))) →
  setVar(y = arcsin(1/x)) →
  
  lemma Step1() {
    assert(y = arcsin(1/x) ↔ sin(y) = 1/x)
    by(Definition_of_Arcsine)
  } →
  
  lemma Step2() {
    assert(sin(y) = 1/x ↔ x = 1/sin(y))
    by(Reciprocal_Property)
  } →
  
  lemma Step3() {
    assert(x = 1/sin(y) ↔ x = csc(y))
    by(Definition_of_Cosecant)
  } →
  
  lemma Step4() {
    assert(x = csc(y) ↔ y = arccsc(x))
    by(Definition_of_Arccosecant)
  } →
  
  apply(Step1) →
  apply(Step2) →
  apply(Step3) →
  apply(Step4) →
  
  assert(arcsin(1/x) = arccsc(x))
}