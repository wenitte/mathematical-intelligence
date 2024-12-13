theorem Arc_Connected_Is_Path_Connected() {
  assert(
    ∀T[TopologicalSpace] : (
      isArcConnected(T) ⇒ isPathConnected(T)
    )
  )
} ↔

proof Arc_Connected_Is_Path_Connected() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(τ: Topology) →
  assert(T = struct(S, τ)) →
  assert(isArcConnected(T)) →
  
  assert(
    ∀x,y ∈ S : (
      ∃f: [0,1] → S : (
        isContinuous(f) ∧
        isInjective(f) ∧
        f(0) = x ∧
        f(1) = y
      )
    )
  ) →

  lemma Continuous_Injection_Is_Continuous_Map() {
    assert(
      ∀g: [isContinuous(g) ∧ isInjective(g)] ⇒ isContinuousMap(g)
    )
  } →

  apply(Continuous_Injection_Is_Continuous_Map()) →
  
  assert(
    ∀x,y ∈ S : (
      ∃f: [0,1] → S : (
        isContinuousMap(f) ∧
        f(0) = x ∧
        f(1) = y
      )
    )
  ) →
  
  assert(isPathConnected(T))
}