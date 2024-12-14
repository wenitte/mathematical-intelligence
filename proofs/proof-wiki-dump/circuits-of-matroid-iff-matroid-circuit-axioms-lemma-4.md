theorem CircuitSubsetLemma() {
  assert(
    ∀S: FiniteSet ∧ 
    ∀C: Set[Set[S]] | C ≠ ∅ ∧
    satisfies(C, CircuitAxioms) ∧
    CircuitAxioms := {
      (C1): ∅ ∉ C,
      (C2): ∀C₁,C₂ ∈ C: C₁ ≠ C₂ → C₁ ⊈ C₂,
      (C4): ∀C₁,C₂ ∈ C: (C₁ ≠ C₂ ∧ z ∈ C₁ ∩ C₂ ∧ w ∈ C₁\C₂) → 
            ∃C₃ ∈ C: w ∈ C₃ ⊆ (C₁ ∪ C₂)\{z}
    } ∧
    θ(x₁,...,xq) := [
      ∀i ∈ {1,...,q}: θᵢ = {
        0 if ∃C ∈ C: xᵢ ∈ C ⊆ {x₁,...,xᵢ}
        1 otherwise
      }
    ] ∧
    t(x₁,...,xq) := ∑ᵢ₌₁q θ(x₁,...,xq)ᵢ ∧
    ρ: P(S) → ℤ | 
    ∀A ⊆ S: ρ(A) = {
      0 if A = ∅
      t(x₁,...,xq) if A = {x₁,...,xq}
    } ∧
    M := (S,I) isMatroid(ρ) ∧
    Cₘ := circuits(M)
    →
    ∀C ∈ Cₘ: ∃C' ∈ C: C' ⊆ C
  )
}

proof CircuitSubsetLemma() {
  setVar(C: Set[S] ∈ Cₘ) →
  assert(isDependent(C)) →
  assert(C ≠ ∅) by MatroidAxiom(I1) →
  
  setVar(x ∈ C) →
  assert(isIndependent(C\{x})) by ProperSubsetCircuitIndependent →
  
  assert(
    ρ(C) = |C| - 1 by RankCircuitLemma →
    ρ(C) = |C| - |{x}| by CardinalitySingleton →
    ρ(C) = |C\{x}| by CardinalitySetDifference →
    ρ(C) = ρ(C\{x}) by RankIndependentSubset
  ) →
  
  lemma RankExtensionEquiv() {
    assert(
      ∀X ⊆ S, ∀y ∈ S\X:
      ρ(X ∪ {y}) = ρ(X) ↔ ∃C ∈ C: y ∈ C ⊆ X ∪ {y}
    )
  } →
  
  apply(RankExtensionEquiv()) →
  assert(∃C' ∈ C: x ∈ C' ⊆ C)
}