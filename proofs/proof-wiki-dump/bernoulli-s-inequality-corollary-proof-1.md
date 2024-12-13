theorem Bernoulli_Inequality_Corollary() {
  assert(
    ∀x ∈ ℝ ∧ ∀n ∈ ℤ≥0 ∧ 
    (0 < x < 1) ⇒
    (1 - x)ⁿ ≥ 1 - nx
  )
} ↔

proof Bernoulli_Inequality_Corollary() {
  setVar(x: ℝ) →
  assume(0 < x < 1) →
  setVar(y: ℝ) →
  let(y = -x) →
  assert(y > -1) →
  
  lemma Bernoulli_Inequality() {
    assert(
      ∀n ∈ ℤ≥0 ∧ ∀y ∈ ℝ ∧ 
      (y > -1) ⇒
      (1 + y)ⁿ ≥ 1 + ny
    )
  } →
  
  apply(Bernoulli_Inequality()) →
  assert((1 + y)ⁿ ≥ 1 + ny) →
  substitute(y = -x) →
  assert((1 + (-x))ⁿ ≥ 1 + n(-x)) →
  assert((1 - x)ⁿ ≥ 1 - nx)
}