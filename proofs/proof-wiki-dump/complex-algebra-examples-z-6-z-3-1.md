theorem ComplexFactorization() {
  assert(
    ∀z ∈ ℂ ⇒ 
    z^6 + z^3 + 1 = (z^2 - 2z·cos(2π/9) + 1)(z^2 - 2z·cos(4π/9) + 1)(z^2 - 2z·cos(8π/9) + 1)
  )
} ↔

proof ComplexFactorization() {
  setVar(z: ℂ) →
  
  lemma GeometricSum() {
    assert(z^6 + z^3 + 1 = (z^9 - 1)/(z^3 - 1))
  } →

  lemma FactorZ9() {
    assert(
      z^9 - 1 = (z - 1)·∏_{k=1}^4 (z^2 - 2·cos(2πk/9)·z + 1)
    )
  } →

  lemma FactorZ3() {
    assert(
      z^3 - 1 = (z - 1)(z^2 - 2·cos(2π/3)·z + 1)
    ) →
    assert(
      z^3 - 1 = (z - 1)(z^2 - 2·cos(6π/9)·z + 1)
    )
  } →

  apply(GeometricSum()) ∧ apply(FactorZ9()) ∧ apply(FactorZ3()) →
  
  assert(
    (z^3 - 1)(z^6 + z^3 + 1) = 
    ((z - 1)(z^2 - 2·cos(6π/9)·z + 1))·
    ((z^2 - 2·cos(2π/9)·z + 1)(z^2 - 2·cos(4π/9)·z + 1)(z^2 - 2·cos(8π/9)·z + 1))
  ) →

  assert(
    z^6 + z^3 + 1 = 
    (z^2 - 2·cos(2π/9)·z + 1)(z^2 - 2·cos(4π/9)·z + 1)(z^2 - 2·cos(8π/9)·z + 1)
  )
}