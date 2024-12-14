theorem Complex_Numbers_Integral_Domain() {
  assert(
    ∃S(S = ⟨ℂ,+,×⟩) ∧ IntegralDomain(S)
  )
}

proof Complex_Numbers_Integral_Domain() {
  lemma Complex_Numbers_Field() {
    assert(
      ∃S(S = ⟨ℂ,+,×⟩) ∧ Field(S)
    )
  } →
  
  lemma Field_Is_Integral_Domain() {
    assert(
      ∀S(Field(S) → IntegralDomain(S))
    )
  } →
  
  apply(Complex_Numbers_Field()) →
  apply(Field_Is_Integral_Domain()) →
  assert(IntegralDomain(⟨ℂ,+,×⟩))
}