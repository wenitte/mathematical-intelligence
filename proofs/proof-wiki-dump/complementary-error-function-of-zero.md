theorem Complementary_Error_Function_Zero() {
  assert(
    erfc(0) = 1
  )
} ↔

proof Complementary_Error_Function_Zero() {
  lemma Erfc_Definition() {
    assert(
      ∀x ∈ ℝ: erfc(x) = 1 - erf(x)
    )
  } →
  apply(Erfc_Definition()) →
  assert(erfc(0) = 1 - erf(0)) →
  lemma Erf_Zero() {
    assert(erf(0) = 0)
  } →
  apply(Erf_Zero()) →
  assert(erfc(0) = 1 - 0) →
  assert(erfc(0) = 1)
}