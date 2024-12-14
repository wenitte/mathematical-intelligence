theorem CharacterizationParacompactness_5_6() {
  assert(
    ∀T[TopologicalSpace] = ⟨X,τ⟩ →
    (∀C[OpenCover(T)] → ∃R[OpenRefinement(C)] ∧ isσDiscrete(R)) →
    (∀C[OpenCover(T)] → ∃S[OpenRefinement(C)] ∧ isσLocallyFinite(S))
  )
}

proof CharacterizationParacompactness_5_6() {
  lemma SigmaDiscreteImpliesLocallyFinite() {
    assert(
      ∀A[SetOfSubsets] →
      isσDiscrete(A) → isσLocallyFinite(A)
    )
  } →
  
  setVar(T: TopologicalSpace) →
  setVar(C: OpenCover(T)) →
  
  assume(∃R[OpenRefinement(C)] ∧ isσDiscrete(R)) →
  apply(SigmaDiscreteImpliesLocallyFinite(), R) →
  conclude(∃S[OpenRefinement(C)] ∧ isσLocallyFinite(S)) →
  assert(
    (∀C[OpenCover(T)] → ∃S[OpenRefinement(C)] ∧ isσLocallyFinite(S))
  )
}