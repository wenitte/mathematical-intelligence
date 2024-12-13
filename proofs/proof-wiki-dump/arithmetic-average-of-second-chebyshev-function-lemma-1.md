theorem ChebFuncLemma1() {
  assert(
    ∀x ∈ ℝ, x ≥ 1 ⇒ (x + 1)ln(x + 1) - xln(x) ≤ 2ln(x + 1)
  )
} ↔

proof ChebFuncLemma1() {
  setVar(f: [1,∞) → ℝ) →
  define(f(x) = (x + 1)ln(x + 1) - xln(x) - 2ln(x + 1)) →
  assert(f(1) = 2ln(2) - 1ln(1) - 2ln(2) = 0) →
  
  lemma DerivativeCalc() {
    assert(f'(x) = ln(x + 1) - ln(x) - 2/(x + 1)) →
    assert(f'(x) = ln(1 + 1/x) - 2/(x + 1)) →
    assert(ln(1 + 1/x) ≤ 1/x) →
    assert(f'(x) ≤ 1/x - 2/(x + 1)) →
    assert(f'(x) = (1 - x)/(x(x + 1))) →
    assert(∀x ≥ 1 ⇒ f'(x) ≤ 0)
  } →

  apply(DerivativeCalc()) →
  apply(NegativeDerivativeDecreasing) →
  assert(∀x ≥ 1 ⇒ f(x) ≤ f(1)) →
  assert(∀x ≥ 1 ⇒ f(x) ≤ 0) →
  assert(∀x ≥ 1 ⇒ (x + 1)ln(x + 1) - xln(x) - 2ln(x + 1) ≤ 0) →
  assert(∀x ≥ 1 ⇒ (x + 1)ln(x + 1) - xln(x) ≤ 2ln(x + 1))
}