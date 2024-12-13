theorem Brahmagupta_Fibonacci_Identity() {
  assert(
    ∀a,b,c,d ∈ ℝ ⇒
    (a² + b²)(c² + d²) = (ac + bd)² + (ad - bc)²
  )
} ↔

proof Brahmagupta_Fibonacci_Identity() {
  setVar(a,b,c,d: ℝ) →
  
  assert((ac + bd)² + (ad - bc)²) →
  
  lemma SquareOfSum() {
    assert((ac + bd)² = (ac)² + 2(ac)(bd) + (bd)²)
  } →
  
  lemma SquareOfDiff() {
    assert((ad - bc)² = (ad)² - 2(ad)(bc) + (bc)²)
  } →
  
  apply(SquareOfSum(), SquareOfDiff()) →
  assert(((ac)² + 2(ac)(bd) + (bd)²) + ((ad)² - 2(ad)(bc) + (bc)²)) →
  
  lemma Distribute() {
    assert(
      (ac)² = a²c² ∧
      (bd)² = b²d² ∧
      (ad)² = a²d² ∧
      (bc)² = b²c²
    )
  } →
  
  apply(Distribute()) →
  assert(a²c² + 2abcd + b²d² + a²d² - 2abcd + b²c²) →
  
  lemma Combine_Like_Terms() {
    assert(
      2abcd - 2abcd = 0 ∧
      a²c² + a²d² + b²c² + b²d² = (a² + b²)(c² + d²)
    )
  } →
  
  apply(Combine_Like_Terms()) →
  assert((a² + b²)(c² + d²))
}