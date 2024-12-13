theorem Field_Division_Addition() {
  assert(
    ∀F(Field(F)) ∧ ∀a,b,c,d ∈ F ∧ b ≠ 0 ∧ d ≠ 0 ⇒
    (a/b + c/d = (ad + bc)/(bd)) ∧
    (∀x,z ∈ F ⇒ x/z = x⋅z⁻¹)
  )
} ↔

proof Field_Division_Addition() {
  setVar(F: Field) →
  setVar(a,b,c,d: F) →
  assume(b ≠ 0 ∧ d ≠ 0) →
  
  lemma Field_Properties() {
    assert(
      Field(F) ⇒ DivisionRing(F) ∧ Commutative(F.×)
    )
  } →
  
  lemma DivisionRing_Properties() {
    assert(
      DivisionRing(F) ⇒ 
      RingWithUnity(F) ∧ 
      (∀x ∈ F ∧ x ≠ 0 ⇒ Unit(x))
    )
  } →
  
  apply(Field_Properties()) →
  apply(DivisionRing_Properties()) →
  
  theorem Division_Product_Addition() {
    assert(
      CommutativeRingWithUnity(F) ⇒
      a/b + c/d = (a⋅d + b⋅c)/(b⋅d)
    )
  } →
  
  apply(Division_Product_Addition()) →
  assert(a/b + c/d = (ad + bc)/(bd))
}