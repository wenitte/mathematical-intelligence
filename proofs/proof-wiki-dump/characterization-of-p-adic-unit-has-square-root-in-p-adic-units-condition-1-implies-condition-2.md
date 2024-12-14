theorem PadicUnitSquareRoot_1to2() {
  assert(
    ∀p ∈ Primes ∧ p ≠ 2 ∧
    ∀u ∈ Zₚ× ∧
    let(u = c₀ + c₁p + c₂p² + ...) ∧
    ∃x ∈ Zₚ× : x² = u
    ⇒
    isQuadraticResidue(c₀, p)
  )
} ↔

proof PadicUnitSquareRoot_1to2() {
  setVar(p: Prime, p ≠ 2) →
  setVar(u: Zₚ×) →
  setVar(x: Zₚ×, x² = u) →
  
  lemma PartialSumCongruence() {
    assert(
      u ≡ c₀ (mod pZₚ)
    )
  } →
  
  apply(PartialSumCongruence()) →
  assert(x² ≡ c₀ (mod pZₚ)) →
  
  setVar(x = x₀ + x₁p + x₂p² + x₃p³ + ...) →
  
  lemma PartialSumCongruence2() {
    assert(
      x ≡ x₀ (mod pZₚ)
    )
  } →
  
  apply(PartialSumCongruence2()) →
  assert(x₀² ≡ x² ≡ c₀ (mod pZₚ)) →
  
  lemma QuadraticResidueDefinition() {
    assert(
      ∃y ∈ Zₚ : y² ≡ c₀ (mod p) ⇒ isQuadraticResidue(c₀, p)
    )
  } →
  
  apply(QuadraticResidueDefinition(), y = x₀) →
  assert(isQuadraticResidue(c₀, p))
}