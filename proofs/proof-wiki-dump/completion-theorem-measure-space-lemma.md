theorem Measure_Space_Well_Defined() {
  given(
    struct(X, Σ, μ: MeasureSpace) ∧
    NN := {N ⊆ X: ∃M ∈ Σ: μ(M) = 0 ∧ N ⊆ M} ∧
    Σ* := {E ∪ N: E ∈ Σ ∧ N ∈ NN} ∧
    μ̄: Σ* → ℝ̄≥0 ∧
    ∀E∈Σ ∀N∈NN: μ̄(E ∪ N) := μ(E)
  )
  assert(
    ∀E,F∈Σ ∀N,M∈NN: (E ∪ N = F ∪ M) → μ(E) = μ(F)
  )
} ↔

proof Measure_Space_Well_Defined() {
  setVar(E,F: Σ) →
  setVar(N,M: NN) →
  assume(E ∪ N = F ∪ M) →
  
  lemma Null_Sets_Existence() {
    assert(∃N₀,M₀∈Σ: 
      μ(N₀) = 0 ∧ N ⊆ N₀ ∧
      μ(M₀) = 0 ∧ M ⊆ M₀
    )
  } →
  
  assert(E ⊆ E ∪ N = F ∪ M ⊆ F ∪ M₀) →
  assert(μ(E) ≤ μ(F ∪ M₀) ≤ μ(F) + μ(M₀) = μ(F)) →
  
  assert(F ⊆ F ∪ M = E ∪ N ⊆ E ∪ N₀) →
  assert(μ(F) ≤ μ(E ∪ N₀) ≤ μ(E) + μ(N₀) = μ(E)) →
  
  conclude(μ(E) = μ(F))
}