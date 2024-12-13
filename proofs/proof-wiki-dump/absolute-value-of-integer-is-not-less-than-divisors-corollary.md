theorem Positive_Integer_Divides_LE() {
  assume(a,b ∈ ℤ_{>0}) ∧
  assume(a|b) →
  assert(
    a ≤ b
  )
} ↔

proof Positive_Integer_Divides_LE() {
  theorem AV_Not_Less_Than_Divisors() {
    assume(n,d ∈ ℤ) ∧
    assume(d|n) →
    assert(|d| ≤ |n|)
  } →
  
  setVar(a,b: ℤ_{>0}) →
  apply(AV_Not_Less_Than_Divisors()) →
  observe(a,b > 0) →
  observe(|a| = a ∧ |b| = b) →
  substitute(|a| ≤ |b| ↔ a ≤ b) →
  assert(a ≤ b)
}