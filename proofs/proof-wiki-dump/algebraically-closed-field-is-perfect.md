theorem AlgebraicallyClosed_is_Perfect() {
  assert(
    ∀F: Field ∧ isAlgebraicallyClosed(F) →
    isPerfect(F)
  )
}

proof AlgebraicallyClosed_is_Perfect() {
  setVar(F: Field) →
  assume(isAlgebraicallyClosed(F)) →
  
  lemma Extension_Equality() {
    assert(
      ∀E: Field ∧ isAlgebraicExtension(E, F) →
      E = F
    )
  } →
  
  lemma Field_is_Separable_Over_Self() {
    assert(
      ∀E: Field →
      isSeparable(E, E)
    )
  } →
  
  let(E: Field) →
  assume(isAlgebraicExtension(E, F)) →
  apply(Extension_Equality()) →
  assert(E = F) →
  apply(Field_is_Separable_Over_Self()) →
  assert(isSeparable(E, F)) →
  
  conclude(isPerfect(F))
}