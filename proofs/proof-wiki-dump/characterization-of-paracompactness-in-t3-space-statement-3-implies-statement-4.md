theorem Paracompact_T3_Space_3_Implies_4() {
  assert(
    ∀T: TopologicalSpace
    (∀C: OpenCover(T) ∃R: Refinement(C) →
      [Closed(R) ∧ LocallyFinite(R)])
    ⇒
    (∀C: OpenCover(T) → Even(C))
  )
} ↔

proof Paracompact_T3_Space_3_Implies_4() {
  setVar(T: TopologicalSpace) →
  setVar(C: OpenCover(T)) →
  
  lemma OpenCover_With_Closed_LocallyFinite_Refinement_Is_Even() {
    assert(
      ∀R: Refinement(C) →
      [Closed(R) ∧ LocallyFinite(R)] →
      Even(C)
    )
  } →
  
  apply(OpenCover_With_Closed_LocallyFinite_Refinement_Is_Even) →
  assert(Even(C))
}