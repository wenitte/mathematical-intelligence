theorem Arcsecant_Reciprocal_equals_Arccosine() {
  assert(
    ∀x ∈ Dom(arcsec) ↔ arcsec(1/x) = arccos(x)
  )
} ↔

proof Arcsecant_Reciprocal_equals_Arccosine() {
  setVar(y: ℝ) →
  assert(arcsec(1/x) = y) →
  lemma Arcsecant_Definition() {
    assert(arcsec(1/x) = y ↔ 1/x = sec(y))
  } →
  apply(Arcsecant_Definition()) →
  lemma Secant_Cosine_Reciprocal() {
    assert(1/x = sec(y) ↔ x = cos(y))
  } →
  apply(Secant_Cosine_Reciprocal()) →
  lemma Arccosine_Definition() {
    assert(x = cos(y) ↔ arccos(x) = y)
  } →
  apply(Arccosine_Definition()) →
  assert(arcsec(1/x) = y ↔ arccos(x) = y) →
  assert(arcsec(1/x) = arccos(x))
}