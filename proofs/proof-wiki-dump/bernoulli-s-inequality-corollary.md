theorem BernoulliInequality_Corollary() {
  assert(
    ∀x ∈ ℝ ∧ (0 < x < 1) ∧
    ∀n ∈ ℤ≥0 ⇒
    (1 - x)ⁿ ≥ 1 - nx
  )
} ↔

proof BernoulliInequality_Corollary_Method1() {
  setVar(x: ℝ, 0 < x < 1) →
  setVar(y: ℝ, y = -x) →
  assert(y > -1) →
  apply(BernoulliInequality(y, n)) →
  assert((1 + y)ⁿ ≥ 1 + ny) →
  substitute(y = -x) →
  assert((1 + (-x))ⁿ ≥ 1 + n(-x)) →
  assert((1 - x)ⁿ ≥ 1 - nx)
} ↔

proof BernoulliInequality_Corollary_Method2() {
  setVar(x: ℝ, 0 < x < 1) →
  setVar(n: ℤ≥0) →
  setVar(P(n): Proposition, P(n) ↔ (1 - x)ⁿ ≥ 1 - nx) →
  
  lemma BaseCase() {
    assert(P(0)) →
    assert((1 - x)⁰ = 1 ≥ 1 - 0x = 1)
  } →

  lemma InductiveStep() {
    setVar(k: ℤ≥0) →
    assume(P(k)) →
    assert((1 - x)ᵏ ≥ 1 - kx) →
    assert((1 - x)ᵏ⁺¹ = (1 - x)ᵏ(1 - x)) →
    assert((1 - x)ᵏ⁺¹ ≥ (1 - kx)(1 - x)) →
    assert((1 - kx)(1 - x) = 1 - (k+1)x + kx²) →
    assert(1 - (k+1)x + kx² ≥ 1 - (k+1)x) →
    conclude(P(k+1))
  } →

  apply(MathematicalInduction(P(n))) →
  assert(∀n ∈ ℤ≥0: P(n))
}