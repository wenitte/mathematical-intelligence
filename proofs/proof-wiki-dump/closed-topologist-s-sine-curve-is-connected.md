theorem TopologistsSineCurve_Connected() {
  let G := {(x, sin(1/x)) | x ∈ ℝ, x > 0}
  let J := {(0, y) | y ∈ [-1, 1]}
  assert(
    G ∪ J is connected
  )
} ↔

proof TopologistsSineCurve_Connected() {
  assert((0, ∞) is connected) →
  apply(ContinuousImageOfConnected(G)) →
  assert(G is connected) →
  
  lemma ClosureContainsJ() {
    assert(∀p ∈ J: p ∈ cl(G)) →
    let p := (0, y) where y ∈ [-1, 1] →
    assert(∀ε > 0: Nₑ(p) ∩ G ≠ ∅) →
    
    select(n ∈ ℕ: 1/(2nπ) < ε) →
    apply(SineHalfIntegerPi()) →
    assert(sin((4n + 1)π/2) = 1) ∧
    assert(sin((4n + 3)π/2) = -1) →
    
    apply(IntermediateValueTheorem(
      [2/((4n + 3)π), 2/((4n + 1)π)]
    )) →
    
    exists(x₀: sin(1/x₀) = y) →
    assert(dist((0, y), (x₀, y)) = x₀ < ε) →
    assert((x₀, sin(1/x₀)) ∈ Nₑ(p) ∩ G)
  } →
  
  apply(SetBetweenConnectedAndClosure()) →
  apply(ClosureContainsJ()) →
  assert(G ∪ J is connected)
}