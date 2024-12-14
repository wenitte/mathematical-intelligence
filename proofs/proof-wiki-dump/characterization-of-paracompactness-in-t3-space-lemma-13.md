theorem Paracompactness_Lemma_13() {
  let T = ⟨X, τ⟩: TopologicalSpace
  let τ_X×X: ProductTopology(X × X)
  let V: Neighborhood(Δ_X, τ_X×X)
  
  assert(
    ∀C(OpenCover(T) → Even(C)) →
    ∃{V_n}_{n∈ℕ}(
      (V_0 = V) ∧
      ∀n∈ℕ_{>0}(Symmetric(V_n)) ∧
      ∀n∈ℕ_{>0}(V_n ∘ V_n ⊆ V_{n-1})
    )
  )
} ↔

proof Paracompactness_Lemma_13() {
  lemma Lemma_20() {
    let N: Neighborhood(Δ_X, τ_X×X)
    assert(
      ∃W(OpenNeighborhood(W, Δ_X, τ_X×X) ∧
         Symmetric(W) ∧
         W ∘ W ⊆ N)
    )
  } →

  setVar(𝓝𝓝 = {U ⊆ X × X | Neighborhood(U, Δ_X, τ_X×X)}) →
  
  apply(ZermeloWellOrdering) →
  assert(∃≤(WellOrdering(≤, 𝓝𝓝))) →
  
  define(g: 𝓝𝓝 → 𝓝𝓝,
    ∀U∈𝓝𝓝(g(U) = min{V∈𝓝𝓝 | V∘V⊆U ∧ Symmetric(V)})) →
  
  apply(Lemma_20) →
  assert(∀U∈𝓝𝓝({V∈𝓝𝓝 | V∘V⊆U ∧ Symmetric(V)} ≠ ∅)) →
  
  apply(RecursivePrinciple) →
  assert(∃!{V_n}_{n∈ℕ}(
    (V_0 = V) ∧
    ∀n∈ℕ_{>0}(Symmetric(V_n)) ∧
    ∀n∈ℕ_{>0}(V_n ∘ V_n ⊆ V_{n-1})
  ))
}