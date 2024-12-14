theorem BorelSigmaAlgebraCharacterization() {
  assert(
    ∀n ∈ ℕ ∧ 
    let(𝓞ⁿ: collection_of(open_subsets(ℝⁿ))) ∧
    let(𝓒ⁿ: collection_of(closed_subsets(ℝⁿ))) ∧
    let(𝓚ⁿ: collection_of(compact_subsets(ℝⁿ))) ∧
    let(𝓙ₕₒⁿ: collection_of(half_open_rectangles(ℝⁿ))) ∧
    let(𝓙ₕₒ,ᵣₐₜⁿ: collection_of(half_open_rectangles_rational(ℝⁿ))) →
    𝓑(ℝⁿ) = σ(𝓞ⁿ) = σ(𝓒ⁿ) = σ(𝓚ⁿ) = σ(𝓙ₕₒⁿ) = σ(𝓙ₕₒ,ᵣₐₜⁿ)
  )
}

proof BorelSigmaAlgebraCharacterization() {
  // By definition
  assert(𝓑(ℝⁿ) = σ(𝓞ⁿ)) →

  // Split into four subproofs
  lemma Equality1() {
    assert(closed_set ↔ complement(open_set)) →
    apply(SigmaAlgebraGeneratedByComplements) →
    assert(σ(𝓞ⁿ) = σ(𝓒ⁿ))
  } →

  lemma Equality2() {
    apply(HeineBorelTheorem) →
    assert(𝓚ⁿ ⊆ 𝓒ⁿ) →
    assert(σ(𝓚ⁿ) ⊆ σ(𝓒ⁿ)) →
    
    setVar(Bₙ⁻(0): closed_ball(0,n)) →
    assert(ℝⁿ = ∪{Bₙ⁻(0): n ∈ ℕ}) →
    
    ∀U ∈ 𝓒ⁿ →
    assert(U = U ∩ ℝⁿ = ∪{U ∩ Bₙ⁻(0): n ∈ ℕ}) →
    assert(U ∩ Bₙ⁻(0) ∈ 𝓚ⁿ) →
    assert(𝓒ⁿ ⊆ σ(𝓚ⁿ)) →
    assert(σ(𝓒ⁿ) ⊆ σ(𝓚ⁿ))
  } →

  lemma Equality3() {
    ∀a,b ∈ ℝⁿ →
    assert(horectr(a,b) = (←,b)_open ∩ [a,→)_closed) →
    assert(horectr(a,b) ∈ σ(𝓞ⁿ)) →
    assert(σ(𝓙ₕₒⁿ) ⊆ σ(𝓞ⁿ)) →
    
    // Construction of covering
    setVar(Sₖ: {horectr(2⁻ᵏj, 2⁻ᵏ(j+1)): j ∈ ℤⁿ}) →
    assert(∪{Sₖ: k ∈ ℕ} = ℝⁿ) →
    assert(∀k: Sₖ ⊆ 𝓙ₕₒⁿ) →
    assert(σ(𝓞ⁿ) ⊆ σ(𝓙ₕₒⁿ))
  } →

  lemma Equality4() {
    assert(σ(𝓙ₕₒ,ᵣₐₜⁿ) ⊆ σ(𝓙ₕₒⁿ)) →
    
    ∀a,b ∈ ℝⁿ →
    setVar(aₘ: rational_sequence_increasing(a)) →
    setVar(bₘ: rational_sequence_increasing(b)) →
    assert(∩{horectr(aₘ,b'): m ∈ ℕ} = horectr(a,b')) →
    assert(∪{horectr(a',bₘ): m ∈ ℕ} = horectr(a',b)) →
    assert(horectr(a,b) ∈ σ(𝓙ₕₒ,ᵣₐₜⁿ)) →
    assert(𝓙ₕₒⁿ ⊆ σ(𝓙ₕₒ,ᵣₐₜⁿ)) →
    assert(σ(𝓙ₕₒⁿ) = σ(𝓙ₕₒ,ᵣₐₜⁿ))
  }
}