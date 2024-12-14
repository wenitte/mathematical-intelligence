theorem LnToLog10() {
  assert(
    ∀x ∈ ℝ^+ ⇒ ln(x) = (ln(10))(log₁₀(x)) = 2.30258509294...log₁₀(x)
  )
} ↔

proof LnToLog10() {
  setVar(x: ℝ^+) →
  lemma ChangeOfBase() {
    assert(
      ∀a,b,x ∈ ℝ^+ ⇒ log_a(x) = log_a(b)log_b(x)
    )
  } →
  apply(ChangeOfBase(), [a ↦ e, b ↦ 10]) →
  assert(ln(x) = ln(10)log₁₀(x)) →
  lemma NaturalLog10() {
    assert(ln(10) = 2.30258509294...)
  } →
  apply(NaturalLog10()) →
  assert(ln(x) = 2.30258509294...log₁₀(x))
}