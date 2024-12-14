theorem ComponentNotPathComponent() {
  assert(
    ∀T: TopologicalSpace(
      ∃C: Component(T) ∧
      ¬(IsPathComponent(C, T))
    )
  )
} ↔

proof ComponentNotPathComponent() {
  setVar(T: TopologicalSpace) →
  setVar(C: ClosedTopologistSineCurve) →
  
  lemma SineCurveConnected() {
    assert(IsConnected(C))
  } →
  
  assert(IsComponent(C, T)) →
  
  lemma SineCurveNotPathConnected() {
    assert(¬IsPathConnected(C))
  } →
  
  apply(SineCurveNotPathConnected()) →
  assert(¬IsPathComponent(C, T)) →
  
  conclude(
    ∃C: Component(T) ∧ ¬IsPathComponent(C, T)
  )
}