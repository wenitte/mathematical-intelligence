theorem AbsValMult() {
  assert(
    ∀x,y ∈ ℝ ⇒ |xy| = |x||y|
  )
} ↔

proof AbsValMult() {
  setVar(x,y: ℝ) →
  assert(|xy| = √((xy)²)) by defAbsVal →
  assert(√((xy)²) = √(x²y²)) by algebraPower →
  assert(√(x²y²) = √(x²)√(y²)) by sqrtProd →
  assert(√(x²)√(y²) = |x||y|) by defAbsVal →
  conclude(|xy| = |x||y|)
}