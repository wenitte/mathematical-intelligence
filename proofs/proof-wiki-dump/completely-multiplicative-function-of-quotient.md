theorem CompleteMult_Quotient() {
  assert(
    ∀f: ℝ → ℝ, IsCompleteMult(f) ∧
    ∀x,y ∈ ℝ, y ≠ 0 ∧ f(y) ≠ 0 ⇒
    f(x/y) = f(x)/f(y)
  )
} ↔

proof CompleteMult_Quotient() {
  setVar(f: ℝ → ℝ, IsCompleteMult(f)) →
  setVar(x,y ∈ ℝ, y ≠ 0, f(y) ≠ 0) →
  setVar(z = x/y) →
  
  assert(z = x/y) →
  assert(x = yz) →
  
  assert(f(x) = f(y)f(z)) {
    apply(IsCompleteMult(f))
  } →
  
  assert(f(x)/f(y) = f(z)) {
    apply(DivisionProperty, f(y) ≠ 0)
  } →
  
  assert(f(x)/f(y) = f(x/y)) {
    substitute(z = x/y)
  }
}