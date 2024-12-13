theorem BernoulliInequality() {
  assert(
    ∀x ∈ ℝ, ∀n ∈ ℤ≥0 : 
    (x > -1) → ((1 + x)^n ≥ 1 + nx)
  )
} ↔

proof BernoulliInequality() {
  setVar(x: ℝ, n: ℤ≥0) →
  assume(x > -1) →
  let(y = 1 + x) →
  assert(y > 0) →
  assert((1 + x)^n = 1 + (y^n - 1)) →
  
  lemma Case1() {
    assume(y ≥ 1) →
    apply(GeometricSequenceSum) →
    assert(y^n - 1 = (y - 1)∑_{k=0}^{n-1} y^k) →
    assert(∑_{k=0}^{n-1} y^k ≥ n) →
    assert(y^n - 1 ≥ n(y - 1)) →
    assert(y^n - 1 ≥ nx)
  } →
  
  lemma Case2() {
    assume(0 < y < 1) →
    apply(GeometricSequenceSum) →
    assert(y^n - 1 = -(1 - y)∑_{k=0}^{n-1} y^k) →
    assert(∑_{k=0}^{n-1} y^k ≤ n) →
    assert(y^n - 1 ≥ -n(1 - y)) →
    assert(y^n - 1 ≥ nx)
  } →
  
  apply(Case1() ∨ Case2()) →
  assert((1 + x)^n ≥ 1 + nx)
}