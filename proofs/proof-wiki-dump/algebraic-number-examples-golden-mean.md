theorem Golden_Mean_Is_Algebraic() {
  assert(
    ∃p(x) ∈ ℤ[x] ∧ p(x) ≠ 0 ∧ 
    φ = (1 + √5)/2 ∧ 
    p(φ) = 0
  )
} ↔

proof Golden_Mean_Is_Algebraic() {
  setVar(p(x): x² - x - 1) →
  assert(p(x) ∈ ℤ[x]) →
  assert(p(x) ≠ 0) →
  lemma Golden_Mean_Quadratic() {
    assert(φ² - φ - 1 = 0)
  } →
  apply(Golden_Mean_Quadratic()) →
  assert(p(φ) = 0) →
  assert(∃p(x) ∈ ℤ[x]: p(x) ≠ 0 ∧ p(φ) = 0) →
  assert(φ is algebraic)
}