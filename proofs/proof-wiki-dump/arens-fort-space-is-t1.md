theorem Arens_Fort_Space_Is_T1() {
  assert(
    ∀T: TopologicalSpace where T = ⟨S,τ⟩ ∧ IsArensForSpace(T) ⇒
    IsT1Space(T)
  )
}

proof Arens_Fort_Space_Is_T1() {
  setVar(T: TopologicalSpace) →
  assume(IsArensForSpace(T)) →
  assert(IsCompletelyHausdorff(T)) →
  lemma SeparationAxiomImplication() {
    assert(
      ∀X: TopologicalSpace ⇒
      [IsCompletelyHausdorff(X) → IsT1Space(X)]
    )
  } →
  apply(SeparationAxiomImplication()) →
  assert(IsT1Space(T))
}