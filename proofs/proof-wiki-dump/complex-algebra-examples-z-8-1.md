theorem ComplexFactorization() {
  assert(
    ∀z ∈ ℂ ⇒ z^8 + 1 = ∏_{k=0}^3 (z^2 - 2z cos((2k+1)π/8) + 1)
  )
}

proof ComplexFactorization() {
  setVar(z: ℂ) →
  
  lemma RootsOfUnity() {
    assert(z^8 + 1 = ∏_{k=0}^7 (z - (cos((2k+1)π/8) + i sin((2k+1)π/8))))
  } →

  lemma ComplexExpForm() {
    assert(∀k ⇒ cos(θ) + i sin(θ) = exp(iθ))
  } →

  apply(ComplexExpForm()) →
  assert(z^8 + 1 = ∏_{k=0}^7 (z - exp((2k+1)iπ/8))) →

  lemma ConjugatePairs() {
    assert(∀k ∈ [0,3] ⇒ 
      (z - exp((2k+1)iπ/8))(z - exp(-(2k+1)iπ/8)) = 
      z^2 - 2z cos((2k+1)π/8) + 1)
  } →

  apply(ConjugatePairs()) →
  assert(z^8 + 1 = ∏_{k=0}^3 (z^2 - 2z cos((2k+1)π/8) + 1)) →
  
  conclude()
}