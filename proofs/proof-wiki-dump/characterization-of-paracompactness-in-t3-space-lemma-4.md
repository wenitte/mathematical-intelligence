theorem ParacompactnessLemma4() {
  assert(
    ∀T = ⟨X,τ⟩ (TopologicalSpace(T) ∧
    ∀𝒱 (Cover(T,𝒱) ∧
    ∃𝒲 = {W ∈ τ : |{V ∈ 𝒱 : V ∩ W ≠ ∅}| < ∞} (Cover(T,𝒲) ∧
    ∃𝒜 (ClosedLocallyFiniteRefinement(𝒲,𝒜)))))
    →
    ∀A ∈ 𝒜 : |{V ∈ 𝒱 : V ∩ A ≠ ∅}| < ∞
  )
}

proof ParacompactnessLemma4() {
  setVar(A ∈ 𝒜) →
  
  lemma Refinement() {
    assert(∃W ∈ 𝒲 : A ⊆ W)
  } →
  
  setVar(W : Refinement()) →
  
  lemma DisjointSubsets() {
    assert(
      ∀V ∈ 𝒱 : (V ∩ A ≠ ∅ → V ∩ W ≠ ∅)
    )
  } →
  
  assert(
    {V ∈ 𝒱 : V ∩ A ≠ ∅} ⊆ {V ∈ 𝒱 : V ∩ W ≠ ∅}
  ) →
  
  lemma FiniteIntersection() {
    assert(|{V ∈ 𝒱 : V ∩ W ≠ ∅}| < ∞)
  } →
  
  apply(SubsetOfFiniteIsFinite) →
  
  assert(|{V ∈ 𝒱 : V ∩ A ≠ ∅}| < ∞) →
  
  conclude(
    ∀A ∈ 𝒜 : |{V ∈ 𝒱 : V ∩ A ≠ ∅}| < ∞
  )
}