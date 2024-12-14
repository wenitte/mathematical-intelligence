theorem ChangeOfBaseLogarithm() {
  assert(
    ∀a,b,x ∈ ℝ₊\{1} ⇒
    log_b(x) = log_a(x)/log_a(b)
  )
}

proof ChangeOfBaseLogarithm_1() {
  setVar(y: ℝ, z: ℝ) →
  assert(y = log_b(x) ↔ b^y = x) →
  assert(z = log_a(x) ↔ a^z = x) →
  assert(z = log_a(b^y)) →
  lemma LogPowerRule() {
    assert(log_a(b^y) = y·log_a(b))
  } →
  apply(LogPowerRule()) →
  assert(z = y·log_a(b)) →
  assert(log_a(x) = log_b(x)·log_a(b)) →
  assert(log_b(x) = log_a(x)/log_a(b))
}

proof ChangeOfBaseLogarithm_2() {
  setVar(y: ℝ, z: ℝ) →
  assert(b^y = a^z) →
  assert(b = a^(z/y)) →
  assert(log_a(b) = log_a(a^(z/y))) →
  lemma LogPowerRule() {
    assert(log_a(a^(z/y)) = (z/y)·log_a(a))
  } →
  apply(LogPowerRule()) →
  assert(log_a(b) = z/y) →
  assert(x = b^y ↔ y = log_b(x)) →
  assert(x = a^z ↔ z = log_a(x)) →
  substitute(y: log_b(x), z: log_a(x)) →
  assert(log_a(b) = log_a(x)/log_b(x)) →
  assert(log_b(x) = log_a(x)/log_a(b))
}