theorem SpectrumCharacterization() {
  let(H: HilbertSpace(ℂ)) →
  let(T: BoundedLinearOperator(H → H)) →
  let(σ(T): Spectrum(T)) →
  assert(
    ∀λ ∈ ℂ: λ ∈ σ(T) ↔ (
      isApproxEigenvalue(λ, T) ∨ 
      isEigenvalue(λ̄, T*)
    )
  )
}

proof SpectrumCharacterization() {
  // Sufficient Condition
  block SufficientPart {
    // Case 1: λ is approximate eigenvalue
    assume(isApproxEigenvalue(λ, T)) →
    exists(sequence(xₙ) ∈ H, n ∈ ℕ) →
    assert(∀n ∈ ℕ: ‖xₙ‖ = 1) ∧
    assert(lim(n→∞) ‖Txₙ - λxₙ‖ = 0) →
    apply(CharacterizationInjective()) →
    assert(¬isInjective(T-λI) ∨ ¬isClosed(Range(T-λI))) →
    assert(¬isClosed(Range(T-λI)) → Range(T-λI) ≠ H) →
    conclude(λ ∈ σ(T))

    // Case 2: λ̄ is eigenvalue of T*
    assume(isEigenvalue(λ̄, T*)) →
    assert(ker(T*-λ̄I) ≠ {0}) →
    apply(KernelOrthocomplementImage()) →
    assert(ker(T*-λ̄I) = Range(T-λI)⊥) →
    apply(LinearSubspaceDense()) →
    assert(¬isDense(Range(T-λI))) →
    assert(Range(T-λI) ≠ H) →
    conclude(λ ∈ σ(T))
  }

  // Necessary Condition
  block NecessaryPart {
    assume(λ ∈ σ(T)) →
    apply(SpectrumAdjoint()) →
    assert(λ̄ ∈ σ(T*)) →
    assume(¬isApproxEigenvalue(λ, T)) →
    apply(CharacterizationInjective()) →
    assert(isInjective(T-λI) ∧ isClosed(Range(T-λI))) →
    apply(KernelOrthocomplementImage()) →
    assert(ker(T-λI) = {0}) →
    assert(Range(T*-λ̄I) isDense) →
    assert(Range(T*-λ̄I) = H) →
    
    // Contradiction part
    assume(ker(T*-λ̄I) = {0}) →
    assert(isBijective(T*-λ̄I)) →
    apply(BanachIsomorphism()) →
    assert(isInvertible(T*-λ̄I)) →
    contradiction(λ ∈ σ(T)) →
    conclude(ker(T*-λ̄I) ≠ {0}) →
    conclude(isEigenvalue(λ̄, T*))
  }
}

corollary SelfAdjointSpectrum() {
  let(T: SelfAdjointBoundedLinearOperator(H → H)) →
  assert(
    ∀λ ∈ σ(T) ↔ isApproxEigenvalue(λ, T)
  )
}