theorem Closed_Ball_Simply_Connected() {
  assert(
    ∀V(NormedVectorSpace(V, ‖·‖)) ∧
    ∀d(d: V × V → ℝ≥0) ∧
    isMetric(d, ‖·‖) ∧
    ∀τ(isTopology(τ, V) ∧ inducedBy(τ, d)) ∧
    ∀v∈V ∧
    ∀ε∈ℝ>0 ∧
    ∀Bε⁻(v)(isClosedBall(Bε⁻(v), v, ε)) ∧
    ∀τB(isSubspaceTopology(τB, Bε⁻(v), τ)) →
    isSimplyConnected(Bε⁻(v), τB)
  )
} ↔

proof Closed_Ball_Simply_Connected() {
  lemma TVS_Property() {
    assert(
      NormedVectorSpace(V, ‖·‖) →
      isHausdorffTVS(V, τ)
    )
  } →
  
  lemma Ball_Convex() {
    assert(
      isClosedBall(Bε⁻(v), v, ε) →
      isConvex(Bε⁻(v))
    )
  } →
  
  lemma Convex_Simply_Connected() {
    assert(
      isConvex(Bε⁻(v)) →
      isSimplyConnected(Bε⁻(v), τB)
    )
  } →
  
  apply(TVS_Property()) →
  apply(Ball_Convex()) →
  apply(Convex_Simply_Connected()) →
  assert(isSimplyConnected(Bε⁻(v), τB))
}