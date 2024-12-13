theorem AbelsTestUniformConvergence() {
  assert(
    ∀K ⊂ ℂ[compact] ∧ 
    ∀{aₙ(z)}, {bₙ(z)} ∈ sequences(ℂ) ∧
    (∃M ∈ ℝ⁺: ∀n,z ∈ K: |aₙ(z)| ≤ M) ∧
    (∑|aₙ(z) - aₙ₊₁(z)| converges uniformly on K) ∧
    (∑bₙ(z) converges uniformly on K) →
    (∑aₙ(z)bₙ(z) converges uniformly on K)
  )
}

lemma AbelsSummationLemma() {
  assert(
    ∀{bₖ} ∈ sequences(ℂ) ∧
    let Bₖ = ∑ᵢ₌ₖ^∞ bᵢ →
    ∑ᵢ₌ₙ^{n+k} aᵢbᵢ = Bₙaₙ + ∑ᵢ₌ₙ^{n+k-1} Bᵢ₊₁(aᵢ₊₁ - aᵢ) - Bₙ₊ₖ₊₁aₙ₊ₖ
  )
}

proof AbelsTestUniformConvergence() {
  setVar(ε > 0) →
  
  lemma UniformBoundedness() {
    assert(∃N₁ ∈ ℕ: ∀n ≥ N₁, z ∈ K: |Bₙ(z)| ≤ ε)
  } →

  lemma SeriesConvergence() {
    assert(∃N₂ ∈ ℕ: ∀n ≥ N₂, k ∈ ℕ, z ∈ K:
      ∑ᵢ₌ₙ^{n+k} |aᵢ₊₁(z) - aᵢ(z)| ≤ ε)
  } →

  let N = max(N₁, N₂) →
  apply(AbelsSummationLemma()) →
  assert(
    ∀n ≥ N, k ∈ ℕ, z ∈ K:
    |∑ᵢ₌ₙ^{n+k} aᵢ(z)bᵢ(z)| ≤ 
    |Bₙ(z)aₙ(z)| + |∑ᵢ₌ₙ^{n+k-1} Bᵢ₊₁(z)(aᵢ₊₁(z) - aᵢ(z))| + |Bₙ₊ₖ₊₁(z)aₙ₊ₖ(z)| ≤
    Mε + Mε + Mε = 3Mε
  ) →
  conclude(
    ∑aₙ(z)bₙ(z) converges uniformly on K
  )
}