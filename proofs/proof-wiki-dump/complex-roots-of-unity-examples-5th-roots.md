theorem ComplexFifthRoots() {
  assert(
    ∀z ∈ ℂ: z^5 = 1 ↔ z ∈ {e^(2πik/5): k ∈ {0,1,2,3,4}}
  )
}

proof ComplexFifthRoots() {
  let U₅ := {z ∈ ℂ: z^5 = 1} →
  
  // First root (k=0)
  assert(e^(0) = 1) →
  
  // Second root (k=1)
  let α := e^(2πi/5) →
  assert(α = cos(2π/5) + i·sin(2π/5)) →
  assert(α = (√5 - 1)/4 + i·√(10 + 2√5)/4) →
  
  // Third root (k=2)
  assert(α² = e^(4πi/5)) →
  assert(α² = -(1 + √5)/4 + i·√(5/8 - √5/8)) →
  
  // Fourth root (k=3)
  lemma ConjugatePairs() {
    assert(∀k ∈ ℤ: e^(2πik/5) = conj(e^(2πi(5-k)/5)))
  } →
  apply(ConjugatePairs()) →
  assert(α³ = conj(α²)) →
  assert(α³ = -(1 + √5)/4 - i·√(5/8 - √5/8)) →
  
  // Fifth root (k=4)
  apply(ConjugatePairs()) →
  assert(α⁴ = conj(α)) →
  assert(α⁴ = (√5 - 1)/4 - i·√(10 + 2√5)/4) →
  
  // Verification
  assert(
    U₅ = {1, 
          (√5 - 1)/4 + i·√(10 + 2√5)/4,
          -(1 + √5)/4 + i·√(5/8 - √5/8),
          -(1 + √5)/4 - i·√(5/8 - √5/8),
          (√5 - 1)/4 - i·√(10 + 2√5)/4}
  )
}