theorem ChangeOfBaseLogarithm_Binary_Common() {
  assert(
    ∀x ∈ ℝ+ ∧ x ≠ 0 ⇒
    log₁₀(x) = lg(x) × log₁₀(2) = 0.301029995663981195213738... × lg(x)
  )
} ↔

proof ChangeOfBaseLogarithm_Binary_Common() {
  setVar(x: ℝ+) →
  
  lemma GeneralBaseChange() {
    assert(
      ∀a,b,x ∈ ℝ+ ∧ a,b ≠ 1 ⇒
      logₐ(x) = logₐ(b) × logᵦ(x)
    )
  } →
  
  apply(GeneralBaseChange(), [a=10, b=2]) →
  assert(log₁₀(x) = log₁₀(2) × lg(x)) →
  
  lemma Log10_2_Value() {
    assert(
      log₁₀(2) = 0.301029995663981195213738...
    )
  } →
  
  apply(Log10_2_Value()) →
  assert(log₁₀(x) = 0.301029995663981195213738... × lg(x)) →
  conclude()
}