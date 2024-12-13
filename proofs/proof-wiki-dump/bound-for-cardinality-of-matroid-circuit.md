theorem Matroid_Circuit_Bound() {
  assert(
    ∀M(M = ⟨S,𝓘⟩ ∧ isMatroid(M)) ∧
    ∀C(C ⊆ S ∧ isCircuit(M,C)) ∧
    ∃ρ(ρ: 𝒫(S) → ℤ ∧ isRankFunction(M,ρ)) →
    |C| ≤ ρ(S) + 1
  )
}

proof Matroid_Circuit_Bound() {
  assert(isDependent(C)) →
  
  lemma NonEmpty() {
    assert(C ≠ ∅) by MatroidAxiom(I1)
  } →
  
  setVar(x ∈ C) →
  
  assert(C ∖ {x} ⊂ C) by SetDifferenceIsSubset() →
  
  lemma ProperSubsetIndependent() {
    assert(C ∖ {x} ∈ 𝓘) by ProperSubsetOfCircuitIsIndependent() ∧ MatroidAxiom(I1)
  } →
  
  assert(ρ(S) ≥ |C ∖ {x}|) by DefRankFunction() →
  assert(|C ∖ {x}| = |C| - |{x}|) by CardinalityOfSetDifference() →
  assert(|{x}| = 1) by CardinalityOfSingleton() →
  assert(ρ(S) ≥ |C| - 1) →
  assert(ρ(S) + 1 ≥ |C|)
}