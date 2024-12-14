theorem ChangeOfBaseLogarithm_Base_e_to_10() {
  assert(
    ∀x ∈ ℝ⁺ ⇒
    (log₁₀(x) = log₁₀(e)·ln(x)) ∧
    (log₁₀(x) = 0.4342944819...·ln(x))
  )
} ↔

proof ChangeOfBaseLogarithm_Base_e_to_10() {
  setVar(x: ℝ⁺) →
  setVar(a: ℝ⁺) →
  setVar(b: ℝ⁺) →

  lemma GeneralChangeOfBase() {
    assert(
      ∀x,a,b ∈ ℝ⁺ ⇒ logₐ(x) = logₐ(b)·logᵦ(x)
    )
  } →

  let(a = 10) →
  let(b = e) →
  
  apply(GeneralChangeOfBase()) →
  assert(log₁₀(x) = log₁₀(e)·ln(x)) →
  
  lemma CommonLogE() {
    assert(log₁₀(e) = 0.4342944819...)
  } →
  
  apply(CommonLogE()) →
  assert(log₁₀(x) = 0.4342944819...·ln(x))
}