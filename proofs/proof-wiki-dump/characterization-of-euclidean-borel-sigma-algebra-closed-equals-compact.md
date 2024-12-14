theorem ClosedEqualsCompactSigma() {
  assert(
    let(Cⁿ := {X | X ⊆ ℝⁿ ∧ X is closed}) ∧
    let(Kⁿ := {X | X ⊆ ℝⁿ ∧ X is compact}) →
    σ(Cⁿ) = σ(Kⁿ)
  )
} ↔

proof ClosedEqualsCompactSigma() {
  apply(HeineBorelTheorem) →
  assert(Kⁿ ⊆ Cⁿ) →
  apply(SigmaAlgebraPreservesSubset) →
  assert(σ(Kⁿ) ⊆ σ(Cⁿ)) →

  lemma ClosedBallCover() {
    setVar(n: ℕ) →
    let(Bₙ⁻(0) := {x ∈ ℝⁿ | ||x|| ≤ n}) →
    assert(ℝⁿ = ⋃_{n∈ℕ} Bₙ⁻(0))
  } →

  lemma ClosedSetDecomposition() {
    setVar(U: Cⁿ) →
    assert(U = U ∩ ℝⁿ) →
    apply(ClosedBallCover) →
    assert(U = U ∩ (⋃_{n∈ℕ} Bₙ⁻(0))) →
    apply(IntersectionDistributesOverUnion) →
    assert(U = ⋃_{n∈ℕ} (U ∩ Bₙ⁻(0))) →
    
    forAll(n: ℕ) {
      assert(U ∩ Bₙ⁻(0) is closed) →
      assert(Bₙ⁻(0) is bounded) →
      apply(HeineBorelTheorem) →
      assert(U ∩ Bₙ⁻(0) ∈ Kⁿ)
    } →
    assert(U ∈ σ(Kⁿ))
  } →

  assert(Cⁿ ⊆ σ(Kⁿ)) →
  apply(GeneratedSigmaAlgebraProperty) →
  assert(σ(Cⁿ) ⊆ σ(Kⁿ)) →
  
  conclude(σ(Cⁿ) = σ(Kⁿ))
}