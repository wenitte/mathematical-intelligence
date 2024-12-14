theorem LogBaseConversion() {
  assert(
    ∀x ∈ ℝ⁺ ⇒ (log₁₀(x) = ln(x)/ln(10) = ln(x)/(2.3025850929...)
  )
} ↔

proof LogBaseConversion() {
  setVar(x: ℝ⁺) →
  setVar(a, b: ℝ⁺) →
  
  lemma ChangeOfBase() {
    assert(∀x,a,b ∈ ℝ⁺ ⇒ logₐ(x) = logᵦ(x)/logᵦ(a))
  } →

  apply(ChangeOfBase()) →
  substitute(a = 10) →
  substitute(b = e) →
  assert(log₁₀(x) = ln(x)/ln(10)) →
  
  lemma NaturalLogDef() {
    assert(ln(x) ≡ logₑ(x))
  } →
  
  lemma Ln10Value() {
    assert(ln(10) = 2.3025850929...)
  } →
  
  apply(NaturalLogDef()) ∧
  apply(Ln10Value()) →
  assert(log₁₀(x) = ln(x)/ln(10) = ln(x)/(2.3025850929...))
}