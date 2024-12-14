theorem CompletionTheorem_NormedAlgebra() {
  let(GF ∈ {ℝ, ℂ})
  let(A: NormedAlgebra, ||·||: Norm)
  assert(
    ∃(Ã: BanachAlgebra, ||̃·||: Norm, φ: A → Ã) ∧
    isIsometricAlgebraHomomorphism(φ) ∧
    isDense(φ[A], Ã) ∧
    isUnique(Ã, ||̃·||) ∧
    (isUnital(A) → isUnital(Ã))
  )
} ↔

proof CompletionTheorem_NormedAlgebra() {
  # Existence Proof
  let(A**: SecondNormedDual(A)) →
  assert(isBanachSpace(A**)) →
  let(φ: A → A**, evaluationTransformation) →
  let(Ã = cl(φ[A])) →
  
  lemma DenseIsometry() {
    assert(isLinearIsometry(φ) ∧ isDense(φ[A], Ã))
  } →

  # Multiplicative Structure
  ∀(a,b ∈ cl(φ[A])) {
    ∃(sequences an,bn ∈ A) {
      assert(φ(an) → a ∧ φ(bn) → b) →
      define(a ∘ b = lim(n→∞) φ(an·bn))
    }
  } →

  lemma WellDefined() {
    assert(isCauchy(φ(an·bn))) →
    assert(isConvergent(φ(an·bn))) →
    assert(limIndependentOfSequences())
  } →

  lemma AlgebraProperties() {
    assert(isBilinear(∘)) →
    assert(isAlgebraHomomorphism(φ)) →
    assert(isAlgebraNorm(||̃·||))
  } →

  lemma UnitalPreservation() {
    assume(isUnital(A)) →
    let(1A: identityElement) →
    assert(||1A|| = 1) →
    assert(isIdentity(φ(1A), Ã))
  } →

  # Uniqueness Proof
  lemma Uniqueness() {
    let(A1,A2: BanachAlgebras) →
    let(φ1: A→A1, φ2: A→A2) →
    assert(isIsometricIsomorphism(φ2∘φ1⁻¹)) →
    assert(isUniqueExtension()) →
    assert(isAlgebraHomomorphism(ψ))
  }
}