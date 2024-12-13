theorem AbsValueSimpleFunction() {
  let(X, Σ: MeasurableSpace)
  let(f: X → ℝ, SimpleFunction(f))
  assert(
    SimpleFunction(|f|)
  )
}

proof AbsValueSimpleFunction_1() {
  apply(SumPositiveNegativeParts) →
  assert(|f| = f⁺ + f⁻) →
  apply(PositivePartSimpleFunction) →
  assert(SimpleFunction(f⁺)) →
  apply(NegativePartSimpleFunction) →
  assert(SimpleFunction(f⁻)) →
  apply(PointwiseSumSimpleFunctions) →
  assert(SimpleFunction(|f|))
}

proof AbsValueSimpleFunction_2() {
  apply(StandardRepresentation) →
  assert(f = ∑(k=0 to n)[aₖχ_Eₖ]) →
  
  forall(x ∈ X) {
    assert(|f(x)| = |∑(k=0 to n)[aₖχ_Eₖ(x)|) ∧
    exists!(k)[x ∈ Eₖ]
  } →
  
  let(l: ℕ, x ∈ Eₗ) →
  assert(
    χ_Eₗ(x) = 0 ↔ k ≠ l ∧
    |f(x)| = |aₗ|
  ) →
  
  define(g: X → ℝ) {
    g(x) := ∑(k=0 to n)[|aₖ|χ_Eₖ(x)]
  } →
  
  assert(SimpleFunction(g)) →
  
  forall(x ∈ Eₗ) {
    assert(g(x) = |aₗ|)
  } →
  
  assert(g = |f|) →
  assert(SimpleFunction(|f|))
}