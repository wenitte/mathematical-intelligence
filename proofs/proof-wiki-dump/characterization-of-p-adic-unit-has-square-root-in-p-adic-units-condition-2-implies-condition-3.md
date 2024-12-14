theorem PadicUnitSquareRoot_2to3() {
  assert(
    ∀p ∈ ℙ\{2} ∧
    ∀u ∈ ℤp× ∧
    let(u = c₀ + c₁p + c₂p² + ...) ∧
    isQuadraticResidue(c₀, p)
    ⇒
    ∃y ∈ ℤp: y² ≡ u (mod pℤp)
  )
} ↔

proof PadicUnitSquareRoot_2to3() {
  setVar(p: ℙ\{2}) →
  setVar(u: ℤp×) →
  setPadicExpansion(u: c₀ + c₁p + c₂p² + ...) →
  
  lemma PadicPartialSum() {
    assert(u ≡ c₀ (mod pℤp))
  } →
  
  apply(PadicPartialSum()) →
  
  assume(isQuadraticResidue(c₀, p)) →
  
  lemma QuadraticResidueDefinition() {
    assert(
      isQuadraticResidue(c₀, p) ⇒
      ∃x₀ ∈ ℤ: x₀² ≡ c₀ (mod pℤp)
    )
  } →
  
  apply(QuadraticResidueDefinition()) →
  
  setVar(x₀: ℤ | x₀² ≡ c₀ (mod pℤp)) →
  
  assert(x₀² ≡ c₀ ≡ u (mod pℤp)) →
  conclude(∃y ∈ ℤp: y² ≡ u (mod pℤp), y := x₀)
}