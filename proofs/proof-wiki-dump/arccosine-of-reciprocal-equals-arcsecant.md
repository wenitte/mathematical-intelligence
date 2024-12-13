theorem Arccosine_Reciprocal_Equals_Arcsecant() {
  assert(
    ∀x ∈ Domain(arcsec) ⇒ 
    arccos(1/x) = arcsec(x)
  )
} ↔

proof Arccosine_Reciprocal_Equals_Arcsecant() {
  setVar(x ∈ Domain(arcsec)) →
  setVar(y ∈ ℝ) →
  
  assert(arccos(1/x) = y) →
  
  lemma Arccos_Definition() {
    assert(
      [arccos(1/x) = y] ↔ 
      [1/x = cos(y)]
    )
  } →
  
  apply(Arccos_Definition()) →
  
  lemma Secant_Reciprocal_Cosine() {
    assert(
      [1/x = cos(y)] ↔ 
      [x = sec(y)]
    )
  } →
  
  apply(Secant_Reciprocal_Cosine()) →
  
  lemma Arcsec_Definition() {
    assert(
      [x = sec(y)] ↔ 
      [arcsec(x) = y]
    )
  } →
  
  apply(Arcsec_Definition()) →
  
  assert(y = arcsec(x)) →
  assert(arccos(1/x) = arcsec(x))
}