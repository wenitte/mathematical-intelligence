theorem ChangeOfBaseLogTenToE() {
  assert(
    ∀x > 0 ∧ ∀e = euler_constant ⇒
    ln(x) = log₁₀(x)/log₁₀(e) = log₁₀(x)/0.4342944819...
  )
} ↔

proof ChangeOfBaseLogTenToE() {
  lemma LogarithmBaseChange() {
    assert(
      ∀x,a,b > 0 ⇒ logₐ(x) = logᵦ(x)/logᵦ(a)
    )
  } →
  
  setVar(x: ℝ⁺) →
  setVar(a: e) →
  setVar(b: 10) →
  
  apply(LogarithmBaseChange()) →
  assert(
    logₑ(x) = log₁₀(x)/log₁₀(e)
  ) →
  
  lemma CommonLogE() {
    assert(
      log₁₀(e) = 0.4342944819...
    )
  } →
  
  apply(CommonLogE()) →
  assert(
    ln(x) = log₁₀(x)/log₁₀(e) = log₁₀(x)/0.4342944819...
  )
}