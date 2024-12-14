theorem Complex_Fraction_Example() {
  assert(
    ((1 + 2i)²)/(1 - i) = -7/2 + (1/2)i
  )
} ↔

proof Complex_Fraction_Example() {
  letExpr(initial = ((1 + 2i)²)/(1 - i)) →
  assert(initial = (1 + 4i + 4i²)/(1 - i)) →
  applyDef(ImaginaryUnit: i² = -1) →
  assert((1 + 4i + 4i²)/(1 - i) = (1 + 4i - 4)/(1 - i)) →
  simplify() →
  assert((1 + 4i - 4)/(1 - i) = (-3 + 4i)/(1 - i)) →
  
  lemma ComplexConjugate() {
    assert(
      ∀z ∈ ℂ → z/(1 - i) = (z(1 + i))/((1 - i)(1 + i))
    )
  } →
  
  apply(ComplexConjugate: z = -3 + 4i) →
  assert((-3 + 4i)/(1 - i) = ((-3 + 4i)(1 + i))/((1 - i)(1 + i))) →
  distribute() →
  assert(((-3 + 4i)(1 + i))/((1 - i)(1 + i)) = (-3 - 3i + 4i + 4i²)/(1² + i²)) →
  applyDef(ImaginaryUnit) →
  simplify() →
  assert((-3 - 3i + 4i - 4)/(1 + 1) = (-7 + i)/2) →
  conclude((-7 + i)/2 = -7/2 + (1/2)i)
}