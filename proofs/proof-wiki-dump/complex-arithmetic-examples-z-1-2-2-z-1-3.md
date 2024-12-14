theorem Complex_Arithmetic_Example() {
  assert(
    let z₁ = 1 - i →
    z₁² + 2z₁ - 3 = -1 - 4i
  )
} ↔

proof Complex_Arithmetic_Example() {
  setVar(z₁: ℂ) →
  assert(z₁ = 1 - i) →
  
  expand(z₁² + 2z₁ - 3) →
  assert(z₁² + 2z₁ - 3 = (1 - i)² + 2(1 - i) - 3) →
  
  lemma Square_Binomial() {
    assert((1 - i)² = 1 - 2i + i²) ∧
    assert(i² = -1)
  } →
  
  apply(Square_Binomial()) →
  assert((1 - 2i + i²) + 2(1 - i) - 3) →
  
  substitute(i² = -1) →
  assert((1 - 2i - 1) + (2 - 2i) - 3) →
  
  combine_like_terms() →
  assert(-2i + 2 - 2i - 3) →
  
  simplify() →
  assert(-1 - 4i)
}