theorem Change_Base_Log_10_to_2() {
  assert(
    ∀x ∈ ℝ⁺ ∧
    let log₁₀(x) := CommonLog(x) ∧
    let lg(x) := BinaryLog(x) →
    lg(x) = log₁₀(x)/log₁₀(2) = log₁₀(x)/0.30102999566398119521373889...
  )
} ↔

proof Change_Base_Log_10_to_2() {
  setVar(x: ℝ⁺) →
  
  lemma ChangeOfBase() {
    assert(
      ∀x,a,b ∈ ℝ⁺ →
      logₐ(x) = logᵦ(x)/logᵦ(a)
    )
  } →

  apply(ChangeOfBase()) →
  substitute(a: 2, b: 10) →
  assert(
    lg(x) = log₁₀(x)/log₁₀(2)
  ) →

  lemma Log10_of_2() {
    assert(
      log₁₀(2) = 0.30102999566398119521373889...
    )
  } →

  apply(Log10_of_2()) →
  assert(
    lg(x) = log₁₀(x)/0.30102999566398119521373889...
  )
}