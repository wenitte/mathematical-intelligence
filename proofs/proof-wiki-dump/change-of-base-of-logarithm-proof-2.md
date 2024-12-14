theorem ChangeOfBaseLogarithm() {
  assert(
    ∀x,a,b ∈ ℝ⁺ ∧ a≠1 ∧ b≠1 ⇒
    log_b(x) = log_a(x)/log_a(b)
  )
}

proof ChangeOfBaseLogarithm() {
  setVar(x,a,b: ℝ⁺) →
  assert(b^y = a^z) →
  
  lemma SolveForB() {
    assert(b = a^(z/y))
  } →
  
  apply(SolveForB()) →
  assert(log_a(b) = log_a(a^(z/y))) →
  assert(log_a(b) = (z/y)·log_a(a)) →
  assert(log_a(b) = z/y) ∧ {log_a(a) = 1} →
  
  lemma DefineX() {
    assert(x = b^y = a^z) →
    assert(y = log_b(x)) ∧ {Definition of logarithm} →
    assert(z = log_a(x)) ∧ {Definition of logarithm}
  } →
  
  apply(DefineX()) →
  assert(log_a(b) = log_a(x)/log_b(x)) →
  assert(log_b(x)·log_a(b) = log_a(x)) →
  assert(log_b(x) = log_a(x)/log_a(b))
}

lemma AlternativeFormula() {
  assert(
    ∀x,a,b ∈ ℝ⁺ ∧ a≠1 ∧ b≠1 ⇒
    log_b(x) = log_b(a)·log_a(x)
  ) ∧
  assert(log_a(b)·log_b(a) = 1)
}