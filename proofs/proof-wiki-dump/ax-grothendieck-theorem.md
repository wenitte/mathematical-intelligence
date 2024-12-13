theorem Ax_Grothendieck() {
  assert(
    ∀f: ℂⁿ → ℂⁿ ∧ 
    isPolynomialMap(f) ∧ 
    isInjective(f) ⇒
    isSurjective(f)
  )
} ↔

proof Ax_Grothendieck() {
  lemma FirstOrderRepresentation() {
    setVar(n: ℕ, d: ℕ) →
    assert(∀poly ∈ PolynomialMap(ℂⁿ) →
      degree(poly) ≤ d) →
    defineFormula(φ_i₁...iₙ: "injectivity condition") →
    assert(φ_i₁...iₙ ≡ 
      ∀x₁...xₙ∀y₁...yₙ((⋀ₖ≤ₙ Σ aₖ,(i₁,...,iₙ)x₁^i₁...xₙ^iₙ = 
      Σ aₖ,(i₁,...,iₙ)y₁^i₁...yₙ) → ⋀ᵢ₌₁ⁿ xᵢ = yᵢ)) →
    defineFormula(ψ_i₁...iₙ: "surjectivity condition") →
    assert(ψ_i₁...iₙ ≡ 
      ∀z₁...zₙ∃x₁...xₙ(⋀ₖ≤ₙ Σ aₖ,(i₁,...,iₙ)x₁^i₁...xₙ^iₙ = zₖ)) →
    assert(∀ₖ,i₁,...,iₙ aₖ,(i₁,...,iₙ)(φ_i₁...iₙ → ψ_i₁...iₙ))
  } →
  
  lemma CharacteristicP() {
    setVar(p: ℙ) →
    assert(∀k ∈ FiniteField(p) →
      (isInjective(f) ⇒ isSurjective(f))) →
    let(𝔽ᵖᵃˡᵍ = AlgebraicClosure(𝔽ₚ)) →
    assert(¬∃f: (𝔽ᵖᵃˡᵍ)ⁿ → (𝔽ᵖᵃˡᵍ)ⁿ → 
      (isInjective(f) ∧ ¬isSurjective(f))) →
    byContradiction() {
      assume(∃f: injective ∧ ¬surjective) →
      let(A = coefficients(f)) →
      let(k = FinitelyGeneratedField(A)) →
      assert(isFinite(k)) →
      assert(contradiction())
    }
  } →

  lemma LefschetzApplication() {
    apply(FirstOrderRepresentation()) →
    apply(CharacteristicP()) →
    apply(LefschetzPrinciple) →
    assert(theorem_holds_in(ℂ))
  } →
  
  conclude(Ax_Grothendieck)
}