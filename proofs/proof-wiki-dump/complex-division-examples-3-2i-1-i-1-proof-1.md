theorem Complex_Division() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = 3 - 2i ∧ z₂ = -1 + i →
    z₁/z₂ = (-5 - i)/2
  )
} ↔

proof Complex_Division() {
  setVar(z₁: ℂ = 3 - 2i) →
  setVar(z₂: ℂ = -1 + i) →
  
  assert(z₁/z₂ = z₁/z₂ × (z₂*/z₂*)) →
  
  lemma Conjugate_Division() {
    assert(
      ∀a,b ∈ ℂ →
      a/b = (a × b*)/(b × b*)
      where b* is complex conjugate of b
    )
  } →
  
  apply(Conjugate_Division()) →
  assert(z₁/z₂ = ((3 - 2i)(-1 - i))/(-1 + i)(-1 - i)) →
  
  lemma Complex_Multiplication() {
    assert(
      (a + bi)(c + di) = (ac - bd) + (ad + bc)i
    )
  } →
  
  apply(Complex_Multiplication()) →
  assert(
    numerator = (-3 - i + 2i²) ∧
    denominator = ((-1)² + 1²) = 2
  ) →
  
  lemma Complex_i_Square() {
    assert(i² = -1)
  } →
  
  apply(Complex_i_Square()) →
  assert((-3 - i + 2(-1))/2 = (-5 - i)/2)
}