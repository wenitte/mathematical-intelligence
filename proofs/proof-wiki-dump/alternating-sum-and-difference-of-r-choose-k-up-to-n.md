theorem AlternatingSumBinomialCoefficients() {
  assert(
    ∀r ∈ ℝ, ∀n ∈ ℤ ⇒ 
    ∑(k≤n) (-1)^k * (r choose k) = (-1)^n * ((r-1) choose n)
  )
} ↔

proof AlternatingSumBinomialCoefficients_Direct() {
  setVar(r: ℝ, n: ℤ) →
  assert(∑(k≤n) (-1)^k * (r choose k)) →
  apply(NegatedUpperIndexBinomial) →
  assert(∑(k≤n) ((k-r-1) choose k)) →
  apply(SumBinomialCoefficients) →
  assert((-r+n choose n)) →
  apply(NegatedUpperIndexBinomial) →
  assert((-1)^n * ((r-1) choose n))
} ∧

proof AlternatingSumBinomialCoefficients_Inductive() {
  lemma BaseCase0() {
    assert(∑(k≤0) (-1)^k * (r choose k)) →
    assert((-1)^0 * (r choose 0)) →
    assert(1) →
    assert((-1)^0 * ((r-1) choose 0))
  } →

  lemma BaseCase1() {
    assert(∑(k≤1) (-1)^k * (r choose k)) →
    assert((-1)^0 * (r choose 0) + (-1)^1 * (r choose 1)) →
    assert(1 - r) →
    assert((-1)^1 * ((r-1) choose 1))
  } →

  lemma InductiveStep() {
    setVar(m: ℤ, m ≥ 1) →
    assume(∑(k≤m) (-1)^k * (r choose k) = (-1)^m * ((r-1) choose m)) →
    assert(∑(k≤m+1) (-1)^k * (r choose k)) →
    assert(∑(k≤m) (-1)^k * (r choose k) + (-1)^(m+1) * (r choose (m+1))) →
    assert((-1)^m * ((r-1) choose m) + (-1)^(m+1) * (r choose (m+1))) →
    assert((-1)^(m+1) * ((r choose (m+1)) - ((r-1) choose m))) →
    apply(PascalsRule) →
    assert((-1)^(m+1) * ((r-1) choose (m+1)))
  } →

  apply(BaseCase0()) ∧
  apply(BaseCase1()) ∧
  apply(InductiveStep()) →
  apply(MathematicalInduction) →
  assert(∀n ∈ ℤ≥0: ∑(k≤n) (-1)^k * (r choose k) = (-1)^n * ((r-1) choose n))
}