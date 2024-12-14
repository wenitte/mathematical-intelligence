theorem BoundedFunctionDifference() {
  let(S: Set, ℝ: RealNumbers) →
  let(f: S → ℝ, g: S → ℝ) →
  assert(
    isBounded(f) ∧ isBounded(g) →
    ∀s ∈ S: (f - g)(s) = f(s) - g(s) →
    isBounded(f - g)
  )
} ↔

proof BoundedFunctionDifference() {
  let(S: Set, f: S → ℝ, g: S → ℝ) →
  
  lemma PointwiseDiffIsAddNeg() {
    assert(f - g = f + (-g))
  } →
  
  lemma NegationBounded() {
    assert(isBounded(g) → isBounded(-g))
  } →
  
  lemma SumBounded() {
    assert(
      isBounded(f) ∧ isBounded(-g) →
      isBounded(f + (-g))
    )
  } →
  
  apply(PointwiseDiffIsAddNeg()) →
  apply(NegationBounded()) →
  apply(SumBounded()) →
  
  assert(
    f - g = f + (-g) ∧
    isBounded(-g) ∧
    isBounded(f + (-g)) →
    isBounded(f - g)
  )
}