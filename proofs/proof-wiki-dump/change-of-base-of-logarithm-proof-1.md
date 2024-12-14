theorem ChangeOfBaseLogRule() {
  assert(
    ∀x,a,b ∈ ℝ⁺ ⇒ (log_b(x) = log_a(x)/log_a(b))
  )
} ↔

proof ChangeOfBaseLogRule() {
  setVar(x,a,b: ℝ⁺) →
  setVar(y: ℝ) →
  assert(y = log_b(x) ↔ b^y = x) →
  setVar(z: ℝ) →
  assert(z = log_a(x) ↔ a^z = x) →
  assert(z = log_a(x)) →
  assert(z = log_a(b^y)) → 
  lemma LogPowerRule() {
    assert(log_a(b^y) = y·log_a(b))
  } →
  apply(LogPowerRule()) →
  assert(z = y·log_a(b)) →
  assert(y = z/log_a(b)) →
  substitute(y = log_b(x)) →
  substitute(z = log_a(x)) →
  assert(log_b(x) = log_a(x)/log_a(b))
}