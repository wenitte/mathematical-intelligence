theorem Even_Power_Absolute_Value() {
  assert(
    ∀x ∈ ℝ ∧ ∀n ∈ ℤ ⇒ |x^(2n)| = x^(2n)
  )
} ↔

proof Even_Power_Absolute_Value() {
  setVar(x: ℝ) →
  setVar(n: ℤ) →
  lemma Even_Power_Non_Negative() {
    assert(
      ∀x ∈ ℝ ∧ ∀n ∈ ℤ ⇒ x^(2n) ≥ 0
    )
  } →
  apply(Even_Power_Non_Negative()) →
  lemma Absolute_Value_Definition() {
    assert(
      ∀a ∈ ℝ ⇒ (a ≥ 0 ⇒ |a| = a)
    )
  } →
  apply(Absolute_Value_Definition(), a = x^(2n)) →
  assert(|x^(2n)| = x^(2n))
}