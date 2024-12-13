theorem Arc_Connected_Not_Locally() {
  assert(
    ∀T:TopologicalSpace(
      ArcConnected(T) ↛ LocallyArcConnected(T)
    )
  )
} ↔

proof Arc_Connected_Not_Locally() {
  letVar(T = ExtendedTopologistsSineCurve) →
  lemma ESC_Is_Arc_Connected() {
    assert(ArcConnected(T))
  } →
  lemma ESC_Not_Locally_Arc_Connected() {
    assert(¬LocallyArcConnected(T))
  } →
  apply(ESC_Is_Arc_Connected()) ∧
  apply(ESC_Not_Locally_Arc_Connected()) →
  assert(
    ∃T:TopologicalSpace(
      ArcConnected(T) ∧ ¬LocallyArcConnected(T)
    )
  ) →
  conclude(ArcConnected(T) ↛ LocallyArcConnected(T))
}