theorem ComplexDotProduct_Example() {
  let z₁ = 3 - 4i
  let z₂ = -4 + 3i
  assert(
    z₁ ∘ z₂ = -24
  )
} ↔

proof ComplexDotProduct_Example_Method1() {
  assert(z₁ ∘ z₂) →
  apply(DotProduct_Def3()) →
  assert(ℜ(z̄₁z₂)) →
  apply(ComplexConjugate_Def()) →
  assert(ℜ((3 + 4i)(-4 + 3i))) →
  apply(ComplexMultiplication_Def()) →
  assert(ℜ(3·(-4) - 4·3 + (3·3 + 4·(-4))i)) →
  assert(-12 + -12) →
  assert(-24)
} ↔

proof ComplexDotProduct_Example_Method2() {
  assert(z₁ ∘ z₂) →
  assert((3 - 4i) ∘ (-4 + 3i)) →
  apply(DotProduct_Def1()) →
  assert(3·(-4) + (-4)·3) →
  assert(-12 + -12) →
  assert(-24)
}